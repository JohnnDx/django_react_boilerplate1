"use client"

import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MoreHorizontal, Plus } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const inboxes = [
  {
    id: "1",
    email: "outreach@klientomat.pl",
    provider: "IMAP (custom)",
    status: "Connected",
  },
  {
    id: "2",
    email: "sales@astrolytics.io",
    provider: "Google Workspace",
    status: "Error",
  },
]

export default function EmailProvidersPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Email Providers</h1>
          <p className="text-sm text-muted-foreground">
            Manage your connected inboxes.
          </p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Add Inbox
        </Button>
      </div>

      <Card>
        <CardContent className="p-0">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-muted-foreground border-b text-left">
                <th className="py-3 px-4">Email</th>
                <th className="py-3 px-4">Provider</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {inboxes.map((inbox) => (
                <tr key={inbox.id} className="border-b">
                  <td className="py-3 px-4">{inbox.email}</td>
                  <td className="py-3 px-4">{inbox.provider}</td>
                  <td className="py-3 px-4">
                    <Badge
                      variant={
                        inbox.status === "Connected" ? "default" : "destructive"
                      }
                    >
                      {inbox.status}
                    </Badge>
                  </td>
                  <td className="py-3 px-4 text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Remove</DropdownMenuItem>
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
