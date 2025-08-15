import { prisma } from "@/lib/prisma";
import { Image, ImageKitProvider } from "@imagekit/next";
import { ChevronRight, Star } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

type Props = {};

const MenuPreview = async (props: Props) => {
  const menuItems = await prisma.menuItem.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: 3,
    select: {
      id: true,
      name: true,
      imageURL: true,
      description: true,
      price: true,
    },
  });
  return (
    <section className="container mx-auto py-16">
      <div className="text-center mb-12">
        <h2 className="font-bold text-3xl">Our Signature Dishes</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A selection of our most popular dishes loved by our customers
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="relative">
              <ImageKitProvider urlEndpoint="https://ik.imagekit.io/tm5tpq6k2">
                {item.imageURL && (
                  <Image
                    src={item.imageURL}
                    width={400}
                    height={400}
                    alt="Picture of the author"
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                )}
              </ImageKitProvider>
            </div>
            <div className="p-6 bg-background">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-bold text-3xl">{item.name}</h3>
                <span className="font-bold text-primary">{item.price}$</span>
              </div>
              <p className="text-muted-foreground mb-4">{item.description}</p>
              <div className="flex items-center">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                <span className="text-sm">4</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <Button asChild>
          <Link href={"/menu"}>View Full Menu
          <ChevronRight className="mr-2 h-4 w-4"/>
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default MenuPreview;
