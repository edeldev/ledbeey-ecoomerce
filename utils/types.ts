import { IconProps } from "@tabler/icons-react";
import { ComponentType } from "react";

export interface INavItem {
  id: number;
  text: string;
  href: string;
}

export interface IIconItem {
  id: number;
  Icon: ComponentType<IconProps>;
  size: "lg" | "sm";
  link: string;
}

export interface IMenuNav {
  id: number;
  text: string;
  icon: ComponentType<IconProps>;
  link: string;
}
