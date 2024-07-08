import { Button } from "@/components/ui/button";
import currentUser from "@/hooks/getCurrentUser";
import Link from "next/link";

const Welcome = () => {
  const { user, loading } = currentUser();

  return (
    <section className="h-screen flex flex-col items-center justify-center">
      <div className="bg-input rounded-lg w-[600px] flex flex-col items-center p-5">
        <div className="flex flex-col items-center justify-center space-y-3">
          <h1 className="text-5xl brand font-thin uppercase tracking-wide">
            admin
          </h1>
        </div>
        <div className="flex flex-col my-5 border-y py-3 space-y-5 text-lg w-[90%]">
          <div className="flex items-center justify-between">
            <span>Role</span>
            <code className="bg-border p-2 rounded-lg font-semibold">
              admin
            </code>
          </div>
          <div className="flex items-center justify-between">
            <span>Email</span>
            <span className="bg-border p-2 rounded-lg font-semibold">
              {user?.email}
            </span>
          </div>
          <Button variant="ghost">Forgot Password?</Button>
        </div>
        <div className="flex space-x-4 items-center">
          <Link href={"/dashboard"}>
            <Button variant="default">Dashboard</Button>
          </Link>
          <Link href={"/analytics"}>
            <Button variant="outline">Analytics</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
