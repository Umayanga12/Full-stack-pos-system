import { Button } from "@/components/ui/button"
import {AddProductLayout} from "./inventry/add_product";
import { ProductAddForm } from "./inventry/add_product_form";
import { Inventry } from "./inventry/inventry_dash";
import { Login } from "./login/login";
import { BrandPage } from "./brandpage";
export default function Home() {
  return (
    // <div>
    //   <BrandPage />
    // </div>
    <div className="flex min-h-screen flex-col items-center justify-between p-24 pt-44">
      {/* <Login /> */}
      {/* <ProductAddForm /> */}
      {/* <AddProductLayout /> */}
      <BrandPage />
      {/* <Inventry /> */}
      {/* <Button variant="outline">Button</Button> */}
    </div>
  );
}
// className="flex min-h-screen flex-col items-center justify-between p-24 pt-44"