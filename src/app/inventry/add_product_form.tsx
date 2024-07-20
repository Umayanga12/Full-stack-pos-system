import * as React from "react"

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

export function ProductAddForm() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Add Product</CardTitle>
        <CardDescription>Add Product into System</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Product Name</Label>
              <Input id="name" placeholder="Product Name" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Brand</Label>
              <Input id="password" placeholder="Brand" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Stocks</Label>
              <Input id="password" placeholder="Stocks" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Price</Label>
              <Input id="password" placeholder="Price" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between text-right">
        <Button>Add Product</Button>
      </CardFooter>
    </Card>
  )
}
