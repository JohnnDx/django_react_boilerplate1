// app/dashboard/klientomat-views/campaigns/page.tsx

"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MoreHorizontal } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { TablesInCardwithSearchandActions } from "@/components/tables-in-card" // If you use a custom table component

const campaigns = [
  {
    id: "1",
    name: "Astrolytics – Client Acquisition",
    leads: 220,
    sent: 180,
    status: "Active",
    created: "2025-07-06",
  },
  {
    id: "2",
    name: "Klientomat – Outreach July",
    leads: 150,
    sent: 75,
    status: "Paused",
    created: "2025-07-01",
  },
]


export default function CampaignsPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Campaigns</h1>
          <p className="text-muted-foreground mt-1 text-sm">
            Manage and track your cold email campaigns.
          </p>
        </div>
        <Button>Create Campaign</Button>
      </div>

      <div className="flex items-center gap-4">
        <Input placeholder="Search campaigns..." className="w-1/3" />
      </div>

      <Card>
        <CardContent className="p-4">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-muted-foreground border-b">
                <th className="text-left py-2">Name</th>
                <th className="text-left py-2">Leads</th>
                <th className="text-left py-2">Sent</th>
                <th className="text-left py-2">Status</th>
                <th className="text-left py-2">Created</th>
                <th className="text-left py-2 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {campaigns.map((campaign) => (
                <tr key={campaign.id} className="border-b">
                  <td className="py-3">{campaign.name}</td>
                  <td>{campaign.leads}</td>
                  <td>{campaign.sent}</td>
                  <td>
                    <Badge variant={campaign.status === "Active" ? "default" : "outline"}>
                      {campaign.status}
                    </Badge>
                  </td>
                  <td>{campaign.created}</td>
                  <td className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>Duplicate</DropdownMenuItem>
                        <DropdownMenuItem className="text-red-500">Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
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
