"use client";

import { useSession, signOut } from "next-auth/react";

export default function AccountPage() {
  const { data: session, status } = useSession();
  const userData = session?.user;

  return (
    <div className="bg-accountColor pt-28 min-h-[calc(100dvh-80px)]">
      {status === "loading" && !session ? (
        <h2 className="text-2xl text-center">Loading...</h2>
      ) : (
        <div className="flex flex-col items-center gap-4">
          <div>
            <h2 className="text-4xl font-semibold text-center">
              {userData?.username}
            </h2>
            <p className="text-sm text-center">{userData?.email}</p>
          </div>

          <button
            onClick={() => signOut({ callbackUrl: "/account/login" })}
            className="bg-black text-white p-2 rounded-md text-xs uppercase hover:bg-black/80 transition duration-300"
          >
            Cerrar sesión
          </button>
        </div>
      )}
    </div>
  );
}
