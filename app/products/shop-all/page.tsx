import Image from "next/image";
import Link from "next/link";
import { getProductsAll } from "@/services/get-products-all";
import { TProductPage } from "@/types/products";

const ShopAll = async () => {
  const { products } = await getProductsAll();
  return (
    <div className="grid grid-cols-12 gap-5 mt-5 overflow-hidden">
      {products.map((product: TProductPage) => (
        <div
          key={product.slug}
          className="col-span-12 md:col-span-6 lg:col-span-4 flex flex-col gap-3"
        >
          <Link href={`/products/shop-all/${product.slug}`}>
            <div className="h-[400px] overflow-hidden group relative bg-gray-100">
              {product.images[0] && (
                <Image
                  src={product.images[0]}
                  alt={product.description}
                  width={350}
                  height={350}
                  className={`w-full h-full p-5 rounded-md object-contain transition-opacity duration-500 ${
                    product.images.length > 1 ? "group-hover:opacity-0" : ""
                  }`}
                />
              )}
              {product.images[1] && (
                <Image
                  src={product.images[1]}
                  alt={product.description}
                  width={350}
                  height={350}
                  className="w-full h-full rounded-md object-contain absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
              )}
            </div>
          </Link>

          <div>
            <Link href={`/men/${product.slug}`}>
              <p className="font-medium hover:text-black/50 transition duration-300 inline-block">
                {product.name}
              </p>
            </Link>
            <p className="mono text-lg text-secondary">${product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShopAll;
