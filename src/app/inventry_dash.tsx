"use client"
import NavBar from "@/components/navBar"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { fetchFromApi } from "@/utils/productapi";
import { useState, useEffect } from "react";
  
  interface Product {
    productId: string;
    productName: string;
    category: string;
    price: number;
    stock: number;
    brand: string;
}

const fetchProductdata = async (): Promise<Product[]> => {
  try {
    const data = await fetchFromApi('products');
    return data.map((product: any) => ({
      productId: product.productId,
      productName: product.name,
      category: product.category,
      price: product.price,
      stock: product.stock,
      brand: product.brand,
    }));
  } catch (error) {
    console.error("Error fetching products data:", error);
    return [];
  }
}

  export function Inventry() {
    const [products, setProducts] = useState<Product[]>([]);
    
    useEffect(() => {
      const getData = async () => {
        const data = await fetchProductdata();
        console.log('Fetched data:', data);
        setProducts(data);
      }
      getData();
    }, []);
    return (
      <div className="flex">
        <div>
          <NavBar />
        </div>
        <div className="p-20 min-w-screen min-h-screen">
        <Table className="p-4 min-w-full">
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <TableHeader className="bg-black ">
          <TableRow>
              <TableHead className="w-[200px]">Product Name</TableHead>
              <TableHead className="w-[200px]">Category</TableHead>
              <TableHead className="w-[200px]">Price</TableHead>
              <TableHead className="w-[200px]">Brand</TableHead>
              <TableHead className="w-[200px]">Stocks</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
                {products.map((product, index) => (
                    <TableRow key={index}>
                        <TableCell>{product.productName}</TableCell>
                        <TableCell>{product.category}</TableCell>
                        <TableCell>${product.price.toFixed(2)}</TableCell>
                        <TableCell>{product.brand}</TableCell>
                        <TableCell>{product.stock}</TableCell>
                    </TableRow>
                ))}
          </TableBody>
        {/* <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter> */}
      </Table>
        </div>
      </div>
    )
  }
  