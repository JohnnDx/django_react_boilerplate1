"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useCookies } from "react-cookie"
import { useRouter, useSearchParams } from "next/navigation"
import toast from "react-hot-toast"
import { ForwardIcon } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

import { LoginProvider } from "./types"
import { NEXT_ROUTE_KEY, TokenKey } from "../../utils/constants"
import { useUserContext } from "../../contexts/userContext"
import useHandleLoginSuccess from "../../hooks/auth/usehandleLoginSuccess"
import { useLoginWithPasswordMutation } from "../../queries/auth/login/useLoginWithPasswordMutation"
import { parseError } from "../../utils/errors"
import { getSocialAuthInitUrl } from "../../queries/auth/login/useGetSocialAuthUrl"
import { cn } from "@/lib/utils"

export default function LoginPage() {
  const [cookies, setCookie] = useCookies([TokenKey])
  const { user, setUser } = useUserContext()
  const router = useRouter()
  const searchParams = useSearchParams()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { handleLoginSuccess } = useHandleLoginSuccess()

  const {
    mutate: loginWithPassword,
    isLoading: isLoadingCheckoutSession,
  } = useLoginWithPasswordMutation({
    onSuccess: async (token, verificationRequired) => {
      if (verificationRequired) {
        toast.error("Please check your email for verification")
        return
      }
      await handleLoginSuccess(token)
    },
    onError: (error: any) => {
      toast.error(parseError(error))
    },
  })

  useEffect(() => {
    if (user?.is_active) {
      router.push("/dashboard")
    }
  }, [router, user])

  const handleLogin = async (provider: LoginProvider) => {
    switch (provider) {
      case "password":
        if (!email || !password) {
          toast.error("Please enter both email and password")
          return
        }
        loginWithPassword({ email, password })
        break
      case "google":
        const nextRoute = searchParams.get(NEXT_ROUTE_KEY)
        const authUrl = await getSocialAuthInitUrl(nextRoute ?? "")
        router.push(authUrl)
        break
    }
  }

  return (
    <form className={cn("flex flex-col gap-6 w-full max-w-md mx-auto py-12 px-4")} onSubmit={(e) => { e.preventDefault(); handleLogin("password") }}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Login to your account</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Enter your email below to login to your account
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-3">
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
        <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            <Link href="/forgot-password" className="ml-auto text-sm underline-offset-4 hover:underline">
              Forgot your password?
            </Link>
          </div>
          <Input
            id="password"
            type="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <Button type="submit" className="w-full">
          <ForwardIcon className="mr-2 h-4 w-4" />
          Login
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
          onClick={() => handleLogin("google")}
        >
          <Image
            src="/icons/google.svg"
            height={20}
            width={20}
            alt="Login with Google"
            className="mr-2"
          />
          Login with Google
        </Button>
      </div>
      <div className="text-center text-sm">
        Don&apos;t have an account?{" "}
        <Link href="/sign-up" className="underline underline-offset-4">
          Sign up
        </Link>
      </div>
    </form>
  )
}
