import { verifyRoles } from "@/lib/verifyRoles";

export const isAdmin = async (req) => {
  const role = verifyRoles(req);

  console.log(role)

//   if (role !== "superadmin") {
//     return NextResponse.json({ message: "Access denied: Admins only" }, { status: 403 });
//   }

  return null
};
