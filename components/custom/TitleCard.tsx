import { primary } from "@/app/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "../ui/button";

interface Props {
  title: string;
  desc: string;
  src: string;
}

const TitleCard = ({ title, desc, src }: Props) => {
  return (
    <div className="w-full bg-border/50 rounded-xl p-7 border-2 flex justify-between">
      <div className="flex flex-col">
        <span
          className={cn(
            primary.className,
            "font-medium text-5xl capitalize text-primary"
          )}
        >
          {title}
        </span>
        <br />
        <div className="flex flex-col w-[50%] h-full justify-between">
          <p className="text-lg text-justify text-slate-300">{desc}</p>
          <Button className="text-lg w-fit">Read Docs</Button>
        </div>
      </div>
      <Image src={src} alt="title" width={300} height={300} />
    </div>
  );
};

export default TitleCard;
