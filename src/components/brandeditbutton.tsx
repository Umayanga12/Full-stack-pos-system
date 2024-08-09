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
import { fetchBrandById } from "@/utils/brandApi"
import { useEffect, useState } from "react"

interface EditBrandDataButtonProp {
  brandId: string;
}

const fetchBrandDataById = async (brandId: string) => {
  try {
    const data = await fetchBrandById(brandId);
    const transformedData = {
      brandId: data._id,
      brandName: data.brandName,
      contact: data.brandContact,
      email: data.brandAgentEmail,
    };
    return transformedData;
  } catch (error) {
    console.error("Error fetching brand's data:", error);
    return null;
  }
}

export function BrandEditButton({ brandId }: EditBrandDataButtonProp) {
  const [brandData, setBrandData] = useState({
    brandId: '',
    brandName: '',
    contact: '',
    email: ''
  });

  useEffect(() => {
    const getData = async () => {
      const data = await fetchBrandDataById(brandId);
      if (data) {
        setBrandData(data);
      }
    };
    getData();
  }, [brandId]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setBrandData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSaveChanges = () => {
    // Logic to save changes
    console.log("Updated brand data:", brandData);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="ml-2">Edit</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to Brand details here. Click save when done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="brandName" className="text-right">
              Brand Name
            </Label>
            <Input
              id="brandName"
              value={brandData.brandName}
              onChange={handleInputChange}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input
              id="email"
              value={brandData.email}
              onChange={handleInputChange}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="contact" className="text-right">
              Contact
            </Label>
            <Input
              id="contact"
              value={brandData.contact}
              onChange={handleInputChange}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="button" onClick={handleSaveChanges}>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
