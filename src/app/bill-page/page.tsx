import NavBar from "@/components/navBar";
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
import { ScrollArea } from "@/components/ui/scroll-area"
import BillPageProduct from "@/components/billpageproduct";
import BillPageList from "@/components/billpagelist";
import { Button } from "@/components/ui/button";

const sampleBillItems = [
  { productname: "Product A", count: 2, price: 15.00 },
  { productname: "Product B", count: 1, price: 55.50 },
  { productname: "Product C", count: 3, price: 10.00 },
  { productname: "Product C", count: 3, price: 10.00 },
  { productname: "Product C", count: 3, price: 10.00 },
];

const sampleTotal = sampleBillItems.reduce(
  (acc, item) => acc + item.count * item.price, 0
);

export default function BillPage(){
    return(
        <div className="flex">
            <div>
                <NavBar/>
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
                      <BillPageProduct/>
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
                      <BillPageList billItems={sampleBillItems} total={sampleTotal} />
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
    )
}
