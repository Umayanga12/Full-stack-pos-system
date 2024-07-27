"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React, { useState, useEffect } from "react";
import { DeleteButton } from "./deletebutton";
import { Editbutton } from "./EditButton";
import { fetchFromApi } from "@/utils/brandApi";

const fetchBrandData = async () => {
  try {
    const data = await fetchFromApi('brands');
    //console.log('Fetched data:', data);
    return data.map((brand: any) => ({
      brandId: brand.brandId,
      brandName: brand.brandName,
      contact: brand.brandContact,
      email: brand.brandAgentEmail,
    }));
  } catch (error) {
    console.error("Error fetching users data:", error);
    return [];
  }
}

export function BrandDataEdit() {
  const [brandData, setBrandData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchBrandData();
      setBrandData(data);
    };

    getData();
  }, []);

  return (
    <Table className="pt-4">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[150px]">Brand Name</TableHead>
          <TableHead>Contact</TableHead>
          <TableHead>Email</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {brandData.map((brand, index) => (
          <TableRow key={index}>
            <TableCell>{brand.brandName}</TableCell>
            <TableCell>{brand.contact}</TableCell>
            <TableCell>{brand.email}</TableCell>
            <TableCell className="text-right">
              <DeleteButton />
              <Editbutton />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
