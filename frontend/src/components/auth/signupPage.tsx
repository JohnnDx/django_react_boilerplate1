"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { ForwardIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

import { useUserContext } from "@/contexts/userContext";
import { useSignUpWithPasswordMutation } from "@/queries/auth/login/useSignupWithPasswordMutation";
import { getSocialAuthInitUrl } from "@/queries/auth/login/useGetSocialAuthUrl";
import { parseError } from "@/utils/errors";
import useHandleLoginSuccess from "@/hooks/auth/usehandleLoginSuccess";

import { AFFILIATE_CODE_KEY, NEXT_ROUTE_KEY } from "@/utils/constants";
import { LoginProvider } from "./types";

export default function SignupPage() {
  const { user } = useUserContext();
  const router = useRouter();
  const searchParams = useSearchParams();

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [emailVerificationRequired, setEmailVerificationRequired] = useState(false);

  const { handleLoginSuccess } = useHandleLoginSuccess();

  useEffect(() => {
    const nextRoute = searchParams.get(NEXT_ROUTE_KEY);
    if (user?.is_active) {
      router.push(nextRoute ?? "/dashboard");
    }
  }, [user]);

  const { mutate: signUpWithPassword } = useSignUpWithPasswordMutation({
    onSuccess: async (token, verificationRequired) => {
      if (verificationRequired) {
        setEmailVerificationRequired(true);
        return;
      }
      await handleLoginSuccess(token);
    },
    onError: (error: any) => {
      toast.error(parseError(error));
    },
  });

  const handleSignup = async (provider: LoginProvider) => {
    if (provider === "google") {
      const nextRoute = searchParams.get(NEXT_ROUTE_KEY);
      const authUrl = await getSocialAuthInitUrl(nextRoute ?? "");
      router.push(authUrl);
      return;
    }

    if (!email || !firstName || !password) {
      toast.error("Please fill in all required fields.");
      return;
    }

    if (password !== password2) {
      toast.error("Passwords do not match.");
      return;
    }

    const affiliateCode = Cookies.get(AFFILIATE_CODE_KEY);
    signUpWithPassword({
      email,
      password,
      first_name: firstName,
      last_name: lastName,
      affiliateCode,
    });
  };

  return (
    <form
      className={cn("flex flex-col gap-6 w-full max-w-md mx-auto py-12 px-4")}
      onSubmit={(e) => {
        e.preventDefault();
        handleSignup("password");
      }}
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Create your account</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Get started by creating your free account
        </p>
      </div>

      {emailVerificationRequired ? (
        <div className="text-center space-y-4">
          <p className="text-muted-foreground">
            Please check your email to verify your account.
          </p>
          <Button type="button" onClick={() => handleSignup("password")}>
            <ForwardIcon className="mr-2 h-4 w-4" />
            Resend Verification Email
          </Button>
        </div>
      ) : (
        <>
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div>
              <Label htmlFor="password2">Confirm Password</Label>
              <Input
                id="password2"
                type="password"
                value={password2}
                onChange={(e) => setPassword2(e.target.value)}
                required
              />
            </div>
          </div>

          <Button type="submit" className="w-full">
            <ForwardIcon className="mr-2 h-4 w-4" />
            Sign Up
          </Button>

          <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
            <span className="bg-background text-muted-foreground relative z-10 px-2">
              Or continue with
            </span>
          </div>

          <Button
            variant="outline"
            className="w-full"
            type="button"
            onClick={() => handleSignup("google")}
          >
            <Image
              src="/icons/google.svg"
              height={20}
              width={20}
              alt="Login with Google"
              className="mr-2"
            />
            Sign up with Google
          </Button>
        </>
      )}

      <div className="text-center text-sm mt-4">
        Already have an account?{" "}
        <Link href="/login" className="underline underline-offset-4">
          Login
        </Link>
      </div>
    </form>
  );
}
