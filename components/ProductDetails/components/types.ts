import { TProductPage } from "@/types/products";
import { MouseEventHandler } from "react";

export interface ITitleProduct {
  product: TProductPage;
  imagePreview: string;
  setImagePreview: (imagePreview: string) => void;
}

export interface IImagePreview {
  name: string;
  imagePreview: string;
  setIsZoomOpen: (isZoomOpen: boolean) => void;
}

export interface IModalImage {
  isZoomOpen: boolean;
  imagePreview: string;
  setIsZoomOpen: (isZoomOpen: boolean) => void;
}

export interface IFeatureProduct {
  product: TProductPage;
  handleOpenSizeGuide: MouseEventHandler<HTMLButtonElement>;
}

export interface ITabsDetails {
  activeTab: string;
  setActiveTab: (activeTab: string) => void;
}
