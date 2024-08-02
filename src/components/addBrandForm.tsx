"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createBrand } from "@/utils/brandApi"; // Adjust the import path as needed

export function BrandAddForm() {
  const [brandName, setBrandName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const brandData = {
      brandName: brandName,
      brandAgentEmail: email,
      brandContact: parseInt(contact)
    };

    try {
      //console.log(brandData);
      const response = await createBrand('createbrands', brandData);
      if (response.ok) {
        const result = await response.json();
        console.log("Brand added successfully:", result);
        
        // Clear the form fields
        setBrandName("");
        setEmail("");
        setContact("");
      } else {
        throw new Error("Failed to add brand details");
      }
    } catch (error) {
      console.error("Error adding brand:", error);
      // Optionally, show an error message to the user
    }
  };

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Add Brand</CardTitle>
        <CardDescription>Add New Brand Details</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="brandname">Brand Name</Label>
              <Input
                id="brandname"
                placeholder="Brand Name"
                value={brandName}
                onChange={(e) => setBrandName(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="contact">Contact</Label>
              <Input
                id="contact"
                placeholder="Contact"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
            </div>
          </div>
          <CardFooter className="flex justify-between text-right pt-4">
            <Button type="submit">Add Details</Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  );
}
