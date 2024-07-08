import { primary } from "@/app/fonts";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface Props {
  title: string;
  number: any;
  href?: string;
}

const AdmissionCard = ({ title, number, href }: Props) => {
  return (
    <Link href={`${href}`}>
      <div className="bg-input rounded-xl h-[150px] w-[300px] flex flex-col justify-between p-3">
        <h1 className="text-3xl font-bold">{title}</h1>
        <span
          className={cn(primary.className, "text-primary text-4xl font-medium")}
        >
          {number}
        </span>
      </div>
    </Link>
  );
};

export default AdmissionCard;
