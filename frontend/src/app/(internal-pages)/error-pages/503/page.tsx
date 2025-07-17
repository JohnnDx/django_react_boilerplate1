"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function Page503() {
  const router = useRouter();

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="text-center space-y-4 px-4">
        <h1 className="text-[7rem] font-bold leading-tight">503</h1>
        <span className="text-xl font-medium">Website is under maintenance!</span>
        <p className="text-muted-foreground">
          The site is not available at the moment. <br />
          We'll be back online shortly.
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
