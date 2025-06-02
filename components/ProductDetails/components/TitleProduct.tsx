import Image from "next/image";
import { BlocksContent, BlocksRenderer } from "@strapi/blocks-react-renderer";
import { ITitleProduct } from "./types";
import { motion } from "framer-motion";

export const TitleProduct = ({
  product,
  imagePreview,
  setImagePreview,
}: ITitleProduct) => {
  const { name, description, images } = product;

  return (
    <div className="col-span-12 lg:col-span-3 flex flex-col justify-center gap-10 mb-10 lg:mb-0">
      <h2 className="text-3xl font-semibold">{name}</h2>
      <BlocksRenderer
        content={description as BlocksContent}
        blocks={{
          paragraph: ({ children }) => (
            <p className="text-sm text-secondary">{children}</p>
          ),
        }}
      />
      <div className="flex overflow-x-auto gap-2 scrollbar-hide">
        <div className="flex flex-nowrap gap-2 relative">
          {images.map((img, index) => {
            const isActive = img === imagePreview;

            return (
              <div
                key={index}
                className="relative p-1 h-[80px] w-[80px] flex-shrink-0 cursor-pointer"
                onClick={() => setImagePreview(img)}
              >
                {isActive && (
                  <motion.div
                    layoutId="highlight"
                    className="absolute inset-0 bg-gray-300 rounded"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}

                <motion.div
                  className="relative z-10 h-full w-full overflow-hidden"
                  whileHover={{ scale: isActive ? 1 : 1.05 }}
                >
                  <Image
                    src={img}
                    alt={name}
                    width={80}
                    height={80}
                    className="h-full w-full object-contain"
                  />
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
