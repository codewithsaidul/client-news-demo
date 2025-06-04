"use client";
import { useGetAllUsersQuery } from "@/features/getAllUsers/getAllUsers";
import Loader from "../loading/Loader";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { dateFormater } from "@/lib/utils";
import { Button } from "../ui/button";
import Swal from "sweetalert2";

const AllUsers = () => {
  const { data: users, isLoading } = useGetAllUsersQuery();

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full gap-10 mt-10">
        <Loader />
        <Loader />
        <Loader />
        <Loader />
        <Loader />
      </div>
    );
  }

  const deleteNewsByID = async (userId) => {
    try {
      const existingUser = users.find((user) => user._id === userId);

      if (existingUser?.role === "superadmin") {
        Swal.fire({
          title: "Cann't deleted super admin",
          icon: "error",
        });
      }
    } catch {
      Swal.fire({
        title: "User deleted unsuccessfully!",
        icon: "error",
      });
    }
  };

  return (
    <div>
      {users.length > 0 ? (
        <div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Sl No</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Create Date</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {users.map((user, idx) => (
                <TableRow key={user._id}>
                  <TableCell className="font-medium">{idx + 1}</TableCell>
                  <TableCell className="font-medium">{user.name}</TableCell>
                  <TableCell className="font-medium">{user.email}</TableCell>
                  <TableCell className="font-medium">{user.role}</TableCell>
                  <TableCell>{dateFormater(user.createdAt)}</TableCell>
                  <TableCell className="flex gap-2">
                    <Button className="bg-blue-500">Edit</Button>
                    <Button
                      className="bg-red-600 cursor-pointer"
                      onClick={() => deleteNewsByID(user._id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ) : (
        <div className="flex justify-center items-center min-h-[80vh]">
          <p className="text-2xl font-medium font-title">No users Found</p>
        </div>
      )}
    </div>
  );
};

export default AllUsers;
