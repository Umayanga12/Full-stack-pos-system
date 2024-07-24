import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExitUsers } from "@/components/existingUser";
import { ProfileForm } from "@/components/NewUser";
import NavBar from "@/components/navBar";

export const Users:React.FC = () => {
    return(
        <div className="flex">
            <NavBar/>
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
        </div>
    );
}