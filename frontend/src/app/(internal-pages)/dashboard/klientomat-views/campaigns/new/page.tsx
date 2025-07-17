"use client"

import { useState } from "react"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"

const sequences = ["Ecom Re-Engagement", "Trial to Paid", "Follow-up A"]
const leadLists = ["Ecom July", "B2B SaaS Clients", "Realtors - PL"]
const inboxes = ["outreach@klientomat.pl", "sales@astrolytics.io"]

export default function NewCampaignPage() {
  const [step, setStep] = useState(0)
  const [campaignName, setCampaignName] = useState("")
  const [sequence, setSequence] = useState("")
  const [leads, setLeads] = useState("")
  const [inbox, setInbox] = useState("")

  const steps = ["Name", "Sequence", "Leads", "Sender", "Review"]

  const isNextDisabled = () => {
    if (step === 0) return !campaignName
    if (step === 1) return !sequence
    if (step === 2) return !leads
    if (step === 3) return !inbox
    return false
  }

  const handleNext = () => setStep((prev) => Math.min(prev + 1, steps.length - 1))
  const handleBack = () => setStep((prev) => Math.max(prev - 1, 0))

  const handleCreate = () => {
    console.log("Launching campaign:", {
      campaignName,
      sequence,
      leads,
      inbox,
    })
    // TODO: call backend
  }

  return (
    <div className="p-6 space-y-6 max-w-2xl">
      <h1 className="text-2xl font-semibold">Create New Campaign</h1>
      <p className="text-muted-foreground text-sm">
        Set up a new outreach campaign in a few steps.
      </p>

      {/* Step indicator */}
      <div className="flex items-center gap-2">
        {steps.map((s, i) => (
          <div key={i} className="flex items-center">
            <div
              className={cn(
                "w-8 h-8 rounded-full border flex items-center justify-center text-sm",
                step >= i ? "bg-primary text-white" : "bg-muted text-muted-foreground"
              )}
            >
              {i + 1}
            </div>
            {i !== steps.length - 1 && <Separator className="w-6 mx-2" />}
          </div>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Step {step + 1}: {steps[step]}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {step === 0 && (
            <div>
              <Label>Campaign Name</Label>
              <Input
                value={campaignName}
                onChange={(e) => setCampaignName(e.target.value)}
                placeholder="e.g. Astrolytics B2B Trial Push"
              />
            </div>
          )}

          {step === 1 && (
            <div>
              <Label>Select Sequence</Label>
              <select
                className="w-full h-10 rounded-md border px-3 text-sm"
                value={sequence}
                onChange={(e) => setSequence(e.target.value)}
              >
                <option value="">Choose one</option>
                {sequences.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
          )}

          {step === 2 && (
            <div>
              <Label>Select Lead List</Label>
              <select
                className="w-full h-10 rounded-md border px-3 text-sm"
                value={leads}
                onChange={(e) => setLeads(e.target.value)}
              >
                <option value="">Choose one</option>
                {leadLists.map((l) => (
                  <option key={l} value={l}>{l}</option>
                ))}
              </select>
            </div>
          )}

          {step === 3 && (
            <div>
              <Label>Select Inbox</Label>
              <select
                className="w-full h-10 rounded-md border px-3 text-sm"
                value={inbox}
                onChange={(e) => setInbox(e.target.value)}
              >
                <option value="">Choose one</option>
                {inboxes.map((i) => (
                  <option key={i} value={i}>{i}</option>
                ))}
              </select>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-2 text-sm text-muted-foreground">
              <div><strong>Name:</strong> {campaignName}</div>
              <div><strong>Sequence:</strong> {sequence}</div>
              <div><strong>Leads:</strong> {leads}</div>
              <div><strong>Inbox:</strong> {inbox}</div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Controls */}
      <div className="flex justify-between">
        <Button variant="secondary" onClick={handleBack} disabled={step === 0}>
          Back
        </Button>
        {step === steps.length - 1 ? (
          <Button onClick={handleCreate}>Create Campaign</Button>
        ) : (
          <Button onClick={handleNext} disabled={isNextDisabled()}>
            Next
          </Button>
        )}
      </div>
    </div>
  )
}
