'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Pie,
  PieChart,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from 'recharts'

const data = [
  { name: 'Google Ads', value: 520 },
  { name: 'Facebook Ads', value: 430 },
  { name: 'Organic Search', value: 280 },
  { name: 'Email', value: 160 },
]

const COLORS = ['#6366f1', '#10b981', '#facc15', '#f43f5e']

export function AttributionPieChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Attribution Breakdown</CardTitle>
        <CardDescription>How your conversions are distributed by channel</CardDescription>
      </CardHeader>
      <CardContent className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={90}
              label
            >
              {data.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend verticalAlign="bottom" height={36} />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
