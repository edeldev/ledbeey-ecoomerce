"use client";

import { Fragment } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IAddAdressModal } from "./types";

export const AddAdressModal = ({ isOpen, onClose }: IAddAdressModal) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <Fragment>
          <motion.div
            className="fixed inset-0 bg-black/30 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
          >
            <div className="bg-white p-6 md:p-10 rounded-xl w-full max-w-2xl shadow-lg relative">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold">Agregar dirección</h2>
                <button
                  onClick={onClose}
                  className="text-gray-400 text-xl absolute top-4 right-4"
                >
                  &times;
                </button>
              </div>

              <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Nombre"
                  className="border p-2 rounded"
                />
                <input
                  type="text"
                  placeholder="Apellido"
                  className="border p-2 rounded"
                />
                <input
                  type="text"
                  placeholder="Calle y número de casa"
                  className="border p-2 rounded"
                />
                <input
                  type="text"
                  placeholder="Apt, local, etc. (opcional)"
                  className="border p-2 rounded"
                />
                <input
                  type="text"
                  placeholder="País"
                  className="border p-2 rounded"
                />
                <select className="border p-2 rounded">
                  <option value="">State / Province</option>
                  <option>Aguascalientes</option>
                  <option>CDMX</option>
                  <option>Jalisco</option>
                </select>
                <select className="border p-2 rounded">
                  <option value="">Ciudad</option>
                  <option>Mexico</option>
                </select>
                <input
                  type="text"
                  placeholder="Código postal"
                  className="border p-2 rounded"
                />
                <input
                  type="text"
                  placeholder="Teléfono"
                  className="border p-2 rounded col-span-1 md:col-span-2"
                />

                <div className="col-span-1 sm:col-span-2 flex justify-end gap-3 mt-4">
                  <button
                    type="button"
                    onClick={onClose}
                    className="border px-4 py-2 text-sm rounded"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-black text-white px-4 py-2 text-sm rounded"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </Fragment>
      )}
    </AnimatePresence>
  );
};
