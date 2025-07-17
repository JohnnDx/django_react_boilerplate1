"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { StepChooseAccount } from "./StepChooseAccount"
import { StepConnectTool } from "./StepConnectTool"
import { StepSetGoal } from "./StepSetGoal"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

const steps = [
  { id: 1, name: "Choose account type", component: StepChooseAccount },
  { id: 2, name: "Connect a tool", component: StepConnectTool },
  { id: 3, name: "Set your goal", component: StepSetGoal },
]

export function OnboardingStepper() {
  const [step, setStep] = useState(0)
  const router = useRouter()

  const CurrentStep = steps[step].component

  const handleNext = () => {
  if (step < steps.length - 1) {
    setStep((prev) => prev + 1)
  } else {
    toast.success("🎉 You're all set! Welcome aboard.")
    // Optional: add delay before navigating
    setTimeout(() => {
      router.push("/dashboard")
    }, 1000)
  }
}

  const handleBack = () => {
    if (step > 0) setStep((prev) => prev - 1)
  }

  return (
    <div className="space-y-6">
        <div className="flex flex-col gap-4 p-6 md:p-10">
         <div className="flex justify-center mt-4">
            <a href="/" className="flex items-center gap-3 text-2xl font-bold md:text-3xl">
                <div className="bg-primary text-primary-foreground flex size-10 md:size-12 items-center justify-center rounded-md shadow">
                {/* You can uncomment your icon here if needed */}
                {/* <GalleryVerticalEnd className="size-5 md:size-6" /> */}
                A
                </div>
                <span className="text-foreground tracking-tight">Acme</span>
            </a>
        </div>

        
      </div>
      <div>
        <h2 className="text-2xl font-bold">{steps[step].name}</h2>
        <Progress value={((step + 1) / steps.length) * 100} className="mt-2" />
      </div>

      <div className="mt-6">
        <CurrentStep />
      </div>

      <div className="mt-8 flex justify-between">
        <Button variant="outline" onClick={handleBack} disabled={step === 0}>
          Back
        </Button>
        <Button onClick={handleNext}>
          {step === steps.length - 1 ? "Finish" : "Continue"}
        </Button>
      </div>
    </div>
  )
}
