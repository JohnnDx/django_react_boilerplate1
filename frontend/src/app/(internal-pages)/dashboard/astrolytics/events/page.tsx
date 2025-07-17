'use client';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { DataTable } from '@/components/custom/table/DataTable';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

const events = [
  {
    id: 'evt_01',
    type: 'Page View',
    user: 'jan@astrolytics.com',
    source: 'Google Ads',
    timestamp: '2025-07-10 10:12',
  },
  {
    id: 'evt_02',
    type: 'Form Submit',
    user: 'ola@astrolytics.com',
    source: 'Meta Pixel',
    timestamp: '2025-07-10 10:15',
  },
  {
    id: 'evt_03',
    type: 'Purchase',
    user: 'marek@astrolytics.com',
    source: 'Email',
    timestamp: '2025-07-10 10:18',
  },
  {
    id: 'evt_04',
    type: 'Click',
    user: 'ania@astrolytics.com',
    source: 'Organic',
    timestamp: '2025-07-10 10:20',
  },
];

export default function EventsPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Tracked Events</h1>
          <p className="text-muted-foreground">
            Real-time overview of all user interactions and tracked signals.
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Create Event
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Events</CardTitle>
          <CardDescription>Captured from your connected sources</CardDescription>
        </CardHeader>
        <CardContent>
          <DataTable
            columns={[
              {
                accessorKey: 'type',
                header: 'Event Type',
                cell: ({ row }) => (
                  <Badge variant="outline">{row.original.type}</Badge>
                ),
              },
              {
                accessorKey: 'user',
                header: 'User Email',
              },
              {
                accessorKey: 'source',
                header: 'Source',
              },
              {
                accessorKey: 'timestamp',
                header: 'Timestamp',
              },
            ]}
            data={events}
            searchPlaceholder="Search events..."
          />
        </CardContent>
      </Card>
    </div>
  );
}
