"use client";

import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { fetchFromApi } from "../utils/Userapi";

const fetchUserData = async () => {
  try {
    const data = await fetchFromApi('users');
    console.log('Fetched data:', data); // Log the fetched data
    // Transform data to match the desired structure
    return data.map((user: any) => ({
      username: user.username,
      type: user.type // Replace with actual field name
    }));
  } catch (error) {
    console.error("Error fetching users data:", error);
    return [];
  }
};

export function ExitUsers() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const usersData = await fetchUserData();
      setUserData(usersData);
    };

    getData();
  }, []);

  return (
    <Table>
      <TableHeader className="bg-black">
        <TableRow>
          <TableHead className="w-[150px] text-white">Username</TableHead>
          <TableHead className="text-white">Type</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {userData.map((user, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{user.username}</TableCell>
            <TableCell className="text-right pr-5">{user.type}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
