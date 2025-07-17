"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { SectionCards } from "./SectionCards";
import { ChartAreaInteractive } from "./chart";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Page() {
  const metrics = [
    { title: "Total Revenue", value: "12,450 zł" },
    { title: "Orders", value: "320" },
    { title: "Conversion Rate", value: "4.5%" },
    { title: "Refunds", value: "3" },
  ];

  const recentOrders = [
    {
      id: "#1001",
      customer: "Anna Kowalska",
      total: "129 zł",
      status: "Completed",
      date: "2025-07-05",
    },
    {
      id: "#1002",
      customer: "Jan Nowak",
      total: "89 zł",
      status: "Pending",
      date: "2025-07-05",
    },
    {
      id: "#1003",
      customer: "Tomasz Wiśniewski",
      total: "499 zł",
      status: "Completed",
      date: "2025-07-04",
    },
    {
      id: "#1004",
      customer: "Alicja Zielińska",
      total: "59 zł",
      status: "Refunded",
      date: "2025-07-04",
    },
  ];

  return (
    <div className="w-full p-6 space-y-10">
      <div className="w-full max-w-7xl mx-auto">
        <h3 className="text-2xl font-semibold">Sales Analytics</h3>
        <p className="text-muted-foreground mt-2">
          Get insights into your revenue, orders, and customer behavior.
        </p>
      </div>

      

      <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4  md:gap-6 ">
             <SectionCards />
             <ChartAreaInteractive />
               {/* <div className="px-4 lg:px-6">
                <ChartAreaInteractive />
              </div>
              <DataTable data={data} /> */}
            </div>
          </div>

      <div className="w-full max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-medium">Recent Orders</h2>
        </div>
        <Card className="w-full border border-gray-200 shadow-sm">
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Order ID</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Total</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentOrders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell>{order.id}</TableCell>
                    <TableCell>{order.customer}</TableCell>
                    <TableCell>{order.total}</TableCell>
                    <TableCell>{order.status}</TableCell>
                    <TableCell>{order.date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
