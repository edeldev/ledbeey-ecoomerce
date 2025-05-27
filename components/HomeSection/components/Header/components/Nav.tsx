import Link from "next/link";
import { NAV_ITEMS } from "@/utils/nav";

export const Nav = () => {
  return (
    <nav>
      <ul className="hidden lg:flex items-center gap-14">
        {NAV_ITEMS.map((item) => (
          <li key={item.id}>
            <Link
              className="mono uppercase text-secondary hover:text-black transition duration-300"
              href={item.href}
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
