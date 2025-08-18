import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useStore } from "../../../store/store";
import CartItem from "@/components/CartItem";
import CartSummary from "@/components/CartSummary";

type Props = {};

const page = (props: Props) => {
  const cartItems = useStore((store) => store.cart);
  return (
    <div className="container py-8 mx-auto">
      <div className="mb-6">
        <Button asChild variant={"ghost"}>
          <Link href={"/menu"} className="flex items-center gap-1">
            <ArrowLeft />
            Back to Menu
          </Link>
        </Button>
      </div>
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {cartItems.length > 0 ? (
            cartItems.map((item) => <CartItem key={item.id} item={item} />)
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Your cart is empty</p>
              <Button asChild className="mt-4">
                <Link href={"/menu"}>Browse Menu</Link>
              </Button>
            </div>
          )}
        </div>
        {
            cartItems.length >  0 && (
                <div className="lg:col-span-1">
                    <CartSummary />
                </div>
            )
        }
      </div>
    </div>
  );
};

export default page;
