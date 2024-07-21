import { BrandAddForm } from "@/components/addBrandForm";
import { BrandtList } from "@/components/brandDetail";
import { NewBrandtList } from "@/components/newbrandDetail";
import React from "react";

export function BrandPage(){
    return(
        <div className="flex items-start justify-start gap-2 rounded-[8px] p-4 ">
            <div className="flex gap-4">
            <div><BrandtList/></div>
            <div><NewBrandtList/></div>
                <BrandAddForm />
            </div>
        </div>
    )
}