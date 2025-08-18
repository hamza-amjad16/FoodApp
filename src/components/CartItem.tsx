"use client";
import React from "react";
import { CartItem as Item, useStore } from "../../store/store";
import {Image} from "@imagekit/next";
import { Button } from "./ui/button";
import { Minus, Plus, X } from "lucide-react";
import { Input } from "./ui/input";

const CartItem = ({ item }: { item: Item }) => {
  const { removeFromCart, decrementQuantity, incrementQuantity } = useStore(
    (state) => state
  );
  return (
    <div className="flex items-stretch gap-4 border rounded-lg p-4">
      <div className="relative w-24 h-24">
        {item.imageURL && (
          <Image
          urlEndpoint="https://ik.imagekit.io/tm5tpq6k2"
            src={item.imageURL}
            alt="Picture of the author"
            fill
            className="object-cover rounded-md"
          />
        )}
      </div>
      <div className="flex-1 flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-medium">{item.name}</h3>
            <p className="text-muted-foreground text-sm">${item.price}</p>
          </div>
          <Button
            size={"icon"}
            variant={"ghost"}
            onClick={() => removeFromCart(item.id)}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Button
            className="h-8 w-8"
            variant={"outline"}
            size={"icon"}
            onClick={() => decrementQuantity(item.id)}
          >
            <Minus className="h-4 w-4" />
          </Button>
          <Input
            type="number"
            value={item.quantity}
            className="w-12 text-center h-8"
            min={"1"}
            readOnly
          />
          <Button
            className="h-8 w-8"
            variant={"outline"}
            size={"icon"}
            onClick={() => incrementQuantity(item.id)}
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
