"use client";
import { IconHeart } from "@tabler/icons-react";
import { useState, useRef } from "react";
import {
  motion,
  useAnimation,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";

export const AddToCart = () => {
  const [quantity, setQuantity] = useState(1);
  const controls = useAnimation();
  const lastScrollY = useRef(0);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (current) => {
    if (current > lastScrollY.current) {
      controls.start({ y: "100%" });
    } else {
      controls.start({ y: 0 });
    }
    lastScrollY.current = current;
  });

  const handleDecrease = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  return (
    <motion.div
      animate={controls}
      initial={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed bottom-0 w-full z-10"
    >
      <div className="flex justify-center items-center gap-4 bg-zinc-900 rounded-t-3xl px-6 py-4 shadow-lg">
        <div className="flex items-center bg-white rounded-md px-3 py-1 gap-3 border border-gray-200 shadow-sm">
          <button
            onClick={handleDecrease}
            className="text-gray-600 hover:text-black text-base md:text-xl font-medium transition"
            type="button"
            disabled={quantity === 1}
          >
            −
          </button>

          <div className="relative w-8 h-6 overflow-hidden text-center">
            <AnimatePresence mode="wait">
              <motion.span
                key={quantity}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute left-0 right-0 top-0 text-lg md:text-base font-semibold text-gray-800"
              >
                {quantity}
              </motion.span>
            </AnimatePresence>
          </div>

          <button
            onClick={handleIncrease}
            className="text-gray-600 hover:text-black text-base md:text-xl font-medium transition"
            type="button"
          >
            +
          </button>
        </div>

        <button
          type="button"
          className="uppercase text-xs md:text-sm font-semibold bg-white text-black px-5 py-2 rounded-md shadow-sm hover:bg-gray-100 transition"
        >
          Agregar al carro
        </button>

        <button
          type="button"
          className="p-2 rounded-full hover:bg-white/10 transition"
        >
          <IconHeart className="text-white" size={24} />
        </button>
      </div>
    </motion.div>
  );
};
