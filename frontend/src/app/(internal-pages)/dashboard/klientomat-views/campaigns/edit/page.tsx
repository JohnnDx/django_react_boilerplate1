"use client"

import { useState } from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"

const sequences = ["Ecom Re-Engagement", "Trial to Paid", "Follow-up A"]
const leadLists = ["Ecom July", "B2B SaaS Clients", "Realtors - PL"]
const inboxes = ["outreach@klientomat.pl", "sales@astrolytics.io"]

export default function EditCampaignPage() {
  const [name, setName] = useState("Astrolytics Trial Push")
  const [sequence, setSequence] = useState("Trial to Paid")
  const [leads, setLeads] = useState("B2B SaaS Clients")
  const [inbox, setInbox] = useState("sales@astrolytics.io")
  const [status, setStatus] = useState<"Active" | "Paused">("Active")

  const handleSave = () => {
    console.log("Updated campaign:", { name, sequence, leads, inbox, status })
    // TODO: Save via backend
  }

  return (
    <div className="p-6 max-w-2xl space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Edit Campaign</h1>
          <p className="text-muted-foreground text-sm">Update campaign details below.</p>
        </div>
        <Badge variant={status === "Active" ? "default" : "secondary"}>
          {status}
        </Badge>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Campaign Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label>Name</Label>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Campaign name"
            />
          </div>

          <div>
            <Label>Sequence</Label>
            <select
              className="w-full h-10 rounded-md border px-3 text-sm"
              value={sequence}
              onChange={(e) => setSequence(e.target.value)}
            >
              {sequences.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          <div>
            <Label>Lead List</Label>
            <select
              className="w-full h-10 rounded-md border px-3 text-sm"
              value={leads}
              onChange={(e) => setLeads(e.target.value)}
            >
              {leadLists.map((l) => (
                <option key={l} value={l}>{l}</option>
              ))}
            </select>
          </div>

          <div>
            <Label>Sender Inbox</Label>
            <select
              className="w-full h-10 rounded-md border px-3 text-sm"
              value={inbox}
              onChange={(e) => setInbox(e.target.value)}
            >
              {inboxes.map((i) => (
                <option key={i} value={i}>{i}</option>
              ))}
            </select>
          </div>

          <div className="flex gap-2">
            <Button
              type="button"
              variant={status === "Paused" ? "default" : "outline"}
              onClick={() => setStatus(status === "Paused" ? "Active" : "Paused")}
            >
              {status === "Paused" ? "Resume" : "Pause Campaign"}
            </Button>

            <Button onClick={handleSave}>Save Changes</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
