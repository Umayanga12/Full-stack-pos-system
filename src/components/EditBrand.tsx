import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { DeleteButton } from "./deletebutton"
import { Editbutton } from "./EditButton"
import { fetchFromApi } from "@/utils/brandApi"
import React, { useState, useEffect } from "react";

const fethBrandData = async () => {
  try {
    const data = await fetchFromApi('brands');
    return data.map((brand: any) => ({
      brandId: brand.brandId,
      brandName: brand.brandName,
      contact: brand.brandContact,
      email: brand.brandAgentEmail
    }));
  } catch (error) {
    console.error("Error fetching users data:", error);
    return [];
  }
}
  export function BrandDataEdit() {
    const [brandData, setBrandData] = useState([]);
    return (
      <Table className="pt-4">
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <TableHeader>
          <TableRow >
            <TableHead className="w-[150px]">Brand Id</TableHead>
            <TableHead className="w-[150px]">Brand Name</TableHead>
            <TableHead>Contact</TableHead>
            <TableHead>Email</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell className="font-medium">{invoice.invoice}</TableCell>
              <TableCell>{invoice.paymentStatus}</TableCell>
              <TableCell>{invoice.paymentMethod}</TableCell>
              <TableCell className="text-right">
                <DeleteButton />
                <Editbutton />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        {/* <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter> */}
      </Table>
    )
  }
  