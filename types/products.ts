import { BlocksContent } from "@strapi/blocks-react-renderer";

export type TProductPage = {
  name: string;
  description: string | BlocksContent;
  slug: string;
  price: number;
  images: string[];
};

type StrapiImage = {
  url: string;
};

type TPagination = {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
};

export type TProduct = {
  name: string;
  slug: string;
  description: string;
  price: number;
  images: StrapiImage[];
};

export type TGetProductIdResponse = {
  products: TProduct[];
  pagination: TPagination;
};
export type TSlug = {
  slug: string;
};
