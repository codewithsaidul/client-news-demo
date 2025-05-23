import { verifyAccess } from "@/lib/verifyAccess";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const errorResponse = verifyAccess(req);
  if (errorResponse) return errorResponse;


  return NextResponse.json({ message: "You have access" }, { status: 200 });
};
