"use client"

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Line,
} from "recharts"

const metrics = [
  { label: "Leads", value: 125 },
  { label: "Open Rate", value: "64%" },
  { label: "Reply Rate", value: "17%" },
  { label: "Bounces", value: 3 },
]

const chartData = [
  { date: "Jul 3", sent: 100, opened: 65, replied: 10 },
  { date: "Jul 4", sent: 150, opened: 90, replied: 20 },
  { date: "Jul 5", sent: 130, opened: 70, replied: 15 },
  { date: "Jul 6", sent: 180, opened: 110, replied: 25 },
]

const activity = [
  {
    id: "1",
    email: "anna@sklep24.pl",
    status: "Opened",
    date: "2025-07-09",
  },
  {
    id: "2",
    email: "marek@firma.pl",
    status: "Replied",
    date: "2025-07-09",
  },
  {
    id: "3",
    email: "janusz@reklama.pro",
    status: "Bounced",
    date: "2025-07-08",
  },
]

export default function CampaignDetailPage() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Astrolytics B2B Trial Push</h1>
        <p className="text-muted-foreground text-sm">
          Campaign overview and performance.
        </p>
      </div>

      {/* Metrics */}
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

      {/* Activity log */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b text-left text-muted-foreground">
                <th className="py-3 px-4">Email</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Date</th>
              </tr>
            </thead>
            <tbody>
              {activity.map((a) => (
                <tr key={a.id} className="border-b">
                  <td className="py-3 px-4">{a.email}</td>
                  <td className="py-3 px-4">
                    <Badge
                      variant={
                        a.status === "Replied"
                          ? "default"
                          : a.status === "Opened"
                          ? "secondary"
                          : "destructive"
                      }
                    >
                      {a.status}
                    </Badge>
                  </td>
                  <td className="py-3 px-4">{a.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  )
}
