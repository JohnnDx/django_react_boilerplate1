// app/dashboard/components/changelog/page.tsx

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
const changelog = [
  {
    version: "v1.3.0",
    date: "2025-07-10",
    tag: "New",
    updates: [
      "Launched user roles and permissions management",
      "Added notification preferences for campaign activity",
      "Enabled email scheduling based on user time zone",
      "Integrated support for Gmail OAuth sending",
      "Added lead scoring system with tagging",
      "Revamped dashboard performance with lazy loading",
      "Support for adding custom unsubscribe URLs",
      "Activity feed with filters (campaigns, users, system)",
    ],
  },
  {
    version: "v1.2.0",
    date: "2025-07-05",
    tag: "New",
    updates: [
      "Added team invitations via email",
      "Implemented audit log system for user activity",
      "Improved API key management UI",
      "Added i18n support for Polish and English",
      "New onboarding checklist with progress tracking",
      "Added dark mode toggle in settings",
      "Support for exporting leads to CSV",
      "Smart suggestions in email composer using OpenAI",
    ],
  },
  {
    version: "v1.1.0",
    date: "2025-06-28",
    tag: "Improvement",
    updates: [
      "Launched multi-tenancy support",
      "Integrated Stripe billing with team-based plans",
      "Added reusable analytics cards to dashboard",
      "Improved error handling for SMTP send failures",
      "Enhanced mobile responsiveness on dashboard views",
      "Faster campaign creation flow with autosave",
      "Refactored backend services for better scaling",
    ],
  },
  {
    version: "v1.0.0",
    date: "2025-06-15",
    tag: "Release",
    updates: [
      "Initial MVP release with campaign creation",
      "Cold email sending via SMTP and Mailersend",
      "Basic metrics and user onboarding flows",
      "Stripe integration for paid plans",
      "Lead upload via CSV and manual form",
      "User authentication with Supabase",
      "Admin panel with impersonate feature",
      "Basic user settings panel",
    ],
  },
];


export default function ChangelogPage() {
  return (
    <div className="p-6">
      <div className="w-full max-w-2xl space-y-10">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Changelog</h1>
          <p className="text-muted-foreground mt-1">
            See what's new and improved in the platform.
          </p>
        </div>

        {changelog.map((entry, i) => (
          <div key={i} className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="text-xl font-semibold">{entry.version}</div>
              <div className="flex gap-2">
                <Badge variant="default">{entry.tag}</Badge>
                <Badge variant="outline">{entry.date}</Badge>
              </div>
            </div>

            <ul className="list-disc pl-6 space-y-1 text-sm text-muted-foreground">
              {entry.updates.map((update, j) => (
                <li key={j}>{update}</li>
              ))}
            </ul>

            <Separator />
          </div>
        ))}
      </div>
    </div>
  );
}
