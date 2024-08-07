"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DeleteButton } from "./deletebutton";
import { ScrollArea } from "@/components/ui/scroll-area";
import { fetchFromApi } from "@/utils/billapi";
import { useEffect, useState } from "react";
import { BillDeleteButton } from "./billdelete";

interface BillItem {
  name: string;
  quantity: number;
  price: number;
}

interface Bill {
  user: string;
  billid: string;
  items: BillItem[];
  total: number;
  date: string;
}

const fetchBillData = async () => {
  try {
    const data = await fetchFromApi('bills');
    const transformedData =  data.map((bills: any) => ({
      user: bills.userId,
      billid: bills.billid,
      items: bills.items.map((item: any) => ({
        name: item.content,
        quantity: item.quantity,
        price: item.price,
      })),
      total: bills.total,
      date: bills.date,
    }));
    console.log("Transformed Data : ", transformedData);
    return transformedData;
  } catch (error) {
    console.error("Error fetching invoices data:", error);
    return [];
  }
};

export function EditBill() {
  const [billdata, setBillData] = useState<Bill[]>([]);

  useEffect(() => {
    const getData = async () => {
      const billsData = await fetchBillData();
      setBillData(billsData);
    };
    getData();
  }, []);

  return (
    <Table className="pt-4 min-h-full max-w-fit">
      {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
      <TableHeader>
        <TableRow>
          <TableHead>Items</TableHead>
          <TableHead>Total</TableHead>
          <TableHead>Date</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {billdata.map((invoice, index) => (
          <TableRow key={index}>
            <TableCell>
              <Table className="w-full">
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Name</TableHead>
                    <TableHead className="w-[100px]">Quantity</TableHead>
                    <TableHead className="w-[100px]">Price</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <ScrollArea className="h-[200px] w-[300px] rounded-md border p-4">
                    {invoice.items.map((item, itemIndex) => (
                      <TableRow key={itemIndex}>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.quantity}</TableCell>
                        <TableCell>${item.price.toFixed(2)}</TableCell>
                      </TableRow>
                    ))}
                  </ScrollArea>
                </TableBody>
              </Table>
            </TableCell>
            <TableCell>${invoice.total.toFixed(2)}</TableCell>
            <TableCell>{invoice.date}</TableCell>
            <TableCell className="text-right">
              <BillDeleteButton billid={invoice.billid} />
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
  );
}
