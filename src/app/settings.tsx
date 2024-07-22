import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExitUsers } from "@/components/existingUser";
import { ProfileForm } from "@/components/NewUser";
import {DataTable} from "@/components/EditUserData";
import { BrandDataEdit } from "@/components/EditBrand";
import { Edit } from "lucide-react";
import { EditProduct } from "@/components/EditProduct";
import { EditBill } from "@/components/EditBill";
export function Settings(){
    return(
        <div className="p-4">
            <Tabs defaultValue="account">
            <TabsList>
                <TabsTrigger value="1">Edit Users</TabsTrigger>
                <TabsTrigger value="2">Edit Brands</TabsTrigger>
                <TabsTrigger value="3">Edit Products</TabsTrigger>
                <TabsTrigger value="4">Bill Changes</TabsTrigger>
            </TabsList>
            <TabsContent value="1">
            <h1 className="text-2xl font-bold p-4">Profile Changes</h1>
                <DataTable/>
            </TabsContent>
            <TabsContent value="2">
            <h1 className="text-2xl font-bold p-4">Brand Detail Changes</h1>
                <BrandDataEdit/>
            </TabsContent>
            <TabsContent value="3">
            <h1 className="text-2xl font-bold p-4">Product Changes</h1>
                <EditProduct/>
            </TabsContent>
            <TabsContent value="4">
                <h1 className="text-2xl font-bold p-4">Bill Changes</h1>
                <EditBill/>
            </TabsContent>
            </Tabs>
        </div>
    );
}