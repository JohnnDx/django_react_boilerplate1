'use client'

import { useTranslations } from 'next-intl'
import { useState } from 'react'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'

export default function Page() {
  const t = useTranslations('notifications')

  const [settings, setSettings] = useState({
    newMessages: 'in-app',
    accountActivity: 'email',
    mentions: 'all',
    appUpdates: 'none',
    dailySummary: 'email',
    weeklyReport: 'in-app',
    billingSummary: 'email',
    eventReminders: 'all',
  })

  const options = [
    { label: t('options.all'), value: 'all' },
    { label: t('options.email'), value: 'email' },
    { label: t('options.inApp'), value: 'in-app' },
    { label: t('options.none'), value: 'none' },
  ]

  return (
    <div className="p-6 space-y-8 max-w-4xl">
      <div>
        <h1 className="text-2xl font-semibold">{t('title')}</h1>
        <p className="text-muted-foreground mt-2">{t('description')}</p>
      </div>

      {/* General Notifications */}
      <Card>
        <CardHeader>
          <CardTitle>{t('generalTitle')}</CardTitle>
          <p className="text-sm text-muted-foreground">{t('generalDescription')}</p>
        </CardHeader>
        <CardContent className="space-y-6">
          <NotificationSetting
            label={t('general.newMessages')}
            name="newMessages"
            value={settings.newMessages}
            onChange={(val) => setSettings((prev) => ({ ...prev, newMessages: val }))}
            options={options}
          />
          <NotificationSetting
            label={t('general.accountActivity')}
            name="accountActivity"
            value={settings.accountActivity}
            onChange={(val) => setSettings((prev) => ({ ...prev, accountActivity: val }))}
            options={options}
          />
          <NotificationSetting
            label={t('general.mentions')}
            name="mentions"
            value={settings.mentions}
            onChange={(val) => setSettings((prev) => ({ ...prev, mentions: val }))}
            options={options}
          />
          <NotificationSetting
            label={t('general.appUpdates')}
            name="appUpdates"
            value={settings.appUpdates}
            onChange={(val) => setSettings((prev) => ({ ...prev, appUpdates: val }))}
            options={options}
          />
        </CardContent>
      </Card>

      {/* Summary Notifications */}
      <Card>
        <CardHeader>
          <CardTitle>{t('summaryTitle')}</CardTitle>
          <p className="text-sm text-muted-foreground">{t('summaryDescription')}</p>
        </CardHeader>
        <CardContent className="space-y-6">
          <NotificationSetting
            label={t('summary.dailySummary')}
            name="dailySummary"
            value={settings.dailySummary}
            onChange={(val) => setSettings((prev) => ({ ...prev, dailySummary: val }))}
            options={options}
          />
          <NotificationSetting
            label={t('summary.weeklyReport')}
            name="weeklyReport"
            value={settings.weeklyReport}
            onChange={(val) => setSettings((prev) => ({ ...prev, weeklyReport: val }))}
            options={options}
          />
          <NotificationSetting
            label={t('summary.billingSummary')}
            name="billingSummary"
            value={settings.billingSummary}
            onChange={(val) => setSettings((prev) => ({ ...prev, billingSummary: val }))}
            options={options}
          />
          <NotificationSetting
            label={t('summary.eventReminders')}
            name="eventReminders"
            value={settings.eventReminders}
            onChange={(val) => setSettings((prev) => ({ ...prev, eventReminders: val }))}
            options={options}
          />
        </CardContent>
      </Card>
    </div>
  )
}

function NotificationSetting({
  label,
  name,
  value,
  onChange,
  options,
}: {
  label: string
  name: string
  value: string
  onChange: (val: string) => void
  options: { label: string; value: string }[]
}) {
  return (
    <div>
      <Label className="mb-2 block font-medium">{label}</Label>
      <RadioGroup className="flex flex-wrap gap-4" value={value} onValueChange={onChange}>
        {options.map((option) => (
          <div key={option.value} className="flex items-center space-x-2">
            <RadioGroupItem value={option.value} id={`${name}-${option.value}`} />
            <Label htmlFor={`${name}-${option.value}`}>{option.label}</Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  )
}
