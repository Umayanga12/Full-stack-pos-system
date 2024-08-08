import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { fetchFromApi, fetchUserById } from "@/utils/Userapi"
import { useEffect, useState } from 'react'

interface UserEditButtonProps{
  userId: string;
}

const fetchUserDatabyId = async ({userId}:UserEditButtonProps) => {
  try {
    const data = await fetchUserById(userId);
    console.log('Fetched data:', data); // Log the fetched data
    // Transform data to match the desired structure
    const transformedData = data.map((user: any) => ({
      userid: user._id, // Assuming _id is the correct field for the ID
      username: user.username,
      type: user.type // Ensure this matches the actual field in the response
    }));

    console.log('Transformed data:', transformedData); // Log the transformed data
    return transformedData;
  } catch (error) {
    console.error("Error fetching users data:", error);
    return [];
  }
}


export function UserEditbutton() {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    const getData = async () => {

    };
    getData();
  },[]);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="ml-2">Edit</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input
              id="username"
              defaultValue="Pedro Duarte"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="usertype" className="text-right">
              Type
            </Label>
            <Select
              value={userType}
              onValueChange={setUserType}
            >
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="User Type" />
              </SelectTrigger>
              <SelectContent>

                <SelectItem value="Admin">Admin</SelectItem>
                <SelectItem value="User">User</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="password" className="text-right">
              Password
            </Label>
            <Input
              id="password"
              defaultValue="@peduarte"
              className="col-span-3"
              type="password"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
