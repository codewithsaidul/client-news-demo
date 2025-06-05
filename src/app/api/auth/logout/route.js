import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export const POST = async () => {
  const cookieStore = cookies();
  cookieStore.set("token", "", {
    path: "/",
    maxAge: 0,
  });

  return NextResponse.json({ message: "Logged out" }, { status: 200 });
}
