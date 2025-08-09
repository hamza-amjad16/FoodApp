import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Pencil } from "lucide-react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

type Props = {};

const UpdateMenuButton = (props: Props) => {
  return (
    <div>
      <Dialog>
        <form>
          <DialogTrigger asChild>
            <Button variant={"outline"}>
              <Pencil className="h-4 w-4" />
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit Menu Items</DialogTitle>
              <DialogDescription>
                Make changes to your menu item. Click save when you are done
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Item Name</Label>
                <Input id="name" name="name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Input id="description" name="description" />
              </div>
            </div>
          </DialogContent>
        </form>
      </Dialog>
    </div>
  );
};

export default UpdateMenuButton;
