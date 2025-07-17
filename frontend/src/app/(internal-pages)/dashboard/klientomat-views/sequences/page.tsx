"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plus, Mail, MoreHorizontal } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"

const sequences = [
  {
    id: "seq1",
    name: "Ecom Outreach – Warm Leads",
    steps: 3,
    lastEdited: "2025-07-09",
    status: "Draft",
  },
  {
    id: "seq2",
    name: "Astrolytics B2B Trial Push",
    steps: 2,
    lastEdited: "2025-07-06",
    status: "Active",
  },
]

export default function SequencesPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Sequences</h1>
          <p className="text-muted-foreground mt-1 text-sm">
            Manage and edit your email follow-up flows.
          </p>
        </div>
        <Button asChild>
          <Link href="/dashboard/klientomat-views/sequences/builder">
            <Plus className="w-4 h-4 mr-2" />
            New Sequence
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* CTA card for new sequence */}
        <Link
          href="/dashboard/klientomat-views/sequences/builder"
          className="border-dashed border-2 border-muted rounded-xl hover:bg-muted transition-all"
        >
          <div className="flex flex-col items-center justify-center text-center h-full p-6 gap-2">
            <Plus className="w-6 h-6 text-muted-foreground" />
            <span className="font-medium text-sm text-muted-foreground">
              Create New Sequence
            </span>
          </div>
        </Link>

        {/* Sequence cards */}
        {sequences.map((seq) => (
          <Card key={seq.id}>
            <CardHeader className="flex flex-row items-start justify-between pb-2">
              <div>
                <CardTitle className="text-base">{seq.name}</CardTitle>
                <p className="text-xs text-muted-foreground">
                  {seq.steps} step{seq.steps !== 1 && "s"} · Last edited {seq.lastEdited}
                </p>
              </div>
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
            </CardHeader>
            <CardContent className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" />
                {seq.steps} Emails
              </div>
              <Badge variant={seq.status === "Active" ? "default" : "outline"}>
                {seq.status}
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
