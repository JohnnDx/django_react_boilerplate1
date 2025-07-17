"use client"

import { useState } from "react"
import { UploadCloud, MoreHorizontal, Trash2, CheckSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

type Lead = {
  id: string
  email: string
  name: string
  company: string
  status: string
}

const leads: Lead[] = [
  {
    id: "1",
    email: "marek@firma.pl",
    name: "Marek Kowalski",
    company: "Firma Sp. z o.o.",
    status: "Pending",
  },
  {
    id: "2",
    email: "anna@sklep24.pl",
    name: "Anna Nowak",
    company: "Sklep24",
    status: "Contacted",
  },
  {
    id: "3",
    email: "janusz@reklama.pro",
    name: "Janusz Bąk",
    company: "Reklama PRO",
    status: "Replied",
  },
]

export default function LeadsPage() {
  const [search, setSearch] = useState("")
  const [selected, setSelected] = useState<string[]>([])

  const filteredLeads = leads.filter((lead) =>
    lead.email.toLowerCase().includes(search.toLowerCase())
  )

  const allVisibleIds = filteredLeads.map((lead) => lead.id)
  const allSelected = allVisibleIds.every((id) => selected.includes(id))
  const someSelected = allVisibleIds.some((id) => selected.includes(id))

  const toggleSelect = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    )
  }

  const toggleSelectAll = () => {
    if (allSelected) {
      setSelected((prev) => prev.filter((id) => !allVisibleIds.includes(id)))
    } else {
      setSelected((prev) => [...new Set([...prev, ...allVisibleIds])])
    }
  }

  const isSelected = (id: string) => selected.includes(id)

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Leads</h1>
          <p className="text-muted-foreground mt-1 text-sm">
            Upload and manage your lead lists.
          </p>
        </div>
        <Button variant="default">
          <UploadCloud className="w-4 h-4 mr-2" />
          Import CSV
        </Button>
      </div>

      <div className="w-full md:w-1/3">
        <Input
          placeholder="Search by email…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {selected.length > 0 && (
        <div className="flex items-center justify-between border rounded-md px-4 py-2 bg-muted">
          <span>{selected.length} selected</span>
          <div className="flex gap-2">
            <Button size="sm" variant="secondary">
              <CheckSquare className="w-4 h-4 mr-1" />
              Assign to Campaign
            </Button>
            <Button size="sm" variant="destructive">
              <Trash2 className="w-4 h-4 mr-1" />
              Delete
            </Button>
          </div>
        </div>
      )}

      <Card>
        <CardContent className="p-4">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-muted-foreground border-b">
                <th className="text-left py-2 w-10">
                  <Checkbox
                    checked={allSelected}
                    indeterminate={someSelected && !allSelected}
                    onCheckedChange={toggleSelectAll}
                  />
                </th>
                <th className="text-left py-2">Email</th>
                <th className="text-left py-2">Name</th>
                <th className="text-left py-2">Company</th>
                <th className="text-left py-2">Status</th>
                <th className="text-right py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredLeads.map((lead) => (
                <tr key={lead.id} className="border-b">
                  <td className="py-3">
                    <Checkbox
                      checked={isSelected(lead.id)}
                      onCheckedChange={() => toggleSelect(lead.id)}
                    />
                  </td>
                  <td>{lead.email}</td>
                  <td>{lead.name}</td>
                  <td>{lead.company}</td>
                  <td>
                    <Badge
                      variant={
                        lead.status === "Replied"
                          ? "default"
                          : lead.status === "Contacted"
                          ? "outline"
                          : "secondary"
                      }
                    >
                      {lead.status}
                    </Badge>
                  </td>
                  <td className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Assign to campaign</DropdownMenuItem>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem className="text-red-500">
                          Delete
                        </DropdownMenuItem>
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
