import { connectDB } from "@/lib/connectDB";
import { verifyRoles } from "@/lib/verifyRoles";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {

    const auth = verifyRoles(req, ['superadmin']);
    if (auth) return auth

    const { name, email, password, role } = await req.json();

    const db = await connectDB();

    const existingUser = await db.collection("users").findOne({ email });

    // chekcing user already exist or not
    if (existingUser) {
      return NextResponse.json({ message: "User already exists" }, {
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

    return NextResponse.json({ message: "User registered successfully" }, {
      status: 200,
    });
  } catch (err) {
    return NextResponse.json("Internal Server Error", { status: 500 });
  }
};
