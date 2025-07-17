"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { useState } from "react"

const emails = [
  {
    id: "1",
    recipient: "anna@sklep24.pl",
    campaign: "Ecom July Campaign",
    date: "2025-07-09",
    status: "Sent",
  },
  {
    id: "2",
    recipient: "marek@firma.pl",
    campaign: "Astrolytics Trial Push",
    date: "2025-07-08",
    status: "Queued",
  },
  {
    id: "3",
    recipient: "janusz@reklama.pro",
    campaign: "Ecom July Campaign",
    date: "2025-07-07",
    status: "Failed",
  },
]

export default function OutboxPage() {
  const [search, setSearch] = useState("")

  const filtered = emails.filter((email) =>
    email.recipient.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Outbox</h1>
        <p className="text-muted-foreground mt-1 text-sm">
          View sent, queued, or failed emails.
        </p>
      </div>

      <div className="w-full sm:w-1/3">
        <Input
          placeholder="Search by email…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Email Activity</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b text-muted-foreground text-left">
                <th className="py-3 px-4">Recipient</th>
                <th className="py-3 px-4">Campaign</th>
                <th className="py-3 px-4">Date</th>
                <th className="py-3 px-4 text-right">Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((email) => (
                <tr key={email.id} className="border-b">
                  <td className="py-3 px-4">{email.recipient}</td>
                  <td className="py-3 px-4">{email.campaign}</td>
                  <td className="py-3 px-4">{email.date}</td>
                  <td className="py-3 px-4 text-right">
                    <Badge
                      variant={
                        email.status === "Sent"
                          ? "default"
                          : email.status === "Queued"
                          ? "secondary"
                          : "destructive"
                      }
                    >
                      {email.status}
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
