"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { ExternalLink } from "lucide-react";

const initialIntegrations = [
  {
    name: "Facebook",
    description: "Manage posts, engagement, and automate replies.",
    status: "active",
    image: "https://cdn-icons-png.flaticon.com/512/124/124010.png",
    docsUrl: "https://developers.facebook.com/docs/",
  },
  {
    name: "GitHub",
    description: "Streamline development, collaborate, and review code.",
    status: "inactive",
    image: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
    docsUrl: "https://docs.github.com/",
  },
  {
    name: "WhatsApp",
    description: "Send updates, offer support, real-time communication.",
    status: "active",
    image: "https://cdn-icons-png.flaticon.com/512/733/733585.png",
    docsUrl: "https://developers.facebook.com/docs/whatsapp/",
  },
  {
    name: "WooCommerce",
    description: "Sync your WooCommerce store and track conversions.",
    status: "inactive",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/94/WooCommerce_logo.svg",
    docsUrl: "https://woocommerce.com/documentation/",
  },
  {
    name: "Shopify",
    description: "Integrate with Shopify for seamless store analytics.",
    status: "active",
    image: "https://cdn.shopify.com/assets/images/logos/shopify-bag.png",
    docsUrl: "https://shopify.dev/docs",
  },
  {
    name: "Slack",
    description: "Receive campaign alerts and team collaboration updates.",
    status: "inactive",
    image: "https://cdn-icons-png.flaticon.com/512/2111/2111615.png",
    docsUrl: "https://api.slack.com/",
  },
  {
  name: "Google Analytics",
  description: "Track and analyze traffic, user behavior, and conversions.",
  status: "active",
  image: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
  docsUrl: "https://support.google.com/analytics/answer/10089681",
},
{
  name: "Mailchimp",
  description: "Manage email marketing campaigns and audience segmentation.",
  status: "inactive",
  image: "https://cdn-icons-png.flaticon.com/512/5968/5968898.png",
  docsUrl: "https://mailchimp.com/developer/",
},
{
  name: "Zapier",
  description: "Automate tasks between your favorite apps and services.",
  status: "inactive",
  image: "https://cdn-icons-png.flaticon.com/512/906/906324.png",
  docsUrl: "https://platform.zapier.com/docs/zapier-intro",
},
{
  name: "Notion",
  description: "Sync project documentation and collaborate with your team.",
  status: "active",
  image: "https://cdn-icons-png.flaticon.com/512/5968/5968853.png",
  docsUrl: "https://developers.notion.com/docs",
},
{
  name: "Calendly",
  description: "Schedule meetings with leads and clients automatically.",
  status: "inactive",
  image: "https://cdn-icons-png.flaticon.com/512/5968/5968472.png",
  docsUrl: "https://developer.calendly.com/",
},
{
  name: "Trello",
  description: "Manage tasks, sprints, and team collaboration visually.",
  status: "active",
  image: "https://cdn-icons-png.flaticon.com/512/5968/5968973.png",
  docsUrl: "https://developer.atlassian.com/cloud/trello/",
},

];

export default function Page() {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [integrationStates, setIntegrationStates] = useState(
    initialIntegrations.map((i) => ({ ...i }))
  );

  const handleToggle = (name: string) => {
    setIntegrationStates((prev) =>
      prev.map((integration) =>
        integration.name === name
          ? {
              ...integration,
              status: integration.status === "active" ? "inactive" : "active",
            }
          : integration
      )
    );
  };

  const filtered = integrationStates.filter((integration) => {
    const matchesSearch = integration.name.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "all" ? true : integration.status === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="p-6 w-full max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="w-full pb-4 border-b flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Integrations</h1>
          <p className="text-muted-foreground mt-1">
            Connect and manage third-party services.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Export</Button>
          <Button>Create New</Button>
        </div>
      </div>

      {/* Filters + Search */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <Tabs defaultValue="all" onValueChange={(val) => setFilter(val)}>
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="inactive">Inactive</TabsTrigger>
          </TabsList>
        </Tabs>
        <div className="relative w-full md:w-64">
          <Input
            placeholder="Search integrations..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pr-10"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary"
              aria-label="Clear search"
            >
              ×
            </button>
          )}
        </div>
      </div>

      {/* Integration Cards */}
      <div className="min-h-[200px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {filtered.map((integration, i) => (
          <Card key={i} className="flex flex-col justify-between h-full">
            <CardHeader>
              <div className="flex items-start justify-between">
                <img
                  src={integration.image}
                  alt={integration.name}
                  className="w-12 h-12 object-contain rounded-md bg-white p-1"
                />
                <a
                  href={integration.docsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition"
                  title="View documentation"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
              <div className="mt-4">
                <CardTitle className="text-lg">{integration.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{integration.description}</p>
              </div>
            </CardHeader>

            <CardContent />

            <CardFooter className="flex items-center justify-between pt-0 mt-auto">
              <Button variant="outline" size="sm">
                Settings
              </Button>
              <div className="flex items-center gap-2">
                <Label htmlFor={`toggle-${i}`} className="text-sm">
                  {integration.status === "active" ? "Enabled" : "Disabled"}
                </Label>
                <Switch
                  id={`toggle-${i}`}
                  checked={integration.status === "active"}
                  onCheckedChange={() => handleToggle(integration.name)}
                />
              </div>
            </CardFooter>
          </Card>
        ))}
        {filtered.length === 0 && (
          <div className="col-span-full text-center text-muted-foreground py-10">
            No integrations found.
          </div>
        )}
      </div>
    </div>
  );
}
