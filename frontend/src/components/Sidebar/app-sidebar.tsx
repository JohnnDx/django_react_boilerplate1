"use client";

import * as React from "react";
import {
  BookOpen,
  Bot,
  LifeBuoy,
  Send,
  Settings2,
  SquareTerminal,
  Puzzle,
  AlertTriangle,
  Mail,
  BarChart3, Settings, Users, FolderKanban, PieChart, Inbox, Activity, Server 
} from "lucide-react";

import WorkspaceSwitcher from "@/components/Sidebar/workspace-switcher";
import { NavMain } from "@/components/Sidebar/nav-main";
import { NavSecondary } from "@/components/Sidebar/nav-secondary";
import { NavUser } from "@/components/Sidebar/nav-user";
import { SidebarOptInForm } from "@/components/Sidebar/sidebar-opt-in-form";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";

import { useFeedbackModalContext } from "@/contexts/ModalProvider";
import { useTranslations } from "next-intl";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { openFeedbackModal } = useFeedbackModalContext();
  const t = useTranslations("sidebar");

  const data = {
        user: {
          name: "shadcn",
          email: "m@example.com",
          avatar: "/avatars/shadcn.jpg",
        },
          navMain: [
            {
          title: t("overview"),
          url: "/dashboard/overview",
          icon: SquareTerminal,
        },
        {
          title: t("chat"),
          url: "/dashboard/chat",
          icon: Bot,
        },
        {
          title: t("referral"),
          url: "/dashboard/refferal",
          icon: LifeBuoy,
        },
        {
          title: t("modals"),
          url: "/dashboard/modals",
          icon: BookOpen,
        },
        {
          title: t("components._"),
          url: "/dashboard/components",
          icon: Puzzle,
          items: [
            { title: t("components.changelog"), url: "/dashboard/components/changelog" },
            { title: t("components.billing"), url: "/dashboard/components/billing" },
            { title: t("components.profile"), url: "/dashboard/components/profile" },
            { title: t("components.integrations"), url: "/dashboard/components/integrations" },
            { title: t("components.api"), url: "/dashboard/components/api" },
            { title: t("components.pricing"), url: "/dashboard/components/pricing" },
            { title: t("components.invoices"), url: "/dashboard/components/invoices" },
            { title: t("components.team"), url: "/dashboard/components/team" },
            { title: t("components.notifications"), url: "/dashboard/components/notifications" },
            { title: t("components.activity"), url: "/dashboard/components/activity" },
            { title: t("components.mails"), url: "/dashboard/components/mails" },
            { title: t("components.dashboard"), url: "/dashboard/components/dashboard" },
            { title: t("components.onboarding"), url: "/dashboard/components/onboarding" },
          ],
        },
      {
        title: "Klientomat Views",
        icon: Mail,
        url: "/dashboard/klientomat-views/",
        items: [
          {
            title: "Dashboard",
            url: "/dashboard/klientomat-views",
          },
          {
            title: "Campaigns",
            url: "/dashboard/klientomat-views/campaigns",
          },
          {
            title: "Leads",
            url: "/dashboard/klientomat-views/leads",
          },
          {
            title: "Sequences",
            url: "/dashboard/klientomat-views/sequences",
          },
          {
            title: "Analytics",
            url: "/dashboard/klientomat-views/analytics",
          },
          {
            title: "Outbox",
            url: "/dashboard/klientomat-views/outbox",
          },
          {
            title: "Email Providers",
            url: "/dashboard/klientomat-views/email-providers",
          },
          {
            title: "Team",
            url: "/dashboard/klientomat-views/teams",
          },
          {
            title: "Settings",
            url: "/dashboard/klientomat-views/settings",
          },
        ],
      },
      {
        title: "Astrolytics",
        icon: BarChart3,
        url: "/dashboard/astrolytics",
        items: [
          {
            title: "Dashboard",
            url: "/dashboard/astrolytics",
            icon: PieChart,
          },
          {
            title: "Campaigns",
            url: "/dashboard/astrolytics/campaigns",
            icon: FolderKanban,
          },
          {
            title: "Events",
            url: "/dashboard/astrolytics/events",
            icon: Activity,
          },
          {
            title: "Referrals",
            url: "/dashboard/astrolytics/referrals",
            icon: Inbox,
          },
          {
            title: "Insights",
            url: "/dashboard/astrolytics/insights",
            icon: Server,
          },
          {
            title: "Settings",
            url: "/dashboard/astrolytics/settings",
            icon: Settings,
          },
          {
            title: "Team",
            url: "/dashboard/astrolytics/team",
            icon: Users,
          },
        ],
      },
      {
        title: "Errors",
        url: "/error-pages",
        icon: AlertTriangle,
        items: [
          { title: "401 Unauthorized", url: "/error-pages/401" },
          { title: "403 Forbidden", url: "/error-pages/403" },
          { title: "404 Not Found", url: "/error-pages/404" },
          { title: "500 Server Error", url: "/error-pages/500" },
          { title: "503 Service Unavailable", url: "/error-pages/503" },
        ],
      },
    ],
    navSecondary: [
      {
        title: "Support",
        url: "#",
        icon: LifeBuoy,
      },
      {
        title: "Feedback",
        icon: Send,
        onClick: () => openFeedbackModal(), // ✅ Modal logic wired
      },
    ],
  };

  return (
    <Sidebar variant="inset" {...props}>
      {/* <SidebarHeader>
        <WorkspaceSwitcher />
      </SidebarHeader> */}

   <SidebarHeader className="px-4 py-4">
  <div className="flex items-center gap-3 border-b pb-3">
    {/* <img src="/logo.svg" alt="Klientomat" className="w-8 h-8" /> */}
    <img src="/klientomat_logo.svg" alt="Klientomat" className=" h-6" />
    {/* <div>
      <h2 className="text-lg font-semibold">Saas name</h2>
      <p className="text-xs text-muted-foreground -mt-1">Automated Outreach</p>
    </div> */}
  </div>
  <div className="pt-3">
    <WorkspaceSwitcher />
  </div>
</SidebarHeader>



      <SidebarContent className="border-t">
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>

      <SidebarFooter>
        <div className="p-1">
          <SidebarOptInForm />
        </div>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
