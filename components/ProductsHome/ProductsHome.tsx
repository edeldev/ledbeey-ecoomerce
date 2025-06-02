import { Container } from "../ui";
import { Products } from "./components";

export const ProductsHome = () => {
  return (
    <Container className="space-y-20 py-10">
      <Products categoryId="men" title="Hombre" />
      <Products categoryId="female" title="Mujer" />
    </Container>
  );
};
