"use client";

import { useTranslations } from "next-intl";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const changelogEntries = [
  { version: "v1.3.0", date: "2025-07-10", key: "v1_3_0" },
  { version: "v1.2.0", date: "2025-07-05", key: "v1_2_0" },
  { version: "v1.1.0", date: "2025-06-28", key: "v1_1_0" },
  { version: "v1.0.0", date: "2025-06-15", key: "v1_0_0" },
];

export default function ChangelogPage() {
  const t = useTranslations("changelog");

  return (
    <div className="p-6">
      <div className="w-full max-w-2xl space-y-10">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{t("title")}</h1>
          <p className="text-muted-foreground mt-1">{t("subtitle")}</p>
        </div>

        {changelogEntries.map(({ version, date, key }) => {
          const entry = t.raw(`versions.${key}`);
          return (
            <div key={version} className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="text-xl font-semibold">{version}</div>
                <div className="flex gap-2">
                  <Badge variant="default">{entry.tag}</Badge>
                  <Badge variant="outline">{date}</Badge>
                </div>
              </div>

              <ul className="list-disc pl-6 space-y-1 text-sm text-muted-foreground">
                {entry.updates.map((update: string, i: number) => (
                  <li key={i}>{update}</li>
                ))}
              </ul>

              <Separator />
            </div>
          );
        })}
      </div>
    </div>
  );
}
