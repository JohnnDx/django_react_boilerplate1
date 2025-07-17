// app/(internal-pages)/unauthorized/page.tsx

"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function UnauthorizedPage() {
  const router = useRouter();

  return (
    <div className="h-screen flex items-center justify-center p-6">
      <div className="text-center space-y-4 max-w-md mx-auto">
        <h1 className="text-[7rem] font-bold leading-tight">401</h1>
        <span className="font-medium text-lg">Unauthorized Access</span>
        <p className="text-muted-foreground">
          Please log in with the appropriate credentials <br /> to access this resource.
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
