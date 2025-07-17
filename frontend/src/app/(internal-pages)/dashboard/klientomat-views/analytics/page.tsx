"use client"

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts"

const metrics = [
  { label: "Emails Sent", value: "1,420" },
  { label: "Open Rate", value: "61%" },
  { label: "Reply Rate", value: "14%" },
  { label: "Bounce Rate", value: "2.3%" },
]

const chartData = [
  { date: "Jul 1", sent: 100, opened: 65, replied: 10 },
  { date: "Jul 2", sent: 200, opened: 130, replied: 18 },
  { date: "Jul 3", sent: 180, opened: 110, replied: 20 },
  { date: "Jul 4", sent: 250, opened: 180, replied: 30 },
  { date: "Jul 5", sent: 150, opened: 95, replied: 12 },
  { date: "Jul 6", sent: 300, opened: 220, replied: 40 },
]

const campaigns = [
  {
    id: "1",
    name: "Ecom July Campaign",
    sent: 400,
    openRate: "62%",
    replyRate: "13%",
    status: "Active",
  },
  {
    id: "2",
    name: "Real Estate Outreach",
    sent: 320,
    openRate: "58%",
    replyRate: "11%",
    status: "Paused",
  },
]

export default function AnalyticsPage() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Analytics</h1>
        <p className="text-muted-foreground text-sm mt-1">
          Your latest outreach performance in numbers.
        </p>
      </div>

      {/* Metrics summary */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {metrics.map((metric) => (
          <Card key={metric.label}>
            <CardContent className="py-6">
              <p className="text-sm text-muted-foreground">{metric.label}</p>
              <p className="text-xl font-semibold">{metric.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Performance Over Time</CardTitle>
        </CardHeader>
        <CardContent className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="sent" stroke="#8884d8" name="Sent" />
              <Line type="monotone" dataKey="opened" stroke="#82ca9d" name="Opened" />
              <Line type="monotone" dataKey="replied" stroke="#ffc658" name="Replied" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Recent Campaigns Table */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Campaigns</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b text-muted-foreground text-left">
                <th className="py-3 px-4">Campaign</th>
                <th className="py-3 px-4">Sent</th>
                <th className="py-3 px-4">Open Rate</th>
                <th className="py-3 px-4">Reply Rate</th>
                <th className="py-3 px-4 text-right">Status</th>
              </tr>
            </thead>
            <tbody>
              {campaigns.map((c) => (
                <tr key={c.id} className="border-b">
                  <td className="py-3 px-4">{c.name}</td>
                  <td className="py-3 px-4">{c.sent}</td>
                  <td className="py-3 px-4">{c.openRate}</td>
                  <td className="py-3 px-4">{c.replyRate}</td>
                  <td className="py-3 px-4 text-right">
                    <Badge variant={c.status === "Active" ? "default" : "outline"}>
                      {c.status}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  )
}
