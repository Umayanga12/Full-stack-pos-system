"use client";

import React, { useEffect, useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { fetchFromApi } from "@/utils/productapi";
import BillPageList from "./billpagelist";

const fetchProductData = async () => {
    try {
        const data = await fetchFromApi('products');
        console.log(data);
        return data.map((product: any) => ({
            productName: product.productName,
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
    const [productdata, setProductData] = useState<Array<{ productName: string, productcount: number, productprice: number, productbrand: string }>>([]);
    const [billItems, setBillItems] = useState<Array<{ productName: string, count: number, price: number }>>([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const getData = async () => {
            const data = await fetchProductData();
            setProductData(data);
        };
        getData();
    }, []);

    const handleAdd = (product: { productName: string, productprice: number }) => {
        setBillItems(prev => {
            const existingItem = prev.find(item => item.productName === product.productName);
            if (existingItem) {
                return prev.map(item =>
                    item.productName === product.productName
                        ? { ...item, count: item.count + 1 }
                        : item
                );
            } else {
                return [...prev, { productName: product.productName, count: 1, price: product.productprice }];
            }
        });
        setTotal(prev => prev + product.productprice);
    };

    const handleRemove = (product: { productName: string, productprice: number }) => {
        setBillItems(prev => {
            const existingItem = prev.find(item => item.productName === product.productName);
            if (existingItem && existingItem.count > 1) {
                return prev.map(item =>
                    item.productName === product.productName
                        ? { ...item, count: item.count - 1 }
                        : item
                );
            } else {
                return prev.filter(item => item.productName !== product.productName);
            }
        });
        setTotal(prev => prev - product.productprice);
    };

    return (
        <div>
            <Table>
            
                <TableBody>
                    {productdata.map((product, index) => (
                        <TableRow key={index}>
                            <TableCell className="font-medium">{product.productName}</TableCell>
                            <TableCell>{product.productbrand}</TableCell>
                            <TableCell>{product.productprice}</TableCell>
                            <TableCell className="text-right">{product.productcount}</TableCell>
                            <TableCell className="text-right">
                                <div className="flex p-2 gap-2">
                                    <Button variant="outline" className="bg-blue-500 hover:bg-blue-600" onClick={() => handleAdd(product)}>+</Button>
                                    <Button variant="outline" className="bg-red-500 hover:bg-red-600" onClick={() => handleRemove(product)}>-</Button>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
