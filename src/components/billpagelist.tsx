"use client"

import React from "react";
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
import { Button } from "./ui/button";
export default function BillPageList(){
  return (
    <div>
       <Table>
                    <TableCaption>A list of Bill item items.</TableCaption>
                    <TableHeader>
                        <TableRow>
                        <TableHead className="w-[100px]">Item</TableHead>
                        <TableHead>Count</TableHead>
                        <TableHead>Unit Price</TableHead>
                        <TableHead className="text-right">Amount</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                        <TableCell className="font-medium">INV001</TableCell>
                        <TableCell>Paid</TableCell>
                        <TableCell>Credit Card</TableCell>
                        <TableCell className="text-right">$250.00</TableCell>
                        </TableRow>
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                        <TableCell colSpan={3} className="text-right">Total</TableCell>
                        <TableCell className="text-right">$250.00</TableCell>
                        </TableRow>
                        <TableRow>
                        <TableCell className="text-right">
                          <Button>Make Payment</Button>
                        </TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
    </div>
  );
};