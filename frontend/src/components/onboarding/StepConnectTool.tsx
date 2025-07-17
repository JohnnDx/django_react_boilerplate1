export function StepConnectTool() {
  return (
    <div className="space-y-4">
      <p className="text-muted-foreground">Connect a tool to enhance your workflow:</p>
      <div className="flex flex-col gap-2">
        <label className="flex items-center gap-2">
          <input type="checkbox" />
          Connect Gmail
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" />
          Connect Meta Ads
        </label>
      </div>
    </div>
  )
}
