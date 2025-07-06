// components/referral/refferalLink.tsx
"use client";
import { useState } from "react";
import { Facebook, Instagram, Twitter, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

export default function ShareReferralLink({ refferalLink = "" }: { refferalLink?: string }) {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(refferalLink);
    setCopied(true);
    toast({ title: "Copied!", description: "Your referral link has been copied." });
    setTimeout(() => setCopied(false), 2000);
  };

  const socials = [
    {
      name: "Facebook",
      href: `https://facebook.com/sharer/sharer.php?u=${encodeURIComponent(refferalLink)}`,
      icon: Facebook,
    },
    {
      name: "Twitter",
      href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(refferalLink)}`,
      icon: Twitter,
    },
    {
      name: "Instagram",
      href: `https://www.instagram.com/?url=${encodeURIComponent(refferalLink)}`,
      icon: Instagram,
    },
  ];

  return (
    <section className="py-12 max-w-5xl mx-auto space-y-6 text-center">
      <h2 className="text-3xl font-semibold">Share Your Link</h2>
      <p className="text-muted-foreground max-w-2xl mx-auto">
        Invite your network and get rewarded for every sign-up or purchase.
      </p>
      <Card className="text-left">
        <CardHeader>
          <CardTitle>Your Referral Link</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col md:flex-row items-center gap-4">
          <Input readOnly value={refferalLink} className="flex-1" />
          <Button onClick={handleCopyLink} variant="outline">
            {copied ? (
              <>
                <Check className="w-4 h-4 mr-2 text-green-600" />
                Copied
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 mr-2" />
                Copy
              </>
            )}
          </Button>
          <div className="flex gap-2">
            {socials.map(({ name, href, icon: Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noreferrer"
                title={`Share on ${name}`}
                className="w-9 h-9 flex items-center justify-center bg-pink-100 text-pink-600 hover:bg-pink-200 rounded-full transition"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
