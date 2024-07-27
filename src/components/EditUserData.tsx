"use client"
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
import { DeleteButton } from "./deletebutton"
import { Editbutton } from "./EditButton"
import { fetchFromApi } from "@/utils/Userapi";
import React, { useState, useEffect } from "react";

const fetchUserData = async () => {
  try {
    const data = await fetchFromApi('users');
   // console.log('Fetched data:', data); // Log the fetched data
    // Transform data to match the desired structure
    return data.map((user: any) => ({
      userid: user.userid,
      username: user.username,
      type: user.type // Replace with actual field name
    }));
  } catch (error) {
    console.error("Error fetching users data:", error);
    return [];
  }
};
  
  export function DataTable() {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
      const getData = async () => {
        const usersData = await fetchUserData();
        setUserData(usersData);
      };
  
      getData();
    }, []);

    return (
      <Table className="pt-4">
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <TableHeader>
          <TableRow >
            <TableHead>Username</TableHead>
            <TableHead>Type</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {userData.map((user,index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{user.username}</TableCell>
            <TableCell className="font-medium">{user.type}</TableCell>
              <TableCell className="text-right">
                <DeleteButton />
                <Editbutton />
              </TableCell>
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
    )
  }
  