"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function Page404() {
  const router = useRouter();

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="text-center space-y-4 px-4">
        <h1 className="text-[7rem] font-bold leading-tight">404</h1>
        <span className="text-xl font-medium">Oops! Page Not Found!</span>
        <p className="text-muted-foreground">
          It seems like the page you&apos;re looking for <br />
          does not exist or might have been removed.
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
