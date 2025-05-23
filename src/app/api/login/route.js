import { connectDB } from "@/lib/connectDB";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

const JWT_SECRET = process.env.JWT_SECRET; // Add this in your .env.local

export const POST = async (req) => {
  try {
    const { email, password } = await req.json();

    const db = await connectDB();
    const user = await db.collection("users").findOne({ email });

    if (!user) {
      return new Response(JSON.stringify({ message: "User not found" }), {
        status: 401,
      });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return new Response(JSON.stringify({ message: "Invalid password" }), {
        status: 401,
      });
    }

    // ✅ Generate JWT token
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      JWT_SECRET,
      { expiresIn: "7d" }
    );

    // ✅ Set cookie using `next/headers`
    const cookieStore = cookies();
    cookieStore.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    return new Response(
      JSON.stringify({ message: "Login successful" }),
      { status: 200 }
    );
  } catch (err) {
    console.error("Registration error:", err);
    return new Response("Internal Server Error", { status: 500 });
  }
};
