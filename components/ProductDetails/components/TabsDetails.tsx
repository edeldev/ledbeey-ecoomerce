import { Container } from "@/components/ui";
import { ITabsDetails } from "./types";

const tabs = [
  { key: "description", label: "Descripción" },
  { key: "details", label: "Detalles" },
];

export const TabsDetails = ({ activeTab, setActiveTab }: ITabsDetails) => {
  return (
    <Container className="pt-10 pb-40">
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-12 md:col-span-2">
          <ul className="flex flex-col gap-3">
            {tabs.map((tab) => (
              <li key={tab.key}>
                <button
                  onClick={() => setActiveTab(tab.key)}
                  className={`uppercase text-xs font-medium transition-colors duration-300 ease-in-out  ${
                    activeTab === tab.key
                      ? "text-black font-bold"
                      : "text-secondary font-light"
                  }`}
                >
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-1 h-full w-0.5 bg-gray-100 hidden md:block" />

        <div className="col-span-12 md:col-span-9 md:max-w-2xl">
          {activeTab === "description" && (
            <div className="space-y-5">
              <p className="font-semibold">Descripcion</p>
              <p>
                Esta camiseta tiene toda la comodidad, elasticidad y calidez de
                tu pijama favorito, pero puedes usarla en cualquier momento.
                Además, tiene doble costura para mayor durabilidad y, por
                supuesto, un estampado de nuestro Invertocat favorito.
              </p>
            </div>
          )}

          {activeTab === "details" && (
            <div id="size-guide" className="space-y-4">
              <p className="font-semibold">Detalles</p>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>100% algodón peinado hilado en anillos</li>
                <li>Cuello de punto canalé 1x1</li>
                <li>Vendaje de hombro a hombro</li>
                <li>Etiqueta despreciable</li>
                <li>Costura lateral</li>
                <li>
                  Lavar a máquina con agua tibia, del revés, con colores
                  similares
                </li>
                <li>Usar únicamente blanqueador sin cloro</li>
                <li>Secar en secadora a baja temperatura</li>
                <li>No planchar ni lavar en seco</li>
              </ul>

              <div className="overflow-x-auto">
                <p className="text-sm font-medium mb-2">Tabla de tallas:</p>
                <table className="border border-gray-300 text-center text-sm w-full">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2">
                        Tamaño
                      </th>
                      <th className="border border-gray-300 px-4 py-2">
                        Pecho <br />
                        (cm)
                      </th>
                      <th className="border border-gray-300 px-4 py-2">
                        Largo de la manga <br />
                        (cm)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { size: "S", chest: 104, sleeve: 20 },
                      { size: "M", chest: 110, sleeve: 21 },
                      { size: "L", chest: 114, sleeve: 22 },
                      { size: "XL", chest: 120, sleeve: 22 },
                      { size: "2XL", chest: 124, sleeve: 22 },
                    ].map(({ size, chest, sleeve }) => (
                      <tr key={size}>
                        <td className="border border-gray-300 px-4 py-2">
                          {size}
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          {chest}
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          {sleeve}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};
