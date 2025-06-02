import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { IImagePreview } from "./types";

export const ImagePreview = ({
  name,
  imagePreview,
  setIsZoomOpen,
}: IImagePreview) => {
  return (
    <div className="col-span-12 lg:col-span-6 flex justify-center lg:max-h-[500px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={imagePreview}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.2 }}
          className="w-full h-full flex justify-center items-center cursor-zoom-in"
          onClick={() => setIsZoomOpen(true)}
        >
          <Image
            src={imagePreview}
            alt={name}
            width={500}
            height={500}
            className="object-contain w-full h-full"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
