'use client'

import { formatDistanceToNow } from 'date-fns'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'
import { cn } from '@/lib/utils'
import { Mail } from '@/constants/mails'
import { Dispatch, SetStateAction } from 'react'
import { useTranslations } from 'next-intl' // or your i18n hook

interface MailListProps {
  items: Mail[]
  selectedMail: string | undefined
  setSelectedMail: Dispatch<SetStateAction<string | undefined>>
}

export function MailList({ items, selectedMail, setSelectedMail }: MailListProps) {
  const t = useTranslations('mailbox.tags')

  const getBadgeVariantFromLabel = (label: string) => {
    if (label.toLowerCase() === 'work') return 'default'
    if (label.toLowerCase() === 'personal') return 'outline'
    return 'secondary'
  }

  return (
    <ScrollArea className="h-[calc(100dvh-72px-56px-3rem-53px)]">
      <div className="flex flex-col gap-2 p-4 pt-0">
        {items.map(item => (
          <button
            key={item.id}
            onClick={() => setSelectedMail(item.id)}
            className={cn(
              'flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent',
              selectedMail === item.id && 'bg-muted'
            )}
          >
            <div className="w-full flex flex-col gap-1">
              <div className="flex items-center">
                <div className="flex items-center gap-2">
                  <div className="font-semibold">{item.name}</div>
                  {!item.read && <span className="h-2 w-2 rounded-full bg-blue-600" />}
                </div>
                <div className={cn(
                  'ml-auto text-xs',
                  selectedMail === item.id ? 'text-foreground' : 'text-muted-foreground'
                )}>
                  {formatDistanceToNow(new Date(item.date), { addSuffix: true })}
                </div>
              </div>
              <div className="text-xs font-medium">{item.subject}</div>
            </div>
            <div className="line-clamp-2 text-xs text-muted-foreground">
              {item.text.substring(0, 300)}
            </div>
            <div className="flex items-center gap-2">
              {item.labels.map(label => (
                <Badge key={label} variant={getBadgeVariantFromLabel(label)}>
                  {t(label)}
                </Badge>
              ))}
            </div>
          </button>
        ))}
      </div>
    </ScrollArea>
  )
}
