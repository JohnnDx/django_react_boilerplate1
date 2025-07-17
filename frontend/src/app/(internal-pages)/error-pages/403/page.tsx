"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function Page403() {
  const router = useRouter();

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="text-center space-y-4 px-4">
        <h1 className="text-[7rem] font-bold leading-tight">403</h1>
        <span className="font-medium text-xl">Access Forbidden</span>
        <p className="text-muted-foreground">
          You don&apos;t have necessary permission <br />
          to view this resource.
        </p>
        <div className="mt-6 flex gap-4 justify-center">
          <Button variant="outline" onClick={() => router.back()}>
            Go Back
          </Button>
          <Button onClick={() => router.push("/")}>
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
}
