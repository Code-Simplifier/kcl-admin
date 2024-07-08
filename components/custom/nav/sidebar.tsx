import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="flex flex-col items-center justify-between p-3 text-3xl bg-input text-slate-400 h-full fixed">
      <div className="flex flex-col space-y-10 items-center">
        <Link href={"/dashboard"}>
          <Image src="/img/zeus.png" alt="logo" width={40} height={40} />
        </Link>
        <Link href={"/dashboard/settings"}>
          <Icon
            className="hover:text-primary duration-200 cursor-pointer transition-all"
            icon="mingcute:settings-7-line"
          />
        </Link>
        <Icon
          className="hover:text-primary duration-200 cursor-pointer transition-all"
          icon="ph:database-light"
        />
        <Icon
          className="hover:text-primary duration-200 cursor-pointer transition-all"
          icon="hugeicons:message-02"
        />
        <Link href={"/dashboard/admissions"}>
          <Icon
            className="hover:text-primary duration-200 cursor-pointer transition-all"
            icon="ph:student-fill"
          />
        </Link>
      </div>
      <Icon
        className="hover:text-primary duration-200 cursor-pointer transition-all"
        icon="solar:logout-outline"
      />
    </div>
  );
};

export default Sidebar;
