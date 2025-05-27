"use client";

import { useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import FormLogin from "@/components/form/auth/FormLogin";
import FormRegister from "@/components/form/auth/FormRegister";
import Image from "next/image";
import LEDBEEY from "@/public/minimalistic-ledbeey.png";
import LEDBEEY_LIGHT from "@/public/ledbeey-light.png";
import LOGO from "@/public/Ledbeey.png";

export default function AuthPage() {
  const pathname = usePathname();
  const [isImageLoading, setIsImageLoading] = useState(true);

  const imageSrc = useMemo(() => {
    return pathname === "/account/login" ? LEDBEEY : LEDBEEY_LIGHT;
  }, [pathname]);

  return (
    <div className="min-h-[calc(100dvh-80px)] px-5 sm:px-16 flex justify-center items-center">
      <div className="grid grid-cols-12 bg-[#F9F9F9] mt-20 md:mt-0 mb-10 md:mb-0 max-w-3xl md:h-[590px] overflow-hidden rounded-xl p-1 shadow-xl">
        <div className="col-span-12 md:col-span-6 p-5 overflow-auto h-full">
          <Image src={LOGO} alt="logo" className="w-[105px] h-auto" />

          <AnimatePresence mode="wait">
            {pathname === "/account/login" && (
              <motion.div
                key="login"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <FormLogin />
              </motion.div>
            )}

            {pathname === "/account/register" && (
              <motion.div
                key="register"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <FormRegister />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="col-span-12 md:col-span-6 relative">
          {isImageLoading && (
            <div className="absolute inset-0 animate-pulse bg-gray-300 rounded-xl md:rounded-none md:rounded-r-xl z-1" />
          )}
          <Image
            src={imageSrc}
            alt="Ledbeey"
            priority
            onLoad={() => setIsImageLoading(false)}
            className={`object-cover w-full h-full rounded-xl md:rounded-none md:rounded-r-xl ${
              isImageLoading ? "opacity-0" : "opacity-100"
            }`}
          />
        </div>
      </div>
    </div>
  );
}
