import { BASE_URL } from "@/static/const";
import { query } from "./strapi";
import { TCategory } from "@/types/category";

export function getCategories() {
  return query(
    `product-categories?fields[0]=name&fields[1]=slug&fields[2]=description&populate[image][fields][0]=url`
  ).then((res) => {
    return res.data.map((category: TCategory) => {
      const { name, slug, description, image: rawImage } = category;
      const image = `${BASE_URL}${rawImage.url}`;
      return { name, slug, description, image };
    });
  });
}
