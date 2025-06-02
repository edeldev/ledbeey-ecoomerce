import Image from "next/image";
import { IModalImage } from "./types";
import { motion, AnimatePresence } from "framer-motion";

export const ModalImage = ({
  imagePreview,
  isZoomOpen,
  setIsZoomOpen,
}: IModalImage) => {
  return (
    <AnimatePresence>
      {isZoomOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 cursor-zoom-out"
          onClick={() => setIsZoomOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.7 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={imagePreview}
              alt="Zoomed"
              width={800}
              height={800}
              className="object-contain max-h-[95%] max-w-[95%]"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
