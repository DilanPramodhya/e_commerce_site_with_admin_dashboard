import Gallery from "@/components/Gallery";
import ProductInfo from "@/components/ProductInfo";
import { getProductDetails } from "@/lib/actions";
import React from "react";

const ProductDetails = async ({
  params,
}: {
  params: { productId: string };
}) => {
  const productsDetails = await getProductDetails(params.productId);
  // console.log(productsDetails)
  return (
    <div className="flex justify-center items-start gap-16 py-10 px-5 max-md:flex-col max-md:items-center">
      <Gallery productMedia={productsDetails.media} />
      <ProductInfo productInfo={productsDetails} />
    </div>
  );
};

export default ProductDetails;
