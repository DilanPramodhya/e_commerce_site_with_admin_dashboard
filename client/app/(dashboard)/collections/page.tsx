"use client";

import { columns } from "@/components/collections/CollectionColumns";
import { DataTable } from "@/components/custom ui/DataTable";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { PlusIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Collections = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(true);
  const [collections, setCollections] = useState([]);

  const getCollections = async () => {
    try {
      const res = await fetch("/api/collections", {
        method: "GET",
      });
      const data = await res.json();
      setCollections(data);
      setLoading(false);
    } catch (error) {
      console.log("[collections_GET]", error);
    }
  };
  useEffect(() => {
    getCollections();
  }, []);

  return (
    <div className="px-10 py-5">
      <div className="flex items-center justify-between  text-black mt-4">
        <p className="text-heading2-bold text-rose-600">Collections</p>
        <Button className="bg-blue-500" onClick={() => router.push("/collections/new")}>
          <PlusIcon className="h-4 w-4 mr-2" />
          Create Collection
        </Button>
      </div>
      <Separator className="bg-gray-600 h-1 my-4" />
      <div className="text-black">
        <DataTable columns={columns} data={collections} searchKey='title' />
      </div>
    </div>
  );
};

export default Collections;
