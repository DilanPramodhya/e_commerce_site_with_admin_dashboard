import { DataTable } from "@/components/custom ui/DataTable";
import { columns } from "@/components/customers/CustomerColumns";
import { Separator } from "@/components/ui/separator";
import Customer from "@/lib/models/Customer";
import { connectToDB } from "@/lib/MongoDB";
import React from "react";

const Customers = async () => {
  await connectToDB();

  const customers = await Customer.find().sort({ createdAt: "desc" });
  return (
    <div className="px-10 py-5 text-black">
      <p className="text-heading2-bold text-rose-600">Customers</p>
      <Separator className="bg-gray-600 h-1 my-5" />
      <DataTable columns={columns} data={customers} searchKey="name"/>
    </div>
  );
};

export default Customers;
