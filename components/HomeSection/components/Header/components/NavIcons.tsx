import Link from "next/link";
import { ICONS_NAV } from "@/utils/nav";
import { IconMenu3 } from "@tabler/icons-react";
import { INavIcon } from "./types";

export const NavIcons = ({ setOpen }: INavIcon) => {
  return (
    <div className="flex gap-3">
      {ICONS_NAV.map((item) => (
        <div
          key={item.id}
          className={`p-2 rounded-full hover:bg-[#F7F6F5] transition duration-300 cursor-pointer ${
            item.size === "lg" ? "hidden lg:block" : ""
          }`}
        >
          <Link href={item.link}>
            <item.Icon stroke={1} />
          </Link>
        </div>
      ))}
      <div
        className="lg:hidden p-2 rounded-full hover:bg-[#F7F6F5] transition duration-300 cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <IconMenu3 stroke={1} />
      </div>
    </div>
  );
};
