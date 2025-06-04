import { NextResponse } from "next/server";
import { verifyToken } from "./verifyToken"; // যদি আপনি আলাদা verifyToken function বানিয়ে থাকেন

export const verifyRoles = (req, allowedRoles) => {
  const cookieToken = req.cookies.get("token")?.value;



  if (!cookieToken) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const { valid, decoded } = verifyToken(cookieToken);

  if (!valid) {
    return NextResponse.json({ message: "Invalid Token" }, { status: 403 });
  }

  if (!allowedRoles.includes(decoded.role)) {
    return NextResponse.json(
      { message: `Forbidden: Only [${allowedRoles.join(", ")}] allowed` },
      { status: 403 }
    );
  }

  return null // null means token is valid
};
