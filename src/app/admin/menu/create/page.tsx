"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React, { useActionState, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import UploadImage from "@/components/UploadImage";
import { createMenuAction } from "@/actions/create-menu";

type Props = {};
const categories = ["Pizza", "Salad", "Pasta", "Desert"];

const page = (props: Props) => {
  const [formState, action, isPending] = useActionState(createMenuAction, {errors:{}})
  const [imageURL, setImageURL] = useState<string | null>(null)

  const handleAction = (formData: FormData) => {
    formData.append("image" , imageURL || "")
    return action(formData)
  }

  
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <Card className="w-full max-w-xl">
        <CardHeader>
          <CardTitle className="flex justify-between items-center">
            <h1>Add New Menu Item</h1>
            <Link href={"/admin/menu"}>
              <Button variant={"link"}>All Menu List</Button>
            </Link>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form action={handleAction}>
            <div className="space-y-2">
              <Label>Item Name</Label>
              <Input name="name" placeholder="e.g Margherita Pizza" />
              {
                formState.errors.name && (
                  <p className="text-red-500 text-sm">{formState.errors.name}</p>
                )
              }
            </div>
            <div className="space-y-2">
              <Label>Description</Label>
              <Textarea
                name="description"
                placeholder="Breif description of Item"
              />
              {
                formState.errors.description && (
                  <p className="text-red-500 text-sm">{formState.errors.description}</p>
                )
              }
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Price ($)</Label>
                <Input name="price" type="number" placeholder="00.00" />
                {
                formState.errors.price && (
                  <p className="text-red-500 text-sm">{formState.errors.price}</p>
                )
              }
              </div>
              <div className="space-y-2">
                <Label>Category</Label>
                <Select name="category">
                  <SelectTrigger id="category" className="w-full">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((item, index) => (
                      <SelectItem key={index} value={item}>
                        {item}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {
                formState.errors.category && (
                  <p className="text-red-500 text-sm">{formState.errors.category}</p>
                )
              }
              </div>
            </div>
            {/* Upload Image */}
            <div className="space-y-2">
                <UploadImage setImageURL= {setImageURL} />
            </div>
            <Button disabled={isPending} className="w-full mt-4">
              {isPending  ? "Loading...": "Add New Item"}
            </Button>

          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default page;
