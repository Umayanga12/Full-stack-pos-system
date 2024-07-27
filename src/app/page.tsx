import { Button } from "@/components/ui/button"
import {AddProductLayout} from "./add_product";
import { ProductAddForm } from "../components/add_product_form";
import { Inventry } from "./inventry_dash";
import { Login } from "./login";
import { BrandPage } from "./brandpage";
import { Users } from "./users";
import { Settings } from "./settings";
import { Dashboard } from "./dashboard";
export default function Home() {
  return (
    <div>
      {/* <BrandPage /> */}
      {/* <Users /> */}
      <Settings />
      {/* <Dashboard /> */}
    </div>
    // <div className="flex min-h-screen flex-col items-center justify-between p-24 pt-44">
    //   {/* <Login /> */}
    //   {/* <ProductAddForm /> */}
    //   {/* <AddProductLayout /> */}
    //   {/* <BrandPage /> */}
    //   {/* <Users /> */}
    //   {/* <Inventry /> */}
    //   {/* <Button variant="outline">Button</Button> */}
    // </div>
  );
}
// className="flex min-h-screen flex-col items-center justify-between p-24 pt-44"