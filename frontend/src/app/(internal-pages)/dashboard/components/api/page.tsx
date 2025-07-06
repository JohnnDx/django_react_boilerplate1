"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const statusColor = (status: string) => {
  switch (status) {
    case "Active":
      return "bg-black text-white";
    case "Disabled":
      return "bg-[#E7000B] text-white";
    case "Revoke":
      return "bg-white text-black border border-gray-300";
    default:
      return "bg-muted text-foreground";
  }
};

export default function Page() {
  const [publicApis, setPublicApis] = useState([
    {
      name: "Public Data API",
      createdAt: "Sep 6, 2024 2:08 am",
      status: "Active",
    },
    {
      name: "Product Info API",
      createdAt: "Sep 12, 2024 2:07 pm",
      status: "Active",
    },
    {
      name: "User Data API",
      createdAt: "Aug 20, 2024 7:59 am",
      status: "Revoke",
    },
  ]);

  const [privateApis, setPrivateApis] = useState([
    {
      name: "Internal Data API",
      createdAt: "Sep 1, 2024 7:53 pm",
      status: "Active",
    },
    {
      name: "Auth Service API",
      createdAt: "Aug 29, 2024 9:18 pm",
      status: "Active",
    },
    {
      name: "Billing API",
      createdAt: "Aug 19, 2024 8:51 pm",
      status: "Disabled",
    },
  ]);

  const [openDialog, setOpenDialog] = useState(false);
  const [newApiName, setNewApiName] = useState("");
  const [newApiStatus, setNewApiStatus] = useState("Active");

  const handleAddNew = () => {
    const now = new Date();
    const formattedDate = now.toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });

    setPublicApis((prev) => [
      ...prev,
      { name: newApiName, createdAt: formattedDate, status: newApiStatus },
    ]);
    setNewApiName("");
    setNewApiStatus("Active");
    setOpenDialog(false);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-8 w-full">
      {/* Header */}
      <div className="w-full flex items-center justify-between border-b pb-4">
        <div>
          <h1 className="text-2xl font-semibold">API Settings</h1>
          <p className="text-muted-foreground mt-1">
            Configure your API settings. Add, remove or edit existing API keys.
          </p>
        </div>
        <Button variant="outline">Contact support</Button>
      </div>

      {/* Public API Settings */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-medium">Public API Settings</h2>
          <Button size="sm" onClick={() => setOpenDialog(true)}>New</Button>
        </div>
        <div className="border rounded-md w-full">
          <div className="grid grid-cols-5 px-6 py-2 text-sm font-medium border-b bg-white text-left">
            <div>API Name</div>
            <div>Date of Creation</div>
            <div>Status</div>
            <div className="col-span-2">Actions</div>
          </div>
          {publicApis.map((api, idx) => (
            <div
              key={idx}
              className="grid grid-cols-5 px-6 py-3 border-b last:border-0 text-sm items-center text-left"
            >
              <div>{api.name}</div>
              <div>{api.createdAt}</div>
              <div>
                <Badge className={statusColor(api.status)}>{api.status}</Badge>
              </div>
              <div className="col-span-2 flex gap-2">
                <Button variant="outline" size="sm">Edit</Button>
                <Button variant="outline" size="sm">Duplicate</Button>
                <Button variant="destructive" size="sm">Delete</Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      {/* Private API Settings */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-medium">Private API Settings</h2>
          <Button size="sm">New</Button>
        </div>
        <div className="border rounded-md w-full">
          <div className="grid grid-cols-5 px-6 py-2 text-sm font-medium border-b bg-white text-left">
            <div>API Name</div>
            <div>Date of Creation</div>
            <div>Status</div>
            <div className="col-span-2">Actions</div>
          </div>
          {privateApis.map((api, idx) => (
            <div
              key={idx}
              className="grid grid-cols-5 px-6 py-3 border-b last:border-0 text-sm items-center text-left"
            >
              <div>{api.name}</div>
              <div>{api.createdAt}</div>
              <div>
                <Badge className={statusColor(api.status)}>{api.status}</Badge>
              </div>
              <div className="col-span-2 flex gap-2">
                <Button variant="outline" size="sm">Edit</Button>
                <Button variant="outline" size="sm">Duplicate</Button>
                <Button variant="destructive" size="sm">Delete</Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* New API Dialog */}
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Public API</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label>Name</Label>
              <Input
                placeholder="API Name"
                value={newApiName}
                onChange={(e) => setNewApiName(e.target.value)}
              />
            </div>
            <div>
              <Label>Status</Label>
              <select
                value={newApiStatus}
                onChange={(e) => setNewApiStatus(e.target.value)}
                className="w-full border rounded-md px-3 py-2 text-sm"
              >
                <option value="Active">Active</option>
                <option value="Disabled">Disabled</option>
                <option value="Revoke">Revoke</option>
              </select>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpenDialog(false)}>Cancel</Button>
            <Button onClick={handleAddNew}>Add API</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
