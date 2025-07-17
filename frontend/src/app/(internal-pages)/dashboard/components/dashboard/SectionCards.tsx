import { IconTrendingDown, IconTrendingUp } from "@tabler/icons-react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import clsx from "clsx"

export function SectionCards() {
  const cards = [
    {
      title: "Total Revenue",
      value: "$1,250.00",
      change: "+12.5%",
      icon: <IconTrendingUp className="size-4" />,
      trend: "up",
      description: "Compared to last month",
    },
    {
      title: "New Customers",
      value: "1,234",
      change: "-20%",
      icon: <IconTrendingDown className="size-4" />,
      trend: "down",
      description: "Drop from previous month",
    },
    {
      title: "Active Accounts",
      value: "45,678",
      change: "+8.2%",
      icon: <IconTrendingUp className="size-4" />,
      trend: "up",
      description: "Engaged users in past 30 days",
    },
    {
      title: "Growth Rate",
      value: "4.5%",
      change: "+4.5%",
      icon: <IconTrendingUp className="size-4" />,
      trend: "up",
      description: "Steady increase over time",
    },
  ]

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 ">
      {cards.map((card, i) => (
        <Card
          key={i}
          className="bg-gradient-to-br from-muted/20 to-background shadow-sm hover:shadow-md transition-shadow border"
        >
          <CardHeader className="pb-2">
            <CardDescription>{card.title}</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <CardTitle className="text-3xl font-bold tabular-nums">
                {card.value}
              </CardTitle>
              <Badge
                variant="outline"
                className={clsx("text-xs px-2 py-1", {
                  "text-green-700 border-green-600/40 bg-green-500/10": card.trend === "up",
                  "text-red-700 border-red-600/40 bg-red-500/10": card.trend === "down",
                })}
              >
                <span className="flex items-center gap-1">
                  {card.icon}
                  {card.change}
                </span>
              </Badge>
            </div>
            <span className="text-sm text-muted-foreground">{card.description}</span>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
