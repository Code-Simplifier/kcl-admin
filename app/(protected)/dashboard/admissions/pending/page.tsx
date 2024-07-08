import { primary } from "@/app/fonts";
import { PendingTable } from "@/components/custom/dashboard/admissions/pending/pendingTable";
import Table  from "@/components/custom/dashboard/admissions/pending/table";
import { cn } from "@/lib/utils";

const Pending = () => {
  return (
    <div className="flex flex-col space-y-5">
      <h1
        className={cn(primary.className, "text-5xl font-thin capitalize m-5")}
      >
        Pending admissions
      </h1>
      <div className="mx-5">
        <Table />
      </div>
    </div>
  );
};

export default Pending;
