import { NextResponse } from "next/server";
import { verifyToken } from "./verifyToken"; // যদি আপনি আলাদা verifyToken function বানিয়ে থাকেন

export const verifyAccess = (req) => {
  const cookieToken = req.cookies.get("token")?.value;

  if (!cookieToken) {
    return NextResponse.json(
      { message: "Unauthorized Access" },
      { status: 401 }
    );
  }

  const { valid } = verifyToken(cookieToken);

  if (!valid) {
    return NextResponse.json({ message: "Invalid Token" }, { status: 403 });
  }

  return null; // null means token is valid
};
