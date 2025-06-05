import { connectDB } from "@/lib/connectDB";
import { verifyRoles } from "@/lib/verifyRoles";

export const GET = async (req) => {
  try {
    const auth = verifyRoles(req, ["superadmin"]);
    if (auth) return auth;

    const db = await connectDB();
    const user = await db
      .collection("users")
      .find({}, { projection: { _id: 1, name: 1, email: 1, role: 1, createdAt: 1 } })
      .toArray();

    return new Response(JSON.stringify(user), {
      status: 200,
    });
  } catch (err) {
    console.error("Registration error:", err);
    return new Response("Internal Server Error", { status: 500 });
  }
};
