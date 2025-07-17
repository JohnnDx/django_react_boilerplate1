// app/dashboard/klientomat-views/page.tsx

"use client"

import {
  ArrowUpRight,
  Mail,
  Users,
  BarChart,
  Reply,
  Send,
  Inbox,
  PauseCircle,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const stats = [
  {
    title: "Emails Sent",
    value: "1,245",
    icon: Mail,
    growth: "+12.4%",
  },
  {
    title: "Open Rate",
    value: "58.2%",
    icon: BarChart,
    growth: "+4.8%",
  },
  {
    title: "Reply Rate",
    value: "17.5%",
    icon: Reply,
    growth: "+2.1%",
  },
  {
    title: "Total Campaigns",
    value: "7",
    icon: Users,
    growth: "+1 this week",
  },
]

const recentActivity = [
  {
    icon: Send,
    message: `Sent 45 emails for “Klientomat – Outreach July”`,
  },
  {
    icon: Inbox,
    message: `6 replies received for “Astrolytics – Client Acquisition”`,
  },
  {
    icon: PauseCircle,
    message: `Paused campaign “Klientomat – Outreach July”`,
  },
]

export default function KlientomatDashboardPage() {
  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold">Klientomat Dashboard</h1>
        <p className="text-muted-foreground text-sm mt-1">
          Quick overview of your outreach performance.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="flex flex-col justify-between">
            <CardHeader className="flex flex-row items-center justify-between pb-1 space-y-0">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className="w-5 h-5 text-muted-foreground" />
            </CardHeader>
            <CardContent className="pt-2">
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.growth}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Activity */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
        <div className="space-y-3">
          {recentActivity.map((item, index) => (
            <div key={index} className="flex items-center text-sm text-muted-foreground">
              <item.icon className="w-4 h-4 mr-2" />
              <span>{item.message}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
