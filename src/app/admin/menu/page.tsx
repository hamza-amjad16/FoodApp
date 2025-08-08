import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TableBody, TableHead, TableHeader, TableRow, Table, TableCell } from "@/components/ui/table";
import { prisma } from "@/lib/prisma";
import React from "react";

type Props = {};

const page = async(props: Props) => {

  const menuItems = await prisma.menuItem.findMany({
    orderBy: {createdAt: "desc"}
  })
  return (
    <div className="lg:col-span-2 my-4 container mx-auto">
      <h1 className="font-bold text-2xl">Our Menu</h1>
      <Card className="my-2">
        <CardHeader>
          <CardTitle>Current Menu Items</CardTitle>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {
                  menuItems.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell className="font-medium">{item.name}</TableCell>
                      <TableCell className="font-medium">{item.description}</TableCell>
                      <TableCell className="font-medium">{item.category}</TableCell>
                      <TableCell className="font-medium">{item.price}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end space-x-2">
                        {/* Update Menu */}
                        
                        {/* Delete Menu */}

                        </div>
                      </TableCell>

                    </TableRow>
                  ))
                }
              </TableBody>
            </Table>
          </CardContent>
        </CardHeader>
      </Card>
    </div>
  );
};

export default page;
