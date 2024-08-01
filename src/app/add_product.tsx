import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
  } from "@/components/ui/resizable"
import { ProductList } from "../components/add_produt_table"
import { ProductAddForm } from "../components/add_product_form"
import NavBar from "@/components/navBar"
  
  export function AddProductLayout() {
    return (
      <div className="flex">
        <div>
          <NavBar />
        </div>
        <div className="flex items-start gap-4 p-7">
        <ProductList />
        <ProductAddForm />
      </div>
      </div>
    )
  }
  