"use client";

import { useState } from "react";
import Link from "next/link";
import { IconStarFilled } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { IFeatureProduct } from "./types";

export const FeatureProduct = ({ product, setActiveTab }: IFeatureProduct) => {
  const { price } = product;
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
  const colors = [
    { name: "Negro", value: "black" },
    { name: "Blanco", value: "white" },
    { name: "Rojo", value: "red" },
    { name: "Azul", value: "blue" },
  ];
  const [selectedSize, setSelectedSize] = useState<string>(sizes[0]);
  const [selectedColor, setSelectedColor] = useState<string>(colors[0].value);

  return (
    <div className="col-span-12 lg:col-span-3 flex flex-col justify-center gap-12 mt-10 lg:mt-0">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <p className="uppercase text-xs font-bold">Tamaño</p>
          <Link
            href="#size-guide"
            onClick={() => setActiveTab("details")}
            className="text-xs underline"
          >
            Guía de tallas
          </Link>
        </div>
        <div className="flex flex-wrap gap-2">
          {sizes.map((size) => {
            const isSelected = selectedSize === size;
            return (
              <label key={size} className="relative">
                <input
                  type="radio"
                  name="size"
                  value={size}
                  onChange={() => setSelectedSize(size)}
                  className="hidden"
                />
                <motion.span
                  layout
                  initial={false}
                  animate={{
                    backgroundColor: isSelected ? "#000" : "#fff",
                    color: isSelected ? "#fff" : "#374151",
                    borderColor: isSelected ? "#000" : "#d1d5db",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="px-3 py-1 border text-sm rounded-md block cursor-pointer"
                >
                  {size}
                </motion.span>
              </label>
            );
          })}
        </div>
      </div>

      <div className="flex justify-between items-center">
        <p className="text-secondary uppercase text-xs">Opiniones</p>
        <div className="flex gap-1">
          {[...Array(5)].map((_, index) => (
            <IconStarFilled key={index} size={16} className="text-yellow-500" />
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center">
        <p className="text-secondary uppercase text-xs">Precio</p>
        <p className="font-bold">${price}</p>
      </div>

      <div className="space-y-4">
        <p className="uppercase text-xs font-bold">Color</p>
        <div className="flex gap-3">
          {colors.map((color) => {
            const isSelected = selectedColor === color.value;
            return (
              <label key={color.value} className="cursor-pointer relative">
                <input
                  type="radio"
                  name="color"
                  value={color.value}
                  onChange={() => setSelectedColor(color.value)}
                  className="hidden"
                />
                <motion.span
                  layout
                  initial={false}
                  animate={{
                    scale: 1,
                    boxShadow: isSelected ? "0 0 0 2px black" : "none",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="w-6 h-6 rounded-full border-2 block"
                  style={{ backgroundColor: color.value }}
                />
              </label>
            );
          })}
        </div>
      </div>
    </div>
  );
};
