// app/dashboard/billing/page.tsx

"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils"; // only if you use a utility to combine classes

export default function Page() {
  return (
    <div className="p-6 space-y-8 max-w-3xl">
      <div>
        <h1 className="text-2xl font-semibold">Billing</h1>
        <p className="text-muted-foreground mt-2">Manage your subscription, payment methods and personal details.</p>
      </div>

      {/* Plan Info */}
      <Card className="bg-muted/30 ring-1 ring-border shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Plan Status
            <Badge variant="outline">Free Plan</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            You’re currently using the <strong>free plan</strong>. Upgrade to unlock more features like adding components to your app.
          </p>
          <div className="flex justify-end">
            <Button>View Plans</Button>
          </div>
        </CardContent>
      </Card>

      {/* Card Details */}
      <Card>
        <CardHeader>
          <CardTitle>Card Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">View and update your card details here.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="cardName">Name on Card</Label>
              <Input id="cardName" defaultValue="Kathy Pacheco" />
            </div>
            <div>
              <Label htmlFor="cardNumber">Card Number</Label>
              <Input id="cardNumber" defaultValue="1414 1412 4141 1422" />
            </div>
            <div>
              <Label htmlFor="expiry">Expiry</Label>
              <Input id="expiry" defaultValue="05/2025" />
            </div>
            <div>
              <Label htmlFor="cvv">CVV</Label>
              <Input id="cvv" defaultValue="•••" type="password" />
            </div>
          </div>

          <div className="flex justify-end">
            <Button className="mt-4">Save</Button>
          </div>
        </CardContent>
      </Card>

      {/* Client Details */}
      <Card>
        <CardHeader>
          <CardTitle>Client Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">Update personal information.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="fullName">Full Name</Label>
              <Input id="fullName" defaultValue="Kathy Pacheco" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" defaultValue="kathy_pacheco@mail.com" />
            </div>
            <div>
              <Label htmlFor="country">Country</Label>
              <Input id="country" defaultValue="United States" />
            </div>
            <div>
              <Label htmlFor="city">City</Label>
              <Input id="city" defaultValue="Providence" />
            </div>
            <div className="md:col-span-2">
              <Label htmlFor="address">Address</Label>
              <Input id="address" defaultValue="2825 Winding Way, Providence, RI 02908" />
            </div>
            <div>
              <Label htmlFor="state">State</Label>
              <Input id="state" defaultValue="Rhode Island" />
            </div>
          </div>

          <div className="flex justify-end">
            <Button className="mt-4">Save</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
