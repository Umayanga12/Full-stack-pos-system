import { Button } from "@/components/ui/button"
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
  
  const invoices = [
    {
      invoice: "INV001",
      paymentStatus: "Paid",
      totalAmount: "$250.00",

    },
    {
      invoice: "INV002",
      paymentStatus: "Pending",
      totalAmount: "$150.00",

    },
    {
      invoice: "INV003",
      paymentStatus: "Unpaid",
      totalAmount: "$350.00",
  
    },
    {
      invoice: "INV004",
      paymentStatus: "Paid",
      totalAmount: "$450.00",
  
    },
    {
      invoice: "INV005",
      paymentStatus: "Paid",
      totalAmount: "$550.00",
     
    },
   
  ]
  export function NewBrandtList() {
    return (
      <Table>
        <TableCaption>New Brands</TableCaption>
        <TableHeader className="bg-black">
          <TableRow>
            <TableHead className="w-[150px] text-white">Brand Name</TableHead>
            <TableHead className="text-white">Email</TableHead>
            <TableHead className="text-white">Contact</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell className="font-medium">{invoice.invoice}</TableCell>
              <TableCell>{invoice.paymentStatus}</TableCell>
              <TableCell className="text-right pr-5">{invoice.totalAmount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
            <TableRow>
                <TableCell colSpan={2} className="text-right font-medium">
                <Button>Add Product</Button>
                </TableCell>
            </TableRow>
        </TableFooter>
      </Table>
    )
  }
  