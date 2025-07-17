'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

const campaigns = [
  {
    name: 'Summer Blitz',
    conversions: 421,
    cost: '$1,280',
    roi: '265%',
  },
  {
    name: 'Winter Warmup',
    conversions: 318,
    cost: '$920',
    roi: '242%',
  },
  {
    name: 'Black Friday Push',
    conversions: 1092,
    cost: '$3,210',
    roi: '330%',
  },
]

export function TopCampaignsTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Performing Campaigns</CardTitle>
        <CardDescription>Based on total attributed conversions</CardDescription>
      </CardHeader>
      <CardContent className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Campaign</TableHead>
              <TableHead>Conversions</TableHead>
              <TableHead>Cost</TableHead>
              <TableHead className="text-right">ROI</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {campaigns.map((campaign, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{campaign.name}</TableCell>
                <TableCell>{campaign.conversions}</TableCell>
                <TableCell>{campaign.cost}</TableCell>
                <TableCell className="text-right">{campaign.roi}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
