"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const deleteMenu = async (id: string) => {
  try {
    // Delete menu item from database
    await prisma.menuItem.delete({
      where: {
        id
      },
    });
    revalidatePath("/admin/menu");
    redirect("/admin/menu") // redirect nhi hoga agr error hoga to dhika ga
  } catch (error: unknown) {
    console.log(error);
    throw new Error("Fail to delete menu");
  }
};
