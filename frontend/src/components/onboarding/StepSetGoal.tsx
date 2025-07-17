export function StepSetGoal() {
  return (
    <div className="space-y-4">
      <p className="text-muted-foreground">What's your main goal?</p>
      <input
        type="text"
        placeholder="e.g. Get 10 leads per day"
        className="w-full rounded-md border px-3 py-2"
      />
    </div>
  )
}
