"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { useCookies } from "react-cookie";
import { ForwardIcon } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { TokenKey } from "@/utils/constants";
import { parseError } from "@/utils/errors";
import { useForgotPasswordMutation } from "@/queries/auth/useForgotPasswordMutation";
import { useResetPasswordMutation } from "@/queries/auth/useResetPasswordMutation";
import useHandleLoginSuccess from "@/hooks/auth/usehandleLoginSuccess";
import { useUserContext } from "@/contexts/userContext";

export default function ForgotPasswordPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [cookies, setCookie] = useCookies([TokenKey]);
  const { handleLoginSuccess } = useHandleLoginSuccess();

  const resetCode = searchParams.get("code");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const { mutate: forgotPassword } = useForgotPasswordMutation({
    onSuccess: () => {
      toast.success("Check your email for the reset link.");
    },
    onError: (error: any) => {
      toast.error(parseError(error));
    },
  });

  const { mutate: resetPassword } = useResetPasswordMutation({
    onSuccess: async (token: string) => {
      await handleLoginSuccess(token);
    },
    onError: (error: any) => {
      toast.error(parseError(error));
    },
  });

  const handleForgot = () => {
    if (!email) return toast.error("Please enter your email");
    forgotPassword({ email });
  };

  const handleReset = () => {
    if (!resetCode) {
      toast.error("Invalid reset link. Please request a new one.");
      return;
    }
    if (password !== password2) {
      toast.error("Passwords do not match");
      return;
    }
    resetPassword({ code: resetCode, password });
  };

  return (
    <form
      className={cn("flex flex-col gap-6 w-full max-w-md mx-auto py-12 px-4")}
      onSubmit={(e) => {
        e.preventDefault();
        resetCode ? handleReset() : handleForgot();
      }}
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">
          {resetCode ? "Reset Your Password" : "Forgot Password"}
        </h1>
        <p className="text-muted-foreground text-sm text-balance">
          {resetCode
            ? "Enter your new password below."
            : "Enter your email and we’ll send you a reset link."}
        </p>
      </div>

      {!resetCode ? (
        <>
          <div className="grid gap-4">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full">
            <ForwardIcon className="mr-2 h-4 w-4" />
            Send Reset Link
          </Button>
        </>
      ) : (
        <>
          <div className="grid gap-4">
            <Label htmlFor="password">New Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="grid gap-4">
            <Label htmlFor="confirm">Confirm Password</Label>
            <Input
              id="confirm"
              type="password"
              placeholder="********"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full">
            <ForwardIcon className="mr-2 h-4 w-4" />
            Reset Password
          </Button>
        </>
      )}

      <div className="text-center text-sm mt-4">
        {resetCode ? (
          <>
            Remembered your password?{" "}
            <Link href="/login" className="underline underline-offset-4">
              Login
            </Link>
          </>
        ) : (
          <>
            Don’t have an account?{" "}
            <Link href="/sign-up" className="underline underline-offset-4">
              Sign up
            </Link>
          </>
        )}
      </div>
    </form>
  );
}
