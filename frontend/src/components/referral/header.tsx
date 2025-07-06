import { Play, Grid3X3, DollarSign } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const steps = [
  { title: "Invite people", description: "Start by sharing your link.", icon: <Play className="w-6 h-6" /> },
  { title: "Buy a Template", description: "Users need to make a purchase.", icon: <Grid3X3 className="w-6 h-6" /> },
  { title: "Earn Money", description: "Earn when purchases are made.", icon: <DollarSign className="w-6 h-6" /> },
];

export default function ReferralHeader() {
  return (
    <section className="text-center py-12 space-y-6">
      <h1 className="text-4xl font-bold text-primary">Referral System</h1>
      <p className="text-muted-foreground max-w-2xl mx-auto">
        Empower your audience to take action. Share, convert, and earn.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-10">
        {steps.map((step, index) => (
          <Card key={index} className="text-center">
            <CardHeader>
              <div className="w-12 h-12 mx-auto bg-pink-100 text-pink-600 flex items-center justify-center rounded-full">
                {step.icon}
              </div>
              <CardTitle className="mt-4">{step.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground text-sm">
              {step.description}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
