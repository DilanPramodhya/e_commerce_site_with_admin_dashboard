import { getProducts } from "@/lib/actions/actions";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProductCard from "./ProductCard";

const ProductList = async () => {
  const products = await getProducts();
  return (
    <div className="flex flex-col items-center gap-10 pt-8 px-5">
      <p className="text-heading1-bold">Products</p>
      {!products || products.length === 0 ? (
        <p className="text-body-bold">No Products found</p>
      ) : (
        <div className="flex flex-wrap mx-auto gap-8">
          {products.map((product: ProductType) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
