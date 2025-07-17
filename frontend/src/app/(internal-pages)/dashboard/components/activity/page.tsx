'use client';

import {
  ActivityIcon,
  CheckCircleIcon,
  LogInIcon,
  SettingsIcon,
  Trash2Icon,
  UserPlusIcon,
} from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Badge } from '@/components/ui/badge';

const activities = [
  {
    icon: <LogInIcon className="h-4 w-4 text-blue-500" />,
    titleKey: 'login',
    user: 'Alice Johnson',
    time: '2 minutes ago',
    status: 'success',
  },
  {
    icon: <SettingsIcon className="h-4 w-4 text-yellow-500" />,
    titleKey: 'teamSettingsChanged',
    user: 'Bob Smith',
    time: '1 hour ago',
    status: 'warning',
  },
  {
    icon: <UserPlusIcon className="h-4 w-4 text-green-500" />,
    titleKey: 'userInvited',
    user: 'Carol Lee',
    time: '3 hours ago',
    status: 'success',
  },
  {
    icon: <Trash2Icon className="h-4 w-4 text-red-500" />,
    titleKey: 'projectDeleted',
    user: 'David King',
    time: 'Yesterday',
    status: 'error',
  },
  {
    icon: <CheckCircleIcon className="h-4 w-4 text-emerald-500" />,
    titleKey: 'onboardingCompleted',
    user: 'Emma Wilson',
    time: '2 days ago',
    status: 'success',
  },
];

export default function ActivityPage() {
  const t = useTranslations('activity');

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">{t('title')}</h1>
        <p className="text-muted-foreground mt-2">{t('description')}</p>
      </div>

      <div className="space-y-4">
        {activities.map((item, i) => (
          <div key={i} className="flex items-start gap-4 rounded-md border p-4">
            <div className="shrink-0 rounded-full bg-muted p-2">{item.icon}</div>
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <p className="font-medium">{t(`items.${item.titleKey}`)}</p>
                <span className="text-xs text-muted-foreground">{item.time}</span>
              </div>
              <p className="text-sm text-muted-foreground">{item.user}</p>
            </div>
            {item.status === 'success' && <Badge variant="default">{t('status.success')}</Badge>}
            {item.status === 'warning' && <Badge variant="secondary">{t('status.warning')}</Badge>}
            {item.status === 'error' && <Badge variant="destructive">{t('status.error')}</Badge>}
          </div>
        ))}
      </div>
    </div>
  );
}
