"use client";
import { useState, useMemo, Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, Nav, NavIcons } from "./components";
import { IconX } from "@tabler/icons-react";
import LOGO from "@/public/Ledbeey.png";

export const Header = () => {
  const { scrollY } = useScroll();
  const [isHovered, setIsHovered] = useState(false);
  const [open, setOpen] = useState(false);

  const opacity = useTransform(scrollY, [0, 100], [1, 0.75]);
  const blur = useTransform(scrollY, [0, 100], [0, 10]);
  const backgroundColor = useTransform(opacity, (o) =>
    isHovered ? "rgba(255, 255, 255, 1)" : `rgba(255, 255, 255, ${o})`
  );
  const backdropFilter = useTransform(blur, (b) => `blur(${b}px)`);

  const MotionHeader = useMemo(() => motion.header, []);

  return (
    <Fragment>
      <MotionHeader
        className="sticky top-0 left-0 w-full px-5 sm:px-16 z-20 transition duration-300"
        style={
          open
            ? {
                backgroundColor: "rgba(255,255,255,1)",
                backdropFilter: "none",
                WebkitBackdropFilter: "none",
              }
            : {
                backgroundColor,
                backdropFilter,
                WebkitBackdropFilter: backdropFilter,
              }
        }
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-16">
            <Link
              href="/"
              className="hidden xs:block"
              onClick={() => setOpen(false)}
            >
              <Image
                src={LOGO}
                alt="Ledbeey logo"
                priority
                width={150}
                height={150}
              />
            </Link>
            <Nav />
          </div>

          {open ? (
            <div
              className="p-2 rounded-full hover:bg-[#F7F6F5] transition duration-300 cursor-pointer"
              onClick={() => setOpen(false)}
            >
              <IconX stroke={1} />
            </div>
          ) : (
            <NavIcons setOpen={setOpen} />
          )}
        </div>
      </MotionHeader>

      {open && <Menu open={open} setOpen={setOpen} />}
    </Fragment>
  );
};
