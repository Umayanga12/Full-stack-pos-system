import { Button } from "@/components/ui/button"
import { ProductAddForm } from "../components/add_product_form";
import { Inventry } from "./inventry_dash";
import { Login } from "./login";
import { BrandPage } from "./brandpage";
import { Users } from "./users";
import { Settings } from "./settings";
import { Dashboard } from "./dashboard";
import BillPage from "./billPage";
export default function Home() {
  return (
    <div>
      {/* <BrandPage /> */}
      {/* <Users /> */}
      {/* <Settings /> */}
      {/* <Dashboard /> */}
      {/* <Inventry /> */}
      <BillPage/>
      {/* <ProductAddForm /> */}
    </div>
    // <div className="flex min-h-screen flex-col items-center justify-between p-24 pt-44">
    //   {/* <Login /> */}
    //   {/* <ProductAddForm /> */}
    //   {/*  */}
    //   {/* <BrandPage /> */}
    //   {/* <Users /> */}
      
    //   {/* <Button variant="outline">Button</Button> */}
    // </div>
  );
}
// className="flex min-h-screen flex-col items-center justify-between p-24 pt-44"