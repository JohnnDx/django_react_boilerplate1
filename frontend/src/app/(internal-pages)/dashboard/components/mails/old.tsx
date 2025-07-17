'use client'

import { useMemo, useState } from 'react'
import { MailList } from './MailList'
import { MailDisplay } from './MailDisplay'
import { mails } from '@/constants/mails'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Separator } from '@/components/ui/separator'
import { Search } from 'lucide-react'

export default function MailPage() {
  const [selectedMail, setSelectedMail] = useState<string | undefined>()
  const [searchValue, setSearchValue] = useState('')

  const filteredMails = useMemo(() => {
    const q = searchValue.toLowerCase().trim()
    return mails.filter(
      mail =>
        mail.name.toLowerCase().includes(q) ||
        mail.email.toLowerCase().includes(q) ||
        mail.subject.toLowerCase().includes(q) ||
        mail.text.toLowerCase().includes(q)
    )
  }, [searchValue])

  const unreadMails = useMemo(() => filteredMails.filter(m => !m.read), [filteredMails])

  const selectedMailData = useMemo(() => mails.find(m => m.id === selectedMail), [selectedMail])

  return (
    <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-4 h-[calc(100dvh-60px)] p-4">
      {/* Left Column: Mail List & Search */}
      <div className="flex flex-col border rounded-md overflow-hidden">
        <div className="bg-background/95 p-4 border-b">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 size-4 text-muted-foreground" />
            <Input
              value={searchValue}
              onChange={e => setSearchValue(e.target.value)}
              placeholder="Search mail..."
              className="pl-8"
            />
          </div>
        </div>
        <Tabs defaultValue="all">
          <div className="flex justify-between items-center px-4 py-2 border-b">
            <h2 className="font-semibold text-lg">Inbox</h2>
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="unread">Unread</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="all">
            <MailList
              items={filteredMails}
              selectedMail={selectedMail}
              setSelectedMail={setSelectedMail}
            />
          </TabsContent>
          <TabsContent value="unread">
            <MailList
              items={unreadMails}
              selectedMail={selectedMail}
              setSelectedMail={setSelectedMail}
            />
          </TabsContent>
        </Tabs>
      </div>

      {/* Right Column: Mail Display */}
      <div className="border rounded-md overflow-hidden">
        <MailDisplay mail={selectedMailData} onClose={() => setSelectedMail(undefined)} />
      </div>
    </div>
  )
}
