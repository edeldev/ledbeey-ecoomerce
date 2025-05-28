import React from "react";
import Link from "next/link";
import clsx from "clsx";
import { IButton } from "./types";

const sizeClasses = {
  sm: "px-4 py-1 text-sm",
  md: "px-5 py-2 text-base",
  lg: "px-8 py-3 text-lg",
};

export const Button = ({
  href,
  children,
  size = "md",
  color = { from: "#000000", to: "#ffffff" },
  text = "text-black",
  hoverTextColor = "hover:text-white",
  className,
}: IButton) => {
  return (
    <Link
      href={href}
      style={{
        backgroundImage: `linear-gradient(100deg, ${color.from} 50%, ${color.to} 50%)`,
      }}
      className={clsx(
        "mono uppercase relative font-bold rounded-[10px] border-none mx-auto block backdrop-blur-sm",
        "transition-[background-position] duration-[667ms] ease-[cubic-bezier(0.24,0.22,0.31,1.07)]",
        "bg-no-repeat bg-[length:210%_100%] bg-[position:99%_center] hover:bg-[position:0_center]",
        text,
        hoverTextColor,
        sizeClasses[size],
        className
      )}
    >
      {children}
    </Link>
  );
};
