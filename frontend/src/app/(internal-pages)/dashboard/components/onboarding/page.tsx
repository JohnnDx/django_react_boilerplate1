// app/(dashboard)/onboarding/page.tsx

"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function OnboardingPage() {
  const router = useRouter()

  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-12 bg-background">
      <div className="w-full max-w-md space-y-6 text-center">
        <h1 className="text-3xl font-bold tracking-tight">Welcome to APP</h1>
        <p className="text-muted-foreground">
          Let’s get you set up in under 60 seconds. You can skip this anytime.
        </p>

        <div className="flex flex-col gap-4">
          <Button size="lg" onClick={() => router.push("/dashboard")}>
            Get Started
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => router.push("/dashboard")}
          >
            Skip for now
          </Button>
        </div>
      </div>
    </div>
  )
}
