"use client";

import SignInForm from "@/components/custom/auth/signInForm";
import currentUser from "@/hooks/getCurrentUser";
import { Skeleton } from "@/components/custom/home/skeleton";
import Welcome from "@/components/custom/home/welcome";

export default function Home() {
  const { user, loading } = currentUser();

  if (loading) {
    return <Skeleton />;
  }
  return (
    <main className="flex h-screen flex-col items-center justify-center">
      {user ? <Welcome /> : <SignInForm />}
    </main>
  );
}
