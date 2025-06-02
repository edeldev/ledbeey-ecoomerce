import { Fragment } from "react";
import Link from "next/link";
import { getProductId } from "@/services/get-product-id";
import { ProductDetails } from "@/components";
import { IconArrowLeft } from "@tabler/icons-react";
import { TProductPage } from "@/types/products";

export default async function ProductId({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { products } = await getProductId({ slug });

  return (
    <Fragment>
      <Link
        href="/"
        className="flex gap-2 justify-center items-center cursor-pointer mt-10"
      >
        <IconArrowLeft stroke={1} />
        <p className="mono">Atras</p>
      </Link>
      {products.map((product: TProductPage) => (
        <ProductDetails key={product.slug} product={product} />
      ))}
    </Fragment>
  );
}
