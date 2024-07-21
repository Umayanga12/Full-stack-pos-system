'use client'
import { useRouter } from 'next/router';
import UserItem from "./UserItem";
import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
  } from "@/components/ui/command"
  import {
      Box,
    Calculator,
    Calendar,
    Computer,
    CreditCard,
    Home,
    LogOut,
    Settings,
    ShoppingCart,
    Smile,
    User,
  } from "lucide-react"
import { BiCategory } from 'react-icons/bi';

export default function NavBar() {
    return(
        <div className="w-[300px] border-r min-w-300 flex flex-col min-h-screen bg-black text-white p-4 gap-2">
            <div className="justify-between items-center text-center flex felx-col">
                <div className="flex items-start justify-start gap-2 rounded-[8px] p-4 ">
                    <ShoppingCart className="mr-2 h-6 w-6 avatar" />
                    <div>
                        <p className="text-white text-[16px]"><b>Tech</b>Trend</p>
                    </div>
                </div>
            </div>

            <div>
                
            </div>
            <div className="grow border-b">
            <Command className="bg-black">
                <CommandList>
                    <CommandGroup heading="Suggestions">
                        <CommandItem className="text-white">
                            <Computer   className="mr-2 h-4 w-4" />
                            <span>Dashboard</span>
                        </CommandItem>
                        <CommandItem className="text-white">
                            <CreditCard className="mr-2 h-4 w-4" />
                            <span>Billing</span>
                        </CommandItem>
                        <CommandItem className="text-white">
                            <Home className="mr-2 h-4 w-4" />
                            <span>Inventory</span>
                        </CommandItem>
                        <CommandItem className="text-white">
                            <Box className="mr-2 h-4 w-4" />
                            <span>Add Items</span>
                        </CommandItem>
                        <CommandItem className="text-white">
                            <BiCategory className="mr-2 h-4 w-4" />
                            <span>Item Brands</span>
                        </CommandItem>
                        <CommandItem className="text-white">
                            <User className="mr-2 h-4 w-4" />
                            <span>Users</span>
                        </CommandItem>
                    </CommandGroup>
                </CommandList>
            </Command>
            </div>
            <UserItem />
            <Command className="bg-black">
                <CommandList>
                    <CommandGroup>
                    <CommandItem className="text-white">
                        <Settings className="mr-2 h-4 w-4" />
                        <span>Settings</span>
                    </CommandItem>
                    <CommandItem className="text-red-300">
                        <LogOut className="mr-2 h-4 w-4" />
                        <span>Logout</span>
                    </CommandItem>
                    </CommandGroup>
                </CommandList>
            </Command>
        </div>
    );
}