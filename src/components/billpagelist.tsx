"use client";

import React from "react";
import {
    Table,
    TableBody,
    TableHead,
    TableRow,
    TableCell,
    TableFooter,
    TableHeader,
} from "@/components/ui/table";
import { Button } from "./ui/button";

interface BillItem {
    productname: string;
    count: number;
    price: number;
}

interface BillPageListProps {
    billItems: BillItem[];
    total: number;
}

export default function BillPageList({ billItems = [], total = 0 }: BillPageListProps) {
    return (
        <Table>

            <TableBody>
                {billItems.map((item, index) => (
                    <TableRow key={index}>
                        <TableCell className="font-medium">{item.productname}</TableCell>
                        <TableCell>{item.count}</TableCell>
                        <TableCell>{item.price}</TableCell>
                        <TableCell className="text-right">${(item.count * item.price).toFixed(2)}</TableCell>
                    </TableRow>
                ))}
                <TableRow>
                    <TableCell className="font-medium">Total</TableCell>
                    <TableCell colSpan={3} className="text-right">${total.toFixed(2)}</TableCell>
                </TableRow>
                <TableFooter>
                </TableFooter>
            </TableBody>
        </Table>
    );
}
