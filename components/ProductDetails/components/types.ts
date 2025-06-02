import { TProductPage } from "@/types/products";
import { MouseEventHandler } from "react";

export interface ITitleProduct {
  product: TProductPage;
  imagePreview: string;
  setImagePreview: Function;
}

export interface IImagePreview {
  name: string;
  imagePreview: string;
  setIsZoomOpen: Function;
}

export interface IModalImage {
  isZoomOpen: boolean;
  imagePreview: string;
  setIsZoomOpen: Function;
}

export interface IFeatureProduct {
  product: TProductPage;
  handleOpenSizeGuide: MouseEventHandler<HTMLButtonElement>;
}

export interface ITabsDetails {
  activeTab: string;
  setActiveTab: Function;
}
