'use client';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';

import { EngagementCards } from '@/components/custom/stats/EngagementCards';
import { TopCampaignsTable } from '@/components/custom/stats/TopCampaignsTable';
import { AttributionCard } from '@/components/custom/stats/AttributionCard';
import { RevenueCards } from '@/components/custom/stats/RevenueCards';
// import { ChartAreaInteractive } from '@/components/custom/stats/ChartAreaInteractive';
import { SourceBreakdownTable } from '@/components/custom/stats/SourceBreakdownTable';
import { LiveEventsFeed } from '@/components/custom/stats/LiveEventsFeed';
import { AttributionPieChart } from '@/components/custom/stats/AttributionPieChart';

export default function AstrolyticsDashboardPage() {
  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold tracking-tight">Analytics Dashboard</h1>
        <p className="text-muted-foreground">
          Real-time performance across all your marketing channels.
        </p>
      </div>

      {/* Summary Cards */}
      <EngagementCards />
      <RevenueCards />

      {/* Campaigns Table */}
      <TopCampaignsTable />

      {/* Attribution Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Attribution Overview</CardTitle>
          <CardDescription>Last touch vs. first touch conversions</CardDescription>
        </CardHeader>
        <CardContent>
          <AttributionCard />
        </CardContent>
      </Card>

      {/* Area Chart */}
      {/* <ChartAreaInteractive /> */}

      {/* Grid: Pie Chart + Live Events */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <AttributionPieChart />
        <LiveEventsFeed />
      </div>

      {/* Breakdown Table */}
      <Card>
        <CardHeader>
          <CardTitle>Top Sources</CardTitle>
          <CardDescription>Traffic and conversions by channel</CardDescription>
        </CardHeader>
        <CardContent>
          <SourceBreakdownTable />
        </CardContent>
      </Card>
    </div>
  );
}
