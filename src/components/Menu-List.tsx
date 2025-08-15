import type  { MenuItem } from "@/generated/prisma";
import { prisma } from "@/lib/prisma";
import React from "react";
import Menuitem from "./MenuItem";

type Props = {};

const MenuList = async (props: Props) => {
  const menuItems = await prisma.menuItem.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
            menuItems.map((item: MenuItem) => (
                <Menuitem key={item.id} item={item}/>
            ))
        }
    </div>
  )
};

export default MenuList;
