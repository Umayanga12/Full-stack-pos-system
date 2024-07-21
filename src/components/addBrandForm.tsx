import React from "react";

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


export function BrandAddForm(){
    return(
        <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Add Brand</CardTitle>
        <CardDescription>Add New Brand Details</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Brand Name</Label>
              <Input id="brandname" placeholder="Brand Name" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Email</Label>
              <Input id="password" placeholder="Email" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Contact</Label>
              <Input id="password" placeholder="Contact" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between text-right">
        <Button>Add Details</Button>
      </CardFooter>
    </Card>
    );
}