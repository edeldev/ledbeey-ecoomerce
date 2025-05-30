import { BASE_URL } from "@/static/const";
import { query } from "./strapi";
import { ICategoryId } from "./types";
import { TProduct } from "@/types/products";

export function getProductsHome({ categoryId }: ICategoryId) {
  return query(
    `products?filters[product_category][slug][$contains]=${categoryId}&populate=images`
  ).then((res) => {
    const { data, meta } = res;

    const products = data.map((product: TProduct) => {
      const { name, slug, description, images: rawImages, price } = product;
      const images = rawImages.map((img) => `${BASE_URL}${img.url}`);

      return { name, slug, description, images, price };
    });

    return { products, pagination: meta.pagination };
  });
}
