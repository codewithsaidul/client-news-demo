import { Button } from "@/components/ui/button";
import AllUsers from "@/components/users/AllUsers";

const page = () => {
  return (
    <div className="p-5">
      <div className="flex justify-between items-center border-b pb-7">
        <h2 className="text-3xl font-bold font-title">All Users</h2>
        <div className="flex items-center gap-4">
          <Button className="cursor-pointer">
            Add New Users
          </Button>
        </div>
      </div>


      <div className="mt-16">
        <AllUsers />
      </div>
    </div>
  );
};

export default page;
