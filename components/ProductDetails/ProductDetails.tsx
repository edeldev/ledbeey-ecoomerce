"use client";
import { Fragment, useEffect, useState } from "react";
import { Container } from "../ui";
import { IProductDetails } from "./types";
import {
  AddToCart,
  FeatureProduct,
  ImagePreview,
  ModalImage,
  TabsDetails,
  TitleProduct,
} from "./components";

export const ProductDetails = ({ product }: IProductDetails) => {
  const { name, images } = product;

  const [imagePreview, setImagePreview] = useState(images[0]);
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("description");

  const handleOpenSizeGuide = () => {
    setActiveTab("details");

    const element = document.getElementById("size-guide");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (isZoomOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isZoomOpen]);

  return (
    <Fragment>
      <ModalImage
        imagePreview={imagePreview}
        isZoomOpen={isZoomOpen}
        setIsZoomOpen={setIsZoomOpen}
      />

      <Container className="lg:h-[calc(100vh-250px)] flex flex-col items-between justify-center py-10">
        <div className="grid grid-cols-12 lg:gap-2">
          <TitleProduct
            product={product}
            imagePreview={imagePreview}
            setImagePreview={setImagePreview}
          />
          <ImagePreview
            name={name}
            imagePreview={imagePreview}
            setIsZoomOpen={setIsZoomOpen}
          />
          <FeatureProduct
            product={product}
            handleOpenSizeGuide={handleOpenSizeGuide}
          />
        </div>
      </Container>

      <TabsDetails activeTab={activeTab} setActiveTab={setActiveTab} />

      <AddToCart />
    </Fragment>
  );
};
