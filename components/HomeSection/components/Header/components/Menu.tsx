"use client";
import { useEffect } from "react";
import Link from "next/link";
import { NAV_ITEMS } from "@/utils/nav";
import { MENU_NAV } from "@/utils/menu-nav";
import { IMenu } from "./types";

export const Menu = ({ open, setOpen }: IMenu) => {
  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [open]);

  return (
    <nav className="fixed w-full h-[calc(100vh-80px)] bg-white px-5 sm:px-16 pt-32 overflow-auto flex flex-col z-10">
      <ul className="flex flex-col gap-3">
        {NAV_ITEMS.map((item) => (
          <li key={item.id}>
            <Link
              href={item.href}
              className="text-2xl md:text-4xl font-semibold capitalize hover:text-black/70 transition duration-300"
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>

      <ul className="flex flex-col gap-4 my-10">
        {MENU_NAV.map(({ id, text, link, icon: Icon }) => (
          <li key={id} className="self-start">
            <Link
              href={link}
              onClick={() => setOpen(false)}
              className="flex gap-2 items-center text-xl text-secondary capitalize hover:text-black transition duration-300"
            >
              <Icon size={25} stroke={1.5} />
              {text}
            </Link>
          </li>
        ))}
      </ul>

      <form action="" className="mt-auto mb-5">
        <div className="flex items-center flex-wrap gap-2 w-full">
          <input
            type="text"
            placeholder="Search..."
            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:bg-neutral-50"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-black text-white rounded-lg hover:bg-black/80 transition duration-300"
          >
            Search
          </button>
        </div>
      </form>
    </nav>
  );
};
