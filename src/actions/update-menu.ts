"use server";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { z } from "zod";

type UpdateMenuFormState = {
  errors: {
    name?: string[];
    description?: string[];
    category?: string[];
    price?: string[];
    formError?: string[];
  };
};

const formSchema = z.object({
  name: z.string().min(1, { message: "name is required" }),
  description: z.string().min(1, { message: "description is required" }),
  category: z.string().min(1, { message: "category is required" }),
  price: z.string().min(0.01, { message: "price must be atleast $0.01" }),

});

export const UpdateMenu = async (
  initialState: UpdateMenuFormState,
  formData: FormData,
  id: string
): Promise<UpdateMenuFormState> => {
  const result = formSchema.safeParse({
    name: formData.get("name") as string,
    description: formData.get("description") as string,
    category: formData.get("category") as string,
    price: formData.get("price") as string,
  });
  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  try {
    // save data inside data base
    await prisma.menuItem.update({
        where: {
            id
        },
      data: {
        name: result.data.name,
        description: result.data.description,
        category: result.data.category,
        price: Number(result.data.price),
      },
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        errors: {
          formError: [error.message],
        },
      };
    } else {
      return {
        errors: {
          formError: ["An Unexcepted Error Occur"],
        },
      };
    }
  }
  revalidatePath("/admin/menu");
  return {
    errors: {}
  }
};
