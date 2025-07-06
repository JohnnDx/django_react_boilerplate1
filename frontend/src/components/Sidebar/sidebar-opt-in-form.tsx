import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { SidebarInput } from "@/components/ui/sidebar"

export function SidebarOptInForm() {
  return (
    <Card className="gap-2 py-2 shadow-none">
      <CardHeader className="px-2">
        <CardTitle className="text-sm">You're on free plan</CardTitle>
        <CardDescription>
          Opt-in to receive updates and news about the sidebar.
        </CardDescription>
      </CardHeader>
      <CardContent className="px-2">
        <form>
          <div className="grid gap-2.5">
            {/* <SidebarInput type="email" placeholder="Email" /> */}
            <Button
              className="bg-sidebar-primary text-sidebar-primary-foreground w-full shadow-none"
              size="sm"
            >
              Upgrade
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
