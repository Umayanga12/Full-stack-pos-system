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

export default function BillPage(){
    return(
        <div className="flex">
            <div>
                <NavBar></NavBar>
            </div>
            <div className="flex p-40">
                <div className="gap-2 p-4">
                    <BillPageProduct/>
                </div>
                <div className="p-4">
                    <BillPageList/>
                </div>
            </div>
        </div>
    )
}