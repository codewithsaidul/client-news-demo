import { Skeleton } from "@/components/ui/skeleton";

const Loader = () => {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[150px] w-full rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[350px] sm:w-[250px] md:w-[200px] xl:w-[250px]" />
        <Skeleton className="h-4 w-[250px] sm:w-[200px] md:w-[150px] xl:w-[200px]" />
      </div>
    </div>
  );
};

export default Loader;
