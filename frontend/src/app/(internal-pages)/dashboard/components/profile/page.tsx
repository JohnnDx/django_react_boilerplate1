"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function Page() {
  return (
    <div className="p-6 max-w-3xl space-y-8">
      <div>
        <h1 className="text-2xl font-semibold">Profile</h1>
        <p className="text-muted-foreground mt-2">
          View and update your personal details and account information.
        </p>
      </div>

      {/* Avatar */}
      <Card>
        <CardHeader>
          <CardTitle>Avatar</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Avatar is your profile picture – everyone who visits your profile will see this.
          </p>
          <div className="flex items-center gap-4">
            <Image
              src="/placeholder-avatar.jpg"
              alt="User Avatar"
              width={64}
              height={64}
              className="rounded-full border"
            />
            <Button variant="outline">Upload</Button>
          </div>
          <div className="flex justify-end">
            <Button>Save</Button>
          </div>
        </CardContent>
      </Card>

      {/* Display Name */}
      {/* <Card>
        <CardHeader>
          <CardTitle>Display Name</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Enter your full name or a display name you'd like to use.
          </p>
          <Input placeholder="Shadcn Design" maxLength={32} />
          <p className="text-xs text-muted-foreground">Maximum allowed length is 32 characters.</p>
          <div className="flex justify-end">
            <Button>Save</Button>
          </div>
        </CardContent>
      </Card> */}

      {/* Basic Information */}
      <Card>
        <CardHeader>
          <CardTitle>Basic Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="username">Username</Label>
              <Input id="username" defaultValue="nicol43" />
            </div>
            <div>
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" defaultValue="Stephanie" />
            </div>
            <div>
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" defaultValue="Nicol" />
            </div>
            <div className="md:col-span-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" defaultValue="stephanie_nicol@mail.com" />
            </div>
          </div>
          <div className="flex justify-end">
            <Button>Save</Button>
          </div>
        </CardContent>
      </Card>

      {/* Change Password */}
      <Card>
        <CardHeader>
          <CardTitle>Change Password</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Update your password to keep your account secure.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="currentPassword">Current Password</Label>
              <Input id="currentPassword" type="password" defaultValue="••••••••••" />
            </div>
            <div>
              <Label htmlFor="newPassword">New Password</Label>
              <Input id="newPassword" type="password" defaultValue="••••••••••" />
            </div>
            <div className="md:col-span-2">
              <Label htmlFor="confirmPassword">Confirm New Password</Label>
              <Input id="confirmPassword" type="password" defaultValue="••••••••••" />
            </div>
          </div>
          <div className="flex justify-end">
            <Button>Save</Button>
          </div>
        </CardContent>
      </Card>

      {/* Advanced Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Advanced Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Configure detailed account preferences and security options.
          </p>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label>Data Export Access</Label>
                <p className="text-muted-foreground text-sm">Allow export of personal data and backups.</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label>Allow Admin to Add Members</Label>
                <p className="text-muted-foreground text-sm">Admins can invite and manage members.</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label>Enable Two-Factor Authentication</Label>
                <p className="text-muted-foreground text-sm">Require 2FA for added account security.</p>
              </div>
              <Switch />
            </div>
          </div>
          <div className="flex justify-end">
            <Button>Save</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
