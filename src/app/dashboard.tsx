import { ChartComponent } from "@/components/BillChart";
import { ProductCharComponent } from "@/components/ProductChart";
import React from "react";

export function Dashboard(){
    return(
        <div>
            <h1 className="p-8 font-bold text-3xl">Dashboard</h1>
            <div className="flex gap-5 pl-10">
                <div>
                    <ChartComponent/>
                </div>
                <div>
                    <ProductCharComponent />
                </div>
            </div>
        </div>
    );
}