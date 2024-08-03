"use client";
import React, { useEffect, useState } from "react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { fetchFromApi } from "@/utils/productapi";

const fetchProductData = async () => {
    try {
        const data = await fetchFromApi('products');
        console.log(data);
        return data.map((product: any) => ({
            productname: product.name,
            productcount: product.stock,
            productprice: product.price,
            productbrand: product.brand,
        }));
    } catch (error) {
        console.log(error);
        return [];
    }
};

export default function BillPageProduct() {
    const [productdata, setProductData] = useState<Array<{ productname: string, productcount: number, productprice: number, productbrand: string }>>([]);

    useEffect(() => {
        const getData = async () => {
            const data = await fetchProductData();
            setProductData(data);
        };
        getData();
    }, []);

    return (
        <div>
            <Table>
                <TableCaption>A list of items.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Item</TableHead>
                        <TableHead>Brand</TableHead>
                        <TableHead>Unit Price</TableHead>
                        <TableHead className="text-right">Stocks</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {productdata.map((product, index) => (
                        <TableRow key={index}>
                            <TableCell className="font-medium">{product.productname}</TableCell>
                            <TableCell>{product.productbrand}</TableCell>
                            <TableCell>{product.productprice}</TableCell>
                            <TableCell className="text-right">{product.productcount}</TableCell>
                            <TableCell className="text-right">
                                <div className="flex p-2 gap-2">
                                    <Button variant="outline" className="bg-blue-500 hover:bg-blue-600">+</Button>
                                    <Button variant="outline" className="bg-red-500 hover:bg-red-600">-</Button>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};
