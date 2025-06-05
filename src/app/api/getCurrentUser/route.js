import { connectDB } from "@/lib/connectDB";
import { verifyToken } from "@/lib/verifyToken";
import { NextResponse } from "next/server";

export const GET = async (req, res) => {
  const cookieToken = req.cookies.get("token")?.value;

  if (!cookieToken) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const { valid, decoded } = verifyToken(cookieToken);

  if (!valid) {
    return NextResponse.json({ message: "Invalid Token" }, { status: 403 });
  }

  const db = await connectDB();

  const result = await db.collection("users").findOne({ email: { $eq: decoded.email}}, { projection: { _id: 1, name: 1, email: 1, role: 1}});

  console.log(result)

  return NextResponse.json(result, { status: 200})
};
