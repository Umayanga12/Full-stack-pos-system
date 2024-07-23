import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
  } from "@/components/ui/resizable"
import { ProductList } from "../components/add_produt_table"
import { ProductAddForm } from "../components/add_product_form"
  
  export function AddProductLayout() {
    return (
      <div className="flex items-start gap-4">
        <ProductList />
        <ProductAddForm />
      </div>
    )
  }
  