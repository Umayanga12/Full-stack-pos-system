import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
  } from "@/components/ui/resizable"
import { ProductList } from "./add_produt_table"
import { ProductAddForm } from "./add_product_form"
  
  export function AddProductLayout() {
    return (
      <div className="flex items-start gap-4">
        <ProductList />
        <ProductAddForm />
      </div>
    )
  }
  