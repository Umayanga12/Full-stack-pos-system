import { Button } from "@/components/ui/button"
import Login  from "./login";
import { Settings } from "./settings/page";

export default function Home() {
  return (
    
    <div className="flex min-h-screen flex-col items-center justify-between p-24 pt-44">
      <Login/>
    </div>
  );
}
// className="flex min-h-screen flex-col items-center justify-between p-24 pt-44"