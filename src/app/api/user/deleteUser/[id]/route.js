import { connectDB } from "@/lib/connectDB";
import { verifyRoles } from "@/lib/verifyRoles";
import { verifyToken } from "@/lib/verifyToken";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const DELETE = async (req, { params }) => {
  try {
    // ✅ Only superadmins can delete users
    const auth = verifyRoles(req, ["superadmin"]);
    if (auth) return auth;

    // ✅ Get token from cookies
    const cookieToken = req.cookies.get("token")?.value;


    const {
      decoded: { email: requesterEmail },
    } = verifyToken(cookieToken);

    const { id } = params;
    if (!ObjectId.isValid(id)) {
      return NextResponse.json({ message: "Invalid user ID" }, { status: 400 });
    }

    const query = { _id: new ObjectId(id) };

    // ✅ Connect to DB
    const db = await connectDB();
    const user = await db.collection("users").findOne(query);

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    // ✅ Prevent deleting self
    if (user.email === requesterEmail) {
      return NextResponse.json({ message: "You can't delete yourself" }, { status: 400 });
    }

    // ✅ Prevent deleting last superadmin
    if (user.role === "superadmin") {
      const superAdminCount = await db.collection("users").countDocuments({ role: "superadmin" });
      if (superAdminCount <= 1) {
        return NextResponse.json(
          { message: "At least 1 Super Admin is required" },
          { status: 400 }
        );
      }
    }

    // ✅ Delete the user
    const result = await db.collection("users").deleteOne(query);

    return NextResponse.json(
      result,
      { status: 200 }
    );
  } catch (error) {
    console.error("User Delete Error:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
};
