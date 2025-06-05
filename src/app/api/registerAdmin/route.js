import { connectDB } from "@/lib/connectDB";
import { verifyRoles } from "@/lib/verifyRoles";
import bcrypt from "bcryptjs";

export const POST = async (req) => {
  try {

    const auth = verifyRoles(req, ['superadmin']);
    if (auth) return auth

    const { name, email, password, role } = await req.json();

    const db = await connectDB();

    const existingUser = await db.collection("users").findOne({ email });
    if (existingUser) {
      return new Response(JSON.stringify({ message: "User already exists" }), {
        status: 400,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
      name,
      email,
      password: hashedPassword,
      role,
      createdAt: new Date(),
    };

    await db.collection("users").insertOne(newUser);

    return new Response(JSON.stringify({ message: "User registered successfully" }), {
      status: 200,
    });
  } catch (err) {
    console.error("Registration error:", err);
    return new Response("Internal Server Error", { status: 500 });
  }
};
