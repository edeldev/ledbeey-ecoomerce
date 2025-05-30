import Image from "next/image";
import { getProductId } from "@/services/get-product-id";
import { TProductPage } from "@/types/products";

export default async function ProductId({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { products } = await getProductId({ slug });

  return (
    <div>
      {products.map((product: TProductPage) => (
        <div key={product.slug}>
          <h1>{product.name}</h1>
          {product.images.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt={product.name}
              width={200}
              height={200}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
