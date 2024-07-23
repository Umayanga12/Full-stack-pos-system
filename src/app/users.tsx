import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExitUsers } from "@/components/existingUser";
import { ProfileForm } from "@/components/NewUser";

export function Users(){
    return(
        <div className="p-4">
            <Tabs defaultValue="account">
            <TabsList>
                <TabsTrigger value="account">Excisting Users</TabsTrigger>
                <TabsTrigger value="password">New Users</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
                <ExitUsers />
            </TabsContent>
            <TabsContent value="password">
                <ProfileForm />
            </TabsContent>
            </Tabs>
        </div>
    );
}