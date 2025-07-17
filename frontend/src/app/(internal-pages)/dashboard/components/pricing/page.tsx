"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group";

export default function Page() {
  const t = useTranslations("pricing");
  const [billing, setBilling] = useState<"monthly" | "annually">("monthly");

  const plans = [
    {
      id: "basic",
      badge: null,
      price: billing === "monthly" ? 29 : 290,
      unit: billing === "monthly" ? "/mies." : "/rok",
    },
    {
      id: "standard",
      badge: t("plans.standard.badge"),
      price: billing === "monthly" ? 49 : 490,
      unit: billing === "monthly" ? "/mies." : "/rok",
    },
    {
      id: "premium",
      badge: null,
      price: billing === "monthly" ? 99 : 990,
      unit: billing === "monthly" ? "/mies." : "/rok",
    },
  ];

  return (
    <div className="w-full px-6 py-12 max-w-5xl mx-auto space-y-10">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">{t("title")}</h1>
        <p className="text-muted-foreground max-w-xl mx-auto">
          {t("description")}
        </p>

        <ToggleGroup
          type="single"
          value={billing}
          onValueChange={(v) => v && setBilling(v as "monthly" | "annually")}
          className="mt-4"
        >
          <ToggleGroupItem value="monthly">
            {t("billing.monthly")}
          </ToggleGroupItem>
          <ToggleGroupItem value="annually">
            {t("billing.annually")}
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {plans.map((plan) => {
          const isFeatured = !!plan.badge;
          const planData = t.raw(`plans.${plan.id}`);
          return (
            <Card
              key={plan.id}
              className={`flex flex-col justify-between w-full transition ${
                isFeatured ? "bg-black text-white border-black" : ""
              }`}
            >
              <CardHeader className="space-y-1">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl">{planData.name}</CardTitle>
                  {plan.badge && (
                    <Badge variant="secondary">{plan.badge}</Badge>
                  )}
                </div>
                <p
                  className={`mt-1 ${
                    isFeatured ? "text-gray-300" : "text-muted-foreground"
                  }`}
                >
                  {planData.headline}
                </p>
                <div className="text-4xl font-bold mt-4">
                  {plan.price}zł
                  <span
                    className={`text-base font-normal ${
                      isFeatured ? "text-gray-400" : "text-muted-foreground"
                    }`}
                  >
                    {plan.unit}
                  </span>
                </div>
              </CardHeader>

              <CardContent
                className={`text-sm space-y-2 mt-2 ${
                  isFeatured ? "text-gray-300" : "text-muted-foreground"
                }`}
              >
                {planData.features.map((feature: string, i: number) => (
                  <p key={i}>
                    ✅{" "}
                    {feature.startsWith("Wszystko") ? (
                      <strong>{feature}</strong>
                    ) : (
                      feature
                    )}
                  </p>
                ))}
              </CardContent>

              <CardFooter>
                <Button
                  className="w-full"
                  variant={isFeatured ? "default" : "outline"}
                  {...(isFeatured
                    ? { className: "bg-white text-black hover:bg-gray-100" }
                    : {})}
                >
                  {t("purchase")}
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
