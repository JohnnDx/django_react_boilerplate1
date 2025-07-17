'use client'

import {
  Archive,
  ArchiveX,
  ArrowLeft,
  Clock,
  Forward,
  MoreVertical,
  Reply,
  ReplyAll,
  Trash2
} from 'lucide-react'
import { addDays, addHours, format, nextSaturday } from 'date-fns'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Textarea } from '@/components/ui/textarea'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { Calendar } from '@/components/ui/calendar'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { useMemo } from 'react'
import { useTranslations } from 'next-intl'

import { Mail } from '@/constants/mails'

interface MailDisplayProps {
  mail?: Mail
  onClose: () => void
}

export function MailDisplay({ mail, onClose }: MailDisplayProps) {
  const t = useTranslations('mailbox.display')
  const today = new Date()
  const fallback = useMemo(() => mail?.name?.split(' ').map(s => s[0]).join(''), [mail])

  if (!mail) {
    return <div className="p-8 text-center text-muted-foreground">{t('noMessage')}</div>
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center p-2">
        <div className="flex items-center gap-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" onClick={onClose}>
                <ArrowLeft className="size-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>{t('back')}</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon">
                <Archive className="size-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>{t('archive')}</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon">
                <ArchiveX className="size-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>{t('junk')}</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon">
                <Trash2 className="size-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>{t('trash')}</TooltipContent>
          </Tooltip>

          <Separator orientation="vertical" className="mx-1 h-6" />

          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="icon">
                <Clock className="size-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="flex w-full p-0">
              <div className="flex flex-col gap-2 border-r px-2 py-4 min-w-[250px]">
                <div className="px-4 text-sm font-medium">{t('snoozeUntil')}</div>
                {['laterToday', 'tomorrow', 'weekend', 'nextWeek'].map((key, idx) => {
                  const time = [
                    addHours(today, 4),
                    addDays(today, 1),
                    nextSaturday(today),
                    addDays(today, 7)
                  ][idx]
                  return (
                    <Button key={key} variant="ghost" className="justify-start font-normal">
                      {t(`snooze.${key}`)}
                      <span className="ml-auto text-muted-foreground">
                        {format(time, 'E, h:mm b')}
                      </span>
                    </Button>
                  )
                })}
              </div>
              <div className="p-2">
                <Calendar />
              </div>
            </PopoverContent>
          </Popover>
        </div>

        <div className="ml-auto flex items-center gap-2">
          {[Reply, ReplyAll, Forward].map((Icon, i) => (
            <Tooltip key={i}>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Icon className="size-4" />
                </Button>
              </TooltipTrigger>
              {/* <TooltipContent>{t(Icon.name.toLowerCase())}</TooltipContent> */}
              <TooltipContent>{Icon.name}</TooltipContent>
            </Tooltip>
          ))}
        </div>

        <Separator orientation="vertical" className="mx-2 h-6" />
        <Button variant="ghost" size="icon">
          <MoreVertical className="size-4" />
        </Button>
      </div>

      <Separator />

      <div className="flex items-start p-4 text-sm">
        <Avatar>
          <AvatarFallback>{fallback}</AvatarFallback>
        </Avatar>
        <div className="ml-4 grid gap-1">
          <div className="font-semibold">{mail.name}</div>
          <div className="text-xs">{mail.subject}</div>
          <div className="text-xs">
            <span className="font-medium">{t('replyTo')}:</span> {mail.email}
          </div>
        </div>
        <div className="ml-auto text-xs text-muted-foreground">
          {format(new Date(mail.date), 'PPpp')}
        </div>
      </div>

      <Separator />
      <div className="flex-1 whitespace-pre-wrap p-4 text-sm">{mail.text}</div>
      <Separator />

      <div className="p-4">
        <form className="grid gap-4">
          <Textarea placeholder={`${t('reply')} ${mail.name}...`} className="p-4" />
          <div className="flex items-center">
            <Label htmlFor="mute" className="flex items-center gap-2 text-xs font-normal">
              <Switch id="mute" aria-label={t('mute')} />
              {t('mute')}
            </Label>
            <Button type="button" size="sm" className="ml-auto">
              {t('send')}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
