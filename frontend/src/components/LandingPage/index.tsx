"use client";
import React, { useEffect } from "react";

import PureHero from "./PURE_LP_TEMPLATE/hero";
import PureFeatures from "./PURE_LP_TEMPLATE/features";
import PurePricing from "./PURE_LP_TEMPLATE/pricing";
import PureFAQ from "./PURE_LP_TEMPLATE/faq";
import PureTestimonials from "./PURE_LP_TEMPLATE/testimonials";
import PureCTA from "./PURE_LP_TEMPLATE/cta-banner";


import Features from "./Features";
import Testimonials from "../Testimonials";
import FAQ from "./FAQ";
import CTA from "./CTA";
import WhyChooseUs from "./whyChooseUs";
import TechnologyUsed from "./TechnologyUsed";
import { PricingTable } from "../PricingTable";
import JoinSlack from "./slack";
import Cookies from "js-cookie";

import { useSearchParams } from "next/navigation";
import postIncrementClicks from "@/queries/refferal/postIncrementClicks";
import { AFFILIATE_CODE_KEY } from "@/utils/constants";
const LandingPage = () => {
  const params = useSearchParams();
  const code = params.get("code");

  useEffect(() => {
    if (code) {
      postIncrementClicks(code);
      Cookies.set(AFFILIATE_CODE_KEY, code, { expires: 15 });
    }
  }, [code]);
  return (
    <div>
      <PureHero />
      <PureFeatures />
      {/* <PurePricing /> */}
      <PureTestimonials />
      <PureFAQ />
      <PureCTA />
      





      {/* <Features />
      <TechnologyUsed />
      <WhyChooseUs />
      <PricingTable showCurrentPlan={false} />
      <Testimonials />
      <FAQ />
      <CTA />
      <JoinSlack /> */}
    </div>
  );
};

export default LandingPage;
function setCookie(arg0: string, code: string, arg2: { path: string }) {
  throw new Error("Function not implemented.");
}
