"use client";
import { Fragment, useState } from "react";
import Link from "next/link";
import { IconBook, IconTruckDelivery, IconUser } from "@tabler/icons-react";
import { signOut } from "next-auth/react";
import { AddAdressModal } from "./components";
import { IAccount } from "./types";

export const Account = ({ userData }: IAccount) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <Fragment>
      <AddAdressModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <div className="px-6 sm:px-16 max-w-screen-2xl mx-auto pb-10">
        <div className="flex flex-col items-center gap-4 mb-20">
          <div>
            <h2 className="text-4xl font-semibold text-center">
              {userData?.username}
            </h2>
            <p className="text-sm text-center">{userData?.email}</p>
          </div>

          <button
            type="button"
            onClick={() => signOut({ callbackUrl: "/account/login" })}
            className="bg-black text-white p-2 rounded-md text-xs uppercase hover:bg-black/80 transition duration-300"
          >
            Cerrar sesión
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          <aside className="md:col-span-3 hidden md:block space-y-5 h-fit sticky top-24">
            <h3 className="font-semibold">Cuenta</h3>
            <div className="flex items-center gap-2">
              <IconTruckDelivery stroke={1} />
              <Link href="#orders" className="text-sm text-secondary">
                Mis pedidos
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <IconUser stroke={1} />
              <Link href="#contact-info" className="text-sm text-secondary">
                Información de contacto
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <IconBook stroke={1} />
              <Link href="#adress-book" className="text-sm text-secondary">
                Libreta de direcciones
              </Link>
            </div>
          </aside>

          <main className="md:col-span-9 max-w-2xl mt-3 space-y-20">
            <div id="orders" className="scroll-mt-24">
              <h2 className="mb-5 text-xl font-semibold capitalize">
                Mis pedidos
              </h2>
              <section>
                <div className="bg-white shadow-sm rounded-lg py-10 px-5 md:px-10 text-center text-gray-600">
                  <p className="font-medium text-gray-800">
                    Aún no tienes ningun pedido
                  </p>
                  <p className="text-xs">
                    Encuentra algo que te guste -{" "}
                    <Link href="/" className="underline">
                      comprar ahora
                    </Link>
                  </p>
                </div>
              </section>
            </div>

            <div id="contact-info" className="scroll-mt-24">
              <h2 className="mb-5 text-xl font-semibold capitalize">
                Información de contacto
              </h2>
              <section>
                <div className="bg-white shadow-sm rounded-lg p-8 text-gray-600">
                  <p className="font-medium text-gray-800">
                    {userData?.username}
                  </p>
                  <p className="text-xs">{userData?.email}</p>
                </div>
              </section>
            </div>

            <div id="adress-book" className="scroll-mt-24">
              <div className="flex justify-between items-center mb-5">
                <h2 className="text-xl font-semibold capitalize">
                  Direcciones <span className="mono font-light">{"(01)"}</span>
                </h2>

                <button
                  type="button"
                  className="text-sm py-1 px-3 border mono rounded-md"
                  onClick={() => setIsModalOpen(true)}
                >
                  AGREGAR DIRECCIÓN
                </button>
              </div>
              <section>
                <div className="bg-white shadow-sm rounded-lg px-5 py-5 md:px-10 text-gray-600">
                  <div className="flex flex-col justify-between">
                    <div className="flex gap-3 items-center mb-3">
                      <p className="font-semibold text-sm md:text-xl">
                        {userData?.username}
                      </p>
                      <p className="py-1 px-2 bg-[#EFF2F5] text-[10px] rounded-sm">
                        POR DEFECTO
                      </p>
                    </div>
                    <div className="space-y-1 mb-10">
                      <p className="text-xs text-secondary font-semibold">
                        {userData?.username}
                      </p>
                      <p className="text-xs text-secondary font-semibold">
                        México
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      className="uppercase text-xs py-1 px-3 bg-black text-white rounded-sm"
                    >
                      Editar
                    </button>
                    <button
                      type="button"
                      className="uppercase text-xs py-1 px-3 border rounded-sm"
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              </section>
            </div>
          </main>
        </div>
      </div>
    </Fragment>
  );
};
