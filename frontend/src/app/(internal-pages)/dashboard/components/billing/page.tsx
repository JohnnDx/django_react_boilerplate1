'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Page() {
  const t = useTranslations('billing');

  return (
    <div className="p-6 space-y-8 max-w-3xl">
      <div>
        <h1 className="text-2xl font-semibold">{t('title')}</h1>
        <p className="text-muted-foreground mt-2">{t('description')}</p>
      </div>

      {/* Plan Info */}
      <Card className="bg-muted/30 ring-1 ring-border shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            {t('plan.title')}
            <Badge variant="outline">{t('plan.free')}</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">{t('plan.upgradeNotice')}</p>
          <div className="flex justify-end">
            <Button>{t('plan.viewPlans')}</Button>
          </div>
        </CardContent>
      </Card>

      {/* Card Details */}
      <Card>
        <CardHeader>
          <CardTitle>{t('card.title')}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">{t('card.description')}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="cardName">{t('card.name')}</Label>
              <Input id="cardName" defaultValue="Kathy Pacheco" />
            </div>
            <div>
              <Label htmlFor="cardNumber">{t('card.number')}</Label>
              <Input id="cardNumber" defaultValue="1414 1412 4141 1422" />
            </div>
            <div>
              <Label htmlFor="expiry">{t('card.expiry')}</Label>
              <Input id="expiry" defaultValue="05/2025" />
            </div>
            <div>
              <Label htmlFor="cvv">{t('card.cvv')}</Label>
              <Input id="cvv" defaultValue="•••" type="password" />
            </div>
          </div>

          <div className="flex justify-end">
            <Button className="mt-4">{t('card.save')}</Button>
          </div>
        </CardContent>
      </Card>

      {/* Client Details */}
      <Card>
        <CardHeader>
          <CardTitle>{t('client.title')}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">{t('client.description')}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="fullName">{t('client.fullName')}</Label>
              <Input id="fullName" defaultValue="Kathy Pacheco" />
            </div>
            <div>
              <Label htmlFor="email">{t('client.email')}</Label>
              <Input id="email" defaultValue="kathy_pacheco@mail.com" />
            </div>
            <div>
              <Label htmlFor="country">{t('client.country')}</Label>
              <Input id="country" defaultValue="United States" />
            </div>
            <div>
              <Label htmlFor="city">{t('client.city')}</Label>
              <Input id="city" defaultValue="Providence" />
            </div>
            <div className="md:col-span-2">
              <Label htmlFor="address">{t('client.address')}</Label>
              <Input id="address" defaultValue="2825 Winding Way, Providence, RI 02908" />
            </div>
            <div>
              <Label htmlFor="state">{t('client.state')}</Label>
              <Input id="state" defaultValue="Rhode Island" />
            </div>
          </div>

          <div className="flex justify-end">
            <Button className="mt-4">{t('card.save')}</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
