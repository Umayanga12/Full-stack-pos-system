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
    return data.map((bills: any) => ({
      user: bills.userId,
      billid: bills.billId,
      items: bills.items.map((item: any) => ({
        name: item.content,
        quantity: item.quantity,
        price: item.price,
      })),
      total: bills.total,
      date: bills.date,
    }));
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
          <TableHead className="w-[175px]">User</TableHead>
          <TableHead>Items</TableHead>
          <TableHead>Total</TableHead>
          <TableHead>Date</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {billdata.map((invoice) => (
          <TableRow key={invoice.billid}>
            <TableCell className="font-medium">{invoice.user}</TableCell>
            <TableCell>
              <TableRow >
                  <TableHead className="w-[100px]">Items</TableHead>
                  <TableHead className="w-[100px]">Total</TableHead>
                  <TableHead className="w-[100px]">Date</TableHead>
              </TableRow>
              <ScrollArea className="h-[200px] w-[300px] rounded-md border p-4">
                    {invoice.items.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.quantity}</TableCell>
                        <TableCell>${item.price.toFixed(2)}</TableCell>
                      </TableRow>
                    ))}
                  </ScrollArea>
            </TableCell>
            <TableCell>${invoice.total.toFixed(2)}</TableCell>
            <TableCell>{invoice.date}</TableCell>
            <TableCell className="text-right">
              <DeleteButton />
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
