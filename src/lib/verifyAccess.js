import { NextResponse } from "next/server";
import { verifyToken } from "./verifyToken"; // যদি আপনি আলাদা verifyToken function বানিয়ে থাকেন

export const verifyAccess = (req) => {
  const cookieToken = req.cookies.get("token")?.value;
  const authHeader = req.headers.get("authorization");

  if (!cookieToken || !authHeader) {
    return NextResponse.json(
      { message: "Unauthorized Access" },
      { status: 401 }
    );
  }

  const headerToken = authHeader.startsWith("Bearer ")
    ? authHeader.split(" ")[1]
    : null;

  if (!headerToken) {
    return NextResponse.json(
      { message: "Unauthorized Access" },
      { status: 401 }
    );
  }

  const { valid } = verifyToken(cookieToken);

  if (!valid || cookieToken !== headerToken) {
    return NextResponse.json({ message: "Invalid Token" }, { status: 403 });
  }

  return null; // null means token is valid
};
