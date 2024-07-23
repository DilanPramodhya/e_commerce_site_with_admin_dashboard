"use client";

import { DataTable } from "@/components/custom ui/DataTable";
import Loader from "@/components/custom ui/Loader";
import { columns } from "@/components/products/ProductColumns";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { PlusIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Products = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<ProductType[]>([]);

  const getProducts = async () => {
    try {
      const res = await fetch("/api/products", {
        method: "GET",
      });
      const data = await res.json();
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.log("[products_GET]", error);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <div className="px-10 py-5">
      <div className="flex items-center justify-between  text-black mt-4">
        <p className="text-heading2-bold text-rose-600">Products</p>
        <Button
          className="bg-blue-500"
          onClick={() => router.push("/products/new")}
        >
          <PlusIcon className="h-4 w-4 mr-2" />
          Create Product
        </Button>
      </div>
      <Separator className="bg-gray-600 h-1 my-4" />
      <div className="text-black">
        <DataTable columns={columns} data={products} searchKey="title" />
      </div>
    </div>
  );
};

export default Products;
