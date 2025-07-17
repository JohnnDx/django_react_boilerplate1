"use client"

import { OnboardingStepper } from "@/components/onboarding/OnboardingStepper"

export default function OnboardingPage() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-12 bg-background">
      <div className="w-full max-w-2xl">
        <OnboardingStepper />
      </div>
    </div>
  )
}
