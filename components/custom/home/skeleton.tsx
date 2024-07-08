import { Icon } from "@iconify/react";

export async function Skeleton() {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-3xl">
        <Icon icon="iconoir:antenna-signal" className="animate-pulse" />
      </div>
    ); 
}