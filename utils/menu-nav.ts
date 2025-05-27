import { IconShoppingCart, IconUser, IconPhone } from "@tabler/icons-react";
import { IMenuNav } from "./types";

export const MENU_NAV: IMenuNav[] = [
  {
    id: 1,
    text: "Ver carrito",
    icon: IconShoppingCart,
    link: "",
  },
  {
    id: 2,
    text: "Cuenta",
    icon: IconUser,
    link: "/account",
  },
  {
    id: 3,
    text: "Contáctanos",
    icon: IconPhone,
    link: "",
  },
];
