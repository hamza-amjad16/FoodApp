"use client";
import React, { useActionState } from "react";
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
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { UpdateMenu, UpdateMenuFormState } from "@/actions/update-menu";
import type { MenuItem } from "@/generated/prisma";

const categories = ["Pizza", "Pasta", "Desert", "Salad"];

const UpdateMenuButton = ({ item }: { item: MenuItem }) => {
  const [formState, action, isPending] = useActionState(
    async (prevState: UpdateMenuFormState, formData: FormData) =>
      await UpdateMenu(prevState, formData, item.id),
    { errors: {} }
  );
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant={"secondary"} size={"icon"} >
            <Pencil className="h-4 w-4" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <form action={action}>
            <DialogHeader>
              <DialogTitle>Edit Menu Items</DialogTitle>
              <DialogDescription>
                Make changes to your menu item. Click save when you are done
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Item Name</Label>
                <Input defaultValue={item.name} id="name" name="name" />
                {formState.errors.name && (
                  <p className="text-red-500 text-sm">
                    {formState.errors.name}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  defaultValue={item.description}
                  id="description"
                  name="description"
                  placeholder="Breif description of menu"
                />
                {formState.errors.description && (
                  <p className="text-red-500 text-sm">
                    {formState.errors.description}
                  </p>
                )}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="price">Price ($)</Label>
                  <Input
                    defaultValue={item.price}
                    id="price"
                    type="number"
                    name="price"
                    placeholder="0.00 $"
                  />
                  {formState.errors.price && (
                    <p className="text-red-500 text-sm">
                      {formState.errors.price}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select defaultValue={item.category} name="category">
                    <SelectTrigger id="category" className="w-full">
                      <SelectValue placeholder="select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem value={category} key={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  {formState.errors.category && (
                    <p className="text-red-500 text-sm">
                      {formState.errors.category}
                    </p>
                  )}
                </div>
              </div>
            </div>
            <Button disabled={isPending} className="w-full mt-4" type="submit">
              {isPending ? "Saving" : "Save Changes"}
            </Button>
            {formState.errors.formError && (
              <p className="text-red-500 text-sm mt-2">
                {formState.errors.formError[0]}
              </p>
            )}
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UpdateMenuButton;
