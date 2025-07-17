'use client';

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const sourceData = [
  { source: 'Google Ads', visitors: 12432, conversions: 942 },
  { source: 'Meta Ads', visitors: 10239, conversions: 721 },
  { source: 'Organic Search', visitors: 8352, conversions: 593 },
  { source: 'Referral', visitors: 4021, conversions: 189 },
  { source: 'Email Campaign', visitors: 2890, conversions: 244 },
];

export function SourceBreakdownTable() {
  return (
    <div className="rounded-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Source</TableHead>
            <TableHead>Visitors</TableHead>
            <TableHead>Conversions</TableHead>
            <TableHead>Conversion Rate</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sourceData.map((row, i) => (
            <TableRow key={i}>
              <TableCell className="font-medium">{row.source}</TableCell>
              <TableCell>{row.visitors}</TableCell>
              <TableCell>{row.conversions}</TableCell>
              <TableCell>
                {((row.conversions / row.visitors) * 100).toFixed(1)}%
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
