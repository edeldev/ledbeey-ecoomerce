"use client";

import { Account } from "@/components/Account";
import { User } from "next-auth";
import { useSession } from "next-auth/react";

export default function AccountPage() {
  const { data: session, status } = useSession();
  const userData = session?.user;

  return (
    <div className="bg-accountColor pt-28 min-h-[calc(100dvh-80px)]">
      {status === "loading" && !session ? (
        <h2 className="text-2xl text-center">Loading...</h2>
      ) : (
        <Account userData={userData as User} />
      )}
    </div>
  );
}
