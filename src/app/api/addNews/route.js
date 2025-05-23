import { verifyToken } from "@/lib/verifyToken";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const cookeiStore = await cookies();
  const cookieToken = cookeiStore.get("token")?.value;
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

  return NextResponse.json({ message: "You have access" }, { status: 200 });
};
