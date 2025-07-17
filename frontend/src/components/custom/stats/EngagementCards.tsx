'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { BarChart3, MousePointerClick, Eye } from 'lucide-react'

export function EngagementCards() {
  const cards = [
    {
      title: 'Total Clicks',
      value: '32,408',
      description: '+12.8% from last week',
      icon: <MousePointerClick className="h-6 w-6 text-muted-foreground" />,
    },
    {
      title: 'Ad Impressions',
      value: '1.2M',
      description: '+3.1% from last week',
      icon: <Eye className="h-6 w-6 text-muted-foreground" />,
    },
    {
      title: 'Tracked Events',
      value: '6,902',
      description: '+8.4% from last week',
      icon: <BarChart3 className="h-6 w-6 text-muted-foreground" />,
    },
  ]

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {cards.map((card, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
            {card.icon}
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{card.value}</div>
            <p className="text-xs text-muted-foreground">{card.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
