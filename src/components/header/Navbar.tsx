"use client";
import { Menu, Search, ShoppingCart, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { useStore } from "../../../store/store";


type Props = {};

const Navbar = (props: Props) => {
  const cart = useStore((store) => store.cart)
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-sm">
      <div className="mx-auto container flex h-14 justify-between items-center px-4">
        {/* Left Section */}
        <div className="flex items-center space-x-4 md:space-x-6">
          <Link className="font-bold text-2xl" href={"/"}>
            Next<span className="text-purple-500">Foods</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link className="text-sm font-medium" href={"/menu"}>
              Menu
            </Link>
            <Link className="text-sm font-medium" href={"/about"}>
              About
            </Link>
            <Link className="text-sm font-medium" href={"/admin/menu/create"}>
              Admin
            </Link>
          </nav>
        </div>
        {/* Right Section */}
        <div className="flex items-center space-x-3 md:space-x-4">
          <div className="relative hidden sm:block ">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search menu..."
              className="pl-10 w-[160px] md:w-[250px]"
            />
          </div>
          {/* Cart */}
          <Link href={"/cart"} className="relative">
            <Button variant={"ghost"}>
              <ShoppingCart className="w-5 h-5" />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                  {cart.length}
                </span>
              )}
            </Button>
          </Link>
          {/* UserAuth */}
          <SignedIn>
            <UserButton />
          </SignedIn>

          {/* mobile device */}
          <Button
            size={"icon"}
            variant={"ghost"}
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden focus:outline-none"
          >
            {menuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>
      {menuOpen && (
        <nav className="md:hidden px-4 py-2 border-t bg-background space-y-2">
          <Link className="block text-sm font-medium" href={"/menu"}>
            Menu
          </Link>
          <Link className="block text-sm font-medium" href={"/about"}>
            About
          </Link>
          <Link className="block text-sm font-medium" href={"/admin"}>
            Admin
          </Link>
          <div className="relative mt-2">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search menu ..." className="pl-10 w-full" />
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
