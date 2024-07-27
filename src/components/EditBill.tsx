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
import { DeleteButton } from "./deletebutton"
import { Editbutton } from "./EditButton"
import { ScrollArea } from "./ui/scroll-area"
  
 const fetchBillData = async () => {
    try {
      const data = await fetchFromApi('invoices');
     // console.log('Fetched data:', data); // Log the fetched data
      // Transform data to match the desired structure
      return data.map((invoice: any) => ({
        invoice: invoice.invoice,
        paymentMethod: invoice.paymentMethod,
        total: invoice.total,
        date: invoice.date
      }));
    } catch (error) {
      console.error("Error fetching invoices data:", error);
      return [];
    }
  }
 }
  
  export function EditBill() {
    return (
      <Table className="pt-4">
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <TableHeader>
          <TableRow >
            <TableHead className="w-[175px]">User</TableHead>
            <TableHead>Items</TableHead>
            <TableHead>Total</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell className="font-medium">{invoice.invoice}</TableCell>
              <TableCell>
                <TableRow >
                  <TableHead className="w-[100px]">Items</TableHead>
                  <TableHead className="w-[100px]">Total</TableHead>
                  <TableHead className="w-[100px]">Date</TableHead>
                </TableRow>
                <ScrollArea className="h-[200px] w-[300px] rounded-md border p-4">
                    <TableRow>
                      <TableCell>Item 1</TableCell>
                      <TableCell>$250.00</TableCell>
                      <TableCell>01/01/2022</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Item 1</TableCell>
                      <TableCell>$250.00</TableCell>
                      <TableCell>01/01/2022</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Item 1</TableCell>
                      <TableCell>$250.00</TableCell>
                      <TableCell>01/01/2022</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Item 1</TableCell>
                      <TableCell>$250.00</TableCell>
                      <TableCell>01/01/2022</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Item 1</TableCell>
                      <TableCell>$250.00</TableCell>
                      <TableCell>01/01/2022</TableCell>
                    </TableRow>
                </ScrollArea>
                </TableCell>
              <TableCell>{invoice.paymentMethod}</TableCell>
              <TableCell>{invoice.paymentMethod}</TableCell>
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
    )
  }
  