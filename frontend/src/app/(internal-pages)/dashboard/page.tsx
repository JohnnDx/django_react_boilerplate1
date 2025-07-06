"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import toast from "react-hot-toast";
import { CheckCircle2Icon } from "lucide-react";

import { useUserContext } from "@/contexts/userContext";
import { useSubmitGithubUsernameWithMutation } from "@/queries/communication/SubmitGithubUserName";
import { parseError } from "@/utils/errors";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    heading: "Next.js and Django Ninja Integration",
    description:
      "Seamlessly combine the performance of Next.js with Django Ninja for lightning-fast, modern SaaS projects.",
  },
  {
    heading: "Optimized for SaaS Ventures",
    description:
      "Launch faster with a boilerplate specifically tailored for SaaS, giving you production-ready tooling out of the box.",
  },
  {
    heading: "Fast and Efficient Development",
    description:
      "Skip the boilerplate grunt work. Focus on your product with this efficient Next.js + Django starter kit.",
  },
];

const Dashboard = () => {
  const { user, subscription: currentSubscription } = useUserContext();
  const [disabled, setDisabled] = useState(false);
  const [githubUsername, setGithubUsername] = useState("");

  const { mutate: submitGithubUsername } = useSubmitGithubUsernameWithMutation({
    onSuccess: async (message) => {
      toast.success(message);
    },
    onError: (error: any) => {
      toast.error(parseError(error));
      setDisabled(false);
    },
  });

  useEffect(() => {
    if (user?.github_username) {
      setDisabled(true);
      setGithubUsername(user.github_username);
    }
  }, [user]);

  const handleSubmit = () => {
    setDisabled(true);
    submitGithubUsername({ github_username: githubUsername });
  };

  return (
    // <></>
    <div className="max-w-7xl mx-auto p-6 space-y-10">
      {currentSubscription ? (
        <Card className="border-l-4 border-pink-500">
          <CardHeader>
            <CardTitle>Activation Step</CardTitle>
            <CardDescription>
              Enter your GitHub username to receive access to your private repo.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Input
              type="text"
              placeholder="GitHub username"
              disabled={disabled}
              value={githubUsername}
              onChange={(e) => setGithubUsername(e.target.value)}
            />
            <Button
              disabled={disabled}
              onClick={handleSubmit}
            >
              {!disabled ? "Submit" : "Accessed"}
            </Button>
          </CardContent>
        </Card>
      ) : (
        <section className="text-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">Unleash Your Business</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Build modern SaaS products faster with our ready-to-use starter kit. Everything you need, nothing you don't.
            </p>
          </div>

          <div className="my-10">
            <Badge className="bg-muted text-foreground px-3 py-1 text-sm rounded-full">
              Best Features
            </Badge>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              {features.map((feature, idx) => (
                <Card key={idx} className="bg-background">
                  <CardHeader className="flex flex-row items-start gap-3">
                    <CheckCircle2Icon className="text-green-600 mt-1" />
                    <div>
                      <CardTitle className="text-lg font-semibold">
                        {feature.heading}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground">
                        {feature.description}
                      </CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <Button asChild>
              <Link href="/pricing">Buy Now</Link>
            </Button>
          </div>
        </section>
      )}
    </div>
  );
};

export default Dashboard;
