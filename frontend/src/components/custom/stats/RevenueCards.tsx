// components/custom/cards/RevenueCards.tsx

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const metrics = [
  {
    label: 'Total Revenue',
    value: '43,900 zl',
    change: '+12.8% MoM',
  },
  {
    label: 'Cost per Acquisition',
    value: '27.42 zl',
    change: '-4.5% MoM',
  },
  {
    label: 'Return on Ad Spend (ROAS)',
    value: '4.8x',
    change: '+9.3% MoM',
  },
];

export function RevenueCards() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {metrics.map((metric) => (
        <Card key={metric.label}>
          <CardHeader>
            <CardTitle className="text-base text-muted-foreground">
              {metric.label}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metric.value}</div>
            <div className="text-sm text-green-600 dark:text-green-400 mt-1">
              {metric.change}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
