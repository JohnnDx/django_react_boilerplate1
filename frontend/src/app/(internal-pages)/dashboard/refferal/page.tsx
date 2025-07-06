"use client";
import ReferralHeader from "@/components/referral/header";
import ShareReferralLink from "@/components/referral/refferalLink";
import ReferralProgressBar from "@/components/referral/progress";
import EarningsComponent from "@/components/referral/table";
import { AffiliateDetails } from "@/components/referral/types";
import getAffiliateDetails from "@/queries/refferal/getAffiliateDetails";
import { parseError } from "@/utils/errors";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Card, CardContent } from "@/components/ui/card";


function RefferalDashboard() {
  const [refferalLink, setRefferalLink] = useState<string>("");

  const [statsData, setStatsData] = useState<AffiliateDetails>();

  useEffect(() => {
    getAffiliateDetails()
      .then((response) => {
        const affiliateCode = response.data.affiliate_code;
        setRefferalLink(affiliateCode);
        setStatsData({
          totalReferrals: response.data.total_revenue_share / 10,
          earnings: response.data.earnings,
          ctr: response.data.clicks,
          totalSignups: response.data.successful_signups,
        });
      })
      .catch((error: any) => {
        toast.error(parseError(error));
      });
  }, []);

  return (
    <div className="p-10">
      <Card className="bg-gradient-to-r from-green-100 to-white border border-green-300 shadow-sm">
        <CardContent className="py-6 text-center">
          <p className="text-lg font-semibold text-green-700">
            🎁 Unlock a Free Subscription when you reach 10 referrals!
          </p>
          <p className="text-sm text-muted-foreground">
            You're only {10 - (statsData?.totalReferrals || 0)} referrals away from your reward.
          </p>
        </CardContent>
      </Card>
      <ReferralProgressBar referrals={statsData?.totalReferrals || 0} />
      
      <ReferralHeader />
      

      <ShareReferralLink
        refferalLink={`${process.env.NEXT_PUBLIC_SITE_URL}?code=${refferalLink}`}
      />
      <EarningsComponent
        statsData={
          statsData || {
            totalReferrals: 0,
            earnings: 0,
            ctr: 0,
            totalSignups: 0,
          }
        }
      />
      

    </div>
  );
}

export default RefferalDashboard;
