"use client"
import type { MenuItem } from "@/generated/prisma";
import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Image, ImageKitProvider } from "@imagekit/next";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";
import { useStore } from "../../store/store";

type Props = {
  item: MenuItem;
};

const Menuitem = ({ item }: Props) => {
  const addToCart = useStore((state) => state.addToCart);
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <CardHeader className="p-0 pb-4">
        <ImageKitProvider urlEndpoint="https://ik.imagekit.io/tm5tpq6k2">
          {item.imageURL && (
            <Image
              src={item.imageURL}
              width={400}
              height={400}
              alt="Picture of the author"
              className="object-cover h-48"
            />
          )}
        </ImageKitProvider>
      </CardHeader>
      <CardContent>
        <h3 className="font-semibold text-lg">{item.name}</h3>
        <p className="text-muted-foreground mt-1 text-sm">{item.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <span className="font-bold">{item.price}$</span>
        <Button
          onClick={() => addToCart(item)}
          size={"sm"}
          className="gap-1 cursor-pointer"
        >
          <Plus className="h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Menuitem;
