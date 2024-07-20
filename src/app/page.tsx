
import {AddProductLayout} from "./inventry/add_product";
import { ProductAddForm } from "./inventry/add_product_form";
import { Inventry } from "./inventry/inventry_dash";
import { Login } from "./login/login";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 pt-44">
      {/* <Login /> */}
      {/* <Inventry /> */}
      {/* <ProductAddForm /> */}
      {/* <addproductList /> */}
      <AddProductLayout/>
    </main>
  );
}
