"use client"
import React, { useState } from "react";
import NavBar from "@/components/navBar";
import {
    TableHeader,
    TableRow,
    TableHead,
    TableFooter,
    TableCell,
} from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";
import BillPageProduct from "@/components/billpageproduct";
import BillPageList from "@/components/billpagelist";
import { Button } from "@/components/ui/button";

export default function BillPage() {
    const [billItems, setBillItems] = useState<Array<{ productname: string, count: number, price: number }>>([]);
    const [total, setTotal] = useState(0);

    const handleAdd = (product: { productname: string, price: number }) => {
        setBillItems(prev => {
            const existingItem = prev.find(item => item.productname === product.productname);
            if (existingItem) {
                return prev.map(item =>
                    item.productname === product.productname
                        ? { ...item, count: item.count + 1 }
                        : item
                );
            } else {
                return [...prev, { productname: product.productname, count: 1, price: product.price }];
            }
        });
        setTotal(prev => prev + product.price);
    };

    const handleRemove = (product: { productname: string, price: number }) => {
        setBillItems(prev => {
            const existingItem = prev.find(item => item.productname === product.productname);
            if (existingItem && existingItem.count > 1) {
                return prev.map(item =>
                    item.productname === product.productname
                        ? { ...item, count: item.count - 1 }
                        : item
                );
            } else {
                return prev.filter(item => item.productname !== product.productname);
            }
        });
        setTotal(prev => prev - product.price);
    };

    return (
        <div className="flex">
            <div>
                <NavBar />
            </div>
            <div className="flex">
                <div className="gap-2 p-8">
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Item</TableHead>
                            <TableHead>Brand</TableHead>
                            <TableHead>Unit Price</TableHead>
                            <TableHead className="text-right">Stocks</TableHead>
                            <TableHead></TableHead>
                            <TableHead></TableHead>
                            <TableHead></TableHead>
                        </TableRow>
                    </TableHeader>
                    <ScrollArea className="h-[600px]">
                        <BillPageProduct handleAdd={handleAdd} />
                    </ScrollArea>
                </div>
                <div className="p-8">
                    <TableHeader>
                        <TableRow>
                            <TableHead>Item</TableHead>
                            <TableHead>Count</TableHead>
                            <TableHead>Unit Price</TableHead>
                            <TableHead>Amount</TableHead>
                            <TableHead></TableHead>
                            <TableHead></TableHead>
                            <TableHead className="text-right"></TableHead>
                        </TableRow>
                    </TableHeader>
                    <ScrollArea className="h-[500px]">
                        <BillPageList billItems={billItems} total={total} handleRemove={handleRemove} />
                    </ScrollArea>
                    <TableRow>
                    </TableRow>
                    <TableFooter>
                        <TableRow>
                            <TableCell className="text-right">
                                <Button>Make Payment</Button>
                            </TableCell>
                        </TableRow>
                    </TableFooter>
                </div>
            </div>
        </div>
    );
}
