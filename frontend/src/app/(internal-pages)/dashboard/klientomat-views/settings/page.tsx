"use client"

import { useState } from "react"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function SettingsPage() {
  const [workspaceName, setWorkspaceName] = useState("Klientomat Outreach")
  const [sendingEmail, setSendingEmail] = useState("outreach@klientomat.pl")
  const [warmupEnabled, setWarmupEnabled] = useState(true)
  const [dailyLimit, setDailyLimit] = useState(100)

  return (
    <div className="p-6 space-y-6 max-w-2xl">
      <div>
        <h1 className="text-2xl font-semibold">Settings</h1>
        <p className="text-muted-foreground mt-1 text-sm">
          Manage your workspace and cold email preferences.
        </p>
      </div>

      {/* Workspace Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Workspace</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label>Workspace Name</Label>
            <Input
              value={workspaceName}
              onChange={(e) => setWorkspaceName(e.target.value)}
            />
          </div>
          <div>
            <Label>Sending Email</Label>
            <Input value={sendingEmail} readOnly />
          </div>
        </CardContent>
      </Card>

      {/* Cold Email Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Cold Email Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <Label>Email Warm-Up</Label>
            <Switch
              checked={warmupEnabled}
              onCheckedChange={setWarmupEnabled}
            />
          </div>
          <div>
            <Label>Daily Sending Limit</Label>
            <Input
              type="number"
              min={1}
              max={1000}
              value={dailyLimit}
              onChange={(e) => setDailyLimit(Number(e.target.value))}
            />
          </div>
        </CardContent>
      </Card>

      {/* Danger Zone */}
      <Card>
        <CardHeader>
          <CardTitle className="text-red-600">Danger Zone</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Deleting your workspace will remove all sequences, campaigns, and stats.
          </p>
          <Button variant="destructive">Delete Workspace</Button>
        </CardContent>
      </Card>
    </div>
  )
}
