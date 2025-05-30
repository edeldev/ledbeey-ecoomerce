import { Products } from "./components";

export const ProductsHome = () => {
  return (
    <div className="px-5 sm:px-16 py-10 space-y-20">
      <Products categoryId="men" title="Hombre" />
      <Products categoryId="female" title="Mujer" />
    </div>
  );
};
