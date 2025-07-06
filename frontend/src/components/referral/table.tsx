import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AffiliateDetails } from "./types";

export default function EarningsComponent({ statsData }: { statsData: AffiliateDetails }) {
  const metrics = [
    { label: "Total Referrals", value: statsData.totalReferrals },
    { label: "Earnings", value: `$${statsData.earnings.toFixed(2)}` },
    { label: "Total Clicks", value: statsData.ctr },
    { label: "Total Sign-ups", value: statsData.totalSignups },
  ];

  return (
    <section className="py-12 text-center space-y-6">
      <h2 className="text-3xl font-semibold">Your Earnings</h2>
      <p className="text-muted-foreground max-w-2xl mx-auto">
        All key metrics for tracking your affiliate success.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
        {metrics.map(({ label, value }) => (
          <Card key={label}>
            <CardHeader>
              <CardTitle className="text-sm text-muted-foreground">{label}</CardTitle>
            </CardHeader>
            <CardContent className="text-2xl font-semibold">{value}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
