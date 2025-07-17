"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  CartesianGrid,
} from "recharts";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const chartData = [
  { name: "Mon", conversions: 120 },
  { name: "Tue", conversions: 200 },
  { name: "Wed", conversions: 150 },
  { name: "Thu", conversions: 280 },
  { name: "Fri", conversions: 180 },
  { name: "Sat", conversions: 90 },
  { name: "Sun", conversions: 220 },
];

const recentEvents = [
  { event: "Purchase", value: "$199", time: "2 min ago" },
  { event: "Signup", value: "-", time: "5 min ago" },
  { event: "Click CTA", value: "-", time: "10 min ago" },
  { event: "Referral", value: "$49", time: "15 min ago" },
  { event: "Purchase", value: "$299", time: "20 min ago" },
];

export default function Page() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Astrolytics Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Overview of your campaigns and performance.
          </p>
        </div>
        <Button variant="default">View Reports</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Visitors</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">12,345</p>
            <p className="text-xs text-muted-foreground">Last 7 days</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Conversions</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">1,209</p>
            <p className="text-xs text-muted-foreground">From all campaigns</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>CTR</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">4.8%</p>
            <p className="text-xs text-muted-foreground">Click-through rate</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">$3,450</p>
            <p className="text-xs text-muted-foreground">Tracked from events</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Weekly Conversions</CardTitle>
        </CardHeader>
        <CardContent className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="conversions" fill="#6366f1" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Events</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Event</TableHead>
                <TableHead>Value</TableHead>
                <TableHead className="text-right">Time</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentEvents.map((event, index) => (
                <TableRow key={index}>
                  <TableCell>{event.event}</TableCell>
                  <TableCell>{event.value}</TableCell>
                  <TableCell className="text-right">{event.time}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
