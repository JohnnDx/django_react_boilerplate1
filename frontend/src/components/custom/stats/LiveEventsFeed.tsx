'use client'

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Clock } from 'lucide-react'

const events = [
  { user: 'Anna W.', event: 'Clicked ad on Facebook', time: '2 minutes ago' },
  { user: 'John D.', event: 'Visited landing page', time: '5 minutes ago' },
  { user: 'Sara K.', event: 'Submitted email form', time: '12 minutes ago' },
  { user: 'Tomasz B.', event: 'Made a purchase', time: '20 minutes ago' },
]

export function LiveEventsFeed() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Live Events</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {events.map((e, i) => (
          <div key={i} className="flex items-center gap-4">
            <Avatar className="h-9 w-9">
              <AvatarFallback>{e.user[0]}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <p className="text-sm font-medium">{e.user}</p>
              <p className="text-sm text-muted-foreground">{e.event}</p>
            </div>
            <div className="flex items-center text-xs text-muted-foreground">
              <Clock className="mr-1 h-4 w-4" />
              {e.time}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
