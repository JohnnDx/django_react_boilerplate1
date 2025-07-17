"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Trash2, Plus } from "lucide-react"
import { cn } from "@/lib/utils"

type Step =
  | {
      id: string
      type: "email"
      subject: string
      body: string
    }
  | {
      id: string
      type: "wait"
      delayDays: number
    }

export default function SequenceBuilderPage() {
  const [steps, setSteps] = useState<Step[]>([
    {
      id: "step-1",
      type: "email",
      subject: "Hej {{first_name}}, szybkie pytanie",
      body: "Widziałem Twoją firmę {{company}} i mam coś, co może Ci się przydać…",
    },
  ])

  const addEmailStep = () => {
    setSteps([
      ...steps,
      {
        id: `step-${steps.length + 1}`,
        type: "email",
        subject: "",
        body: "",
      },
    ])
  }

  const addWaitStep = () => {
    setSteps([
      ...steps,
      {
        id: `step-${steps.length + 1}`,
        type: "wait",
        delayDays: 2,
      },
    ])
  }

  const updateStep = (id: string, updated: Partial<Step>) => {
    setSteps((prev) =>
      prev.map((step) => (step.id === id ? { ...step, ...updated } : step))
    )
  }

  const removeStep = (id: string) => {
    setSteps((prev) => prev.filter((step) => step.id !== id))
  }

  return (
    <div className="p-6 space-y-6 max-w-4xl">
      <div>
        <h1 className="text-2xl font-semibold">Build Sequence</h1>
        <p className="text-muted-foreground mt-1 text-sm">
          Add emails and delays in the order they should be sent.
        </p>
      </div>

      <div className="space-y-6 border-l pl-4">
        {steps.map((step, index) => (
          <div key={step.id} className="relative">
            <div className="absolute -left-2 top-5 h-4 w-4 rounded-full bg-primary" />

            <Card className="relative">
              <CardHeader className="flex flex-row items-start justify-between">
                <div>
                  <CardTitle className="text-base">
                    Step {index + 1}
                  </CardTitle>
                  <Badge
                    variant={step.type === "email" ? "default" : "outline"}
                    className="mt-1"
                  >
                    {step.type === "email" ? "Email" : `Wait (${step.delayDays} days)`}
                  </Badge>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeStep(step.id)}
                  className="text-muted-foreground"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                {step.type === "email" ? (
                  <>
                    <div>
                      <Label>Subject</Label>
                      <Input
                        placeholder="e.g. Hej {{first_name}}, szybkie pytanie"
                        value={step.subject}
                        onChange={(e) =>
                          updateStep(step.id, { subject: e.target.value })
                        }
                      />
                    </div>
                    <div>
                      <Label>Body</Label>
                      <Textarea
                        placeholder="Widziałem Twoją stronę i chciałem zapytać..."
                        value={step.body}
                        onChange={(e) =>
                          updateStep(step.id, { body: e.target.value })
                        }
                        rows={6}
                      />
                    </div>
                  </>
                ) : (
                  <div>
                    <Label>Wait Duration (days)</Label>
                    <Input
                      type="number"
                      min={1}
                      value={step.delayDays}
                      onChange={(e) =>
                        updateStep(step.id, {
                          delayDays: parseInt(e.target.value, 10),
                        })
                      }
                    />
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      <Card>
        <CardContent className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between py-6">
          <div>
            <h3 className="text-base font-medium">Add New Step</h3>
            <p className="text-sm text-muted-foreground">Choose what to add next.</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" onClick={addEmailStep}>
              <Plus className="w-4 h-4 mr-2" />
              Email Step
            </Button>
            <Button variant="outline" onClick={addWaitStep}>
              <Plus className="w-4 h-4 mr-2" />
              Wait Step
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
