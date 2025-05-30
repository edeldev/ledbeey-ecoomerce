import { IconSearch, IconShoppingCart, IconUser } from "@tabler/icons-react";
import { IIconItem, INavItem } from "./types";

export const NAV_ITEMS: INavItem[] = [
  { id: 1, text: "Todos los productos", href: "/category/clothes" },
  { id: 2, text: "Hombre", href: "/category/clothes/men" },
  { id: 3, text: "Mujer", href: "/category/clothes/female" },
];

export const ICONS_NAV: IIconItem[] = [
  { id: 1, Icon: IconSearch, size: "lg", link: "" },
  { id: 2, Icon: IconUser, size: "sm", link: "/account" },
  { id: 3, Icon: IconShoppingCart, size: "sm", link: "" },
];
