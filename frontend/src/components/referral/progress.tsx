import { Progress } from "@/components/ui/progress";

export default function ReferralProgressBar({ referrals }: { referrals: number }) {
  const max = 10;
  const percentage = Math.min((referrals / max) * 100, 100);

  return (
    <div className="max-w-3xl mx-auto text-left space-y-2 mb-8">
      <div className="flex justify-between text-sm font-medium">
        <span>Progress</span>
        <span>{referrals} / {max} referrals</span>
      </div>
      <Progress value={percentage} />
    </div>
  );
}
