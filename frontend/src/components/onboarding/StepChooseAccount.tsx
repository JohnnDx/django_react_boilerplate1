export function StepChooseAccount() {
  return (
    <div className="space-y-4">
      <p className="text-muted-foreground">Select the type of account you're setting up:</p>
      <div className="flex gap-4">
        <button className="border rounded-lg p-4 w-full hover:bg-muted">Personal</button>
        <button className="border rounded-lg p-4 w-full hover:bg-muted">Business</button>
      </div>
    </div>
  )
}
