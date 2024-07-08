import { Skeleton } from "@/components/ui/skeleton";

const FormSkeleton = () => {
  return (
    <div className="space-y-5 flex items-center justify-center h-screen flex-col">
      <Skeleton className="h-4 p-5 w-[90%] md:w-[30%]" />
      <Skeleton className="h-4 p-5 w-[90%] md:w-[30%]" />
    </div>
  );
};

export default FormSkeleton;
