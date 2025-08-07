"use server";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

type CreateMenuFormState = {
  errors: {
    name?: string[];
    description?: string[];
    category?: string[];
    price?: string[];
    image?: string[];
    formError?: string[];
  };
};

const formSchema = z.object({
  name: z.string().min(1, { message: "name is required" }),
  description: z.string().min(1, { message: "description is required" }),
  category: z.string().min(1, { message: "category is required" }),
  price: z.string().min(0.01, { message: "price must be atleast $0.01" }),
  image: z
    .string()
    .url({ message: "Image must be a valid url" })
    .optional()
    .or(z.literal("")), // z.literal means allow empty string
});

export const createMenuAction = async (
  initialState: CreateMenuFormState,
  formData: FormData
): Promise<CreateMenuFormState> => {
  const result = formSchema.safeParse({
    name: formData.get("name") as string,
    description: formData.get("description") as string,
    category: formData.get("category") as string,
    price: formData.get("price") as string,
    image: formData.get("image") as string,
  });
  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  try {
    // save data inside data base
    await prisma.menuItem.create({
      data: {
        name: result.data.name,
        description: result.data.description,
        category: result.data.category,
        price: Number(result.data.price),
        imageURL: result.data.image!,
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
  redirect("/admin/menu");
};
