"use client"
import EditForm from "@/components/dashboard/updateNews/EditForm";


const page = ({ params }) => {
  
  console.log(params)

  return (
    <div className="p-5">
      <div className="border-b pb-5">
        <h2 className="text-4xl font-title font-bold">Update News</h2>
      </div>

      <div className="mt-16">
        <EditForm />
      </div>
    </div>
  );
};

export default page;
