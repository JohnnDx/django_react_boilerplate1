"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { LoginProvider } from "./types";
import toast from "react-hot-toast";
import { useUserContext } from "../../contexts/userContext";
import { useRouter, useSearchParams } from "next/navigation";
import useHandleLoginSuccess from "../../hooks/auth/usehandleLoginSuccess";
import { useSignUpWithPasswordMutation } from "../../queries/auth/login/useSignupWithPasswordMutation";
import { parseError } from "../../utils/errors";
import { getSocialAuthInitUrl } from "../../queries/auth/login/useGetSocialAuthUrl";
import { AFFILIATE_CODE_KEY, NEXT_ROUTE_KEY } from "../../utils/constants";
import { ForwardIcon } from "lucide-react";
import Cookies from "js-cookie";
import { Button } from "@/components/ui/button";
import { Input } from "../ui/input";
export default function SignupPage() {
  const { user } = useUserContext();
  const router = useRouter();
  const searchParams = useSearchParams();

  const [email, setEmail] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [password2, setPassword2] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { handleLoginSuccess } = useHandleLoginSuccess();
  const [emailVerificationRequired, setEmailVerificationRequired] =
    useState<boolean>(false);

  useEffect(() => {
    const nextRoute = searchParams.get(NEXT_ROUTE_KEY);
    if (user?.is_active) {
      router.push("/dashboard");
      router.push(nextRoute ?? "/dashboard");
    }
  }, [user, router, searchParams]);

  const {
    mutate: signUpWithPassword,
    isLoading: isLoadingCheckoutSession,
    error: loginError,
  } = useSignUpWithPasswordMutation({
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
    switch (provider) {
      case "password":
        if (!email) {
          toast.error("Please enter password");
          return;
        }
        if (!password) {
          toast.error("Please enter password");
          return;
        }
        if (!firstName) {
          toast.error("Please enter FirstName");
          return;
        }
        if (password2 !== password) {
          toast.error("Please enter FirstName");
          return;
        }
        const affiliateCode = Cookies.get(AFFILIATE_CODE_KEY);
        signUpWithPassword({
          email: email,
          password: password,
          first_name: firstName,
          last_name: lastName,
          affiliateCode: affiliateCode,
        });
        break;
      case "google":
        const nextRoute = searchParams.get(NEXT_ROUTE_KEY);
        const authUrl = await getSocialAuthInitUrl(nextRoute ?? "");
        router.push(authUrl);
    }
  };

  return (
    <>
      <div className="flex flex-col overflow-hidden rounded-lg bg-white shadow-sm dark:bg-gray-800 dark:text-gray-100">
        <div className="w-full max-w-xl  text-center">
          <h2 className="text-md font-medium text-gray-500 md:pt-12 dark:text-gray-400">
            {emailVerificationRequired
              ? "Please check your email for verification link"
              : "Welcome, please sign in to your dashboard"}
          </h2>
        </div>
        {!emailVerificationRequired ? (
          <div className="grow px-5 pb-5 md:px-16  ">
            <div className="flex gap-2">
              <div className="space-y-1 my-2">
                <label htmlFor="email" className="text-sm font-medium">
                  First Name
                </label>
                <Input
                  autoComplete="email"
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                  type="email"
                  id="email"
                  name="email"
                  placeholder="First Name"
                  className=""
                />
              </div>

              <div className="space-y-1 my-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Last Name
                </label>
                <Input
                  autoComplete="email"
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Last Name"
                  className=""
                />
              </div>
            </div>
            <div className="space-y-1 my-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <Input
                autoComplete="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className=""
              />
            </div>
            <div className="space-y-1 my-2">
              <label htmlFor="password" className="text-sm font-medium">
                Password
              </label>
              <Input
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                autoComplete="current-password"
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                className=""
              />
            </div>

            <div className="space-y-1 my-2">
              <label htmlFor="password" className="text-sm font-medium">
                Confirm Password
              </label>
              <Input
                value={password2}
                onChange={(e) => {
                  setPassword2(e.target.value);
                }}
                autoComplete="current-password"
                type="password"
                id="password"
                name="password"
                placeholder="Confirm Password"
                className=""
              />
            </div>
            <div>
              <div className="mb-5 flex items-center justify-between space-x-2">
                <Link
                  href="/forgot-password"
                  className="inline-block text-sm font-medium text-pink-600 hover:text-pink-400 dark:text-pink-400 dark:hover:text-pink-300"
                >
                  Forgot Password?
                </Link>
              </div>
              <Button
                onClick={() => handleSignup("password")}
                className="inline-flex h-12 w-full"
              >
                <ForwardIcon className="hi-mini hi-arrow-uturn-right inline-block h-5 w-5 opacity-50" />

                <span>Sign In</span>
              </Button>
              {/* Divider: With Label */}
              <div className="my-5 flex items-center">
                <span
                  aria-hidden="true"
                  className="h-0.5 grow rounded bg-gray-100 dark:bg-gray-700/75"
                />
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                  or sign in with
                </span>
                <span
                  aria-hidden="true"
                  className="h-0.5 grow rounded bg-gray-100 dark:bg-gray-700/75"
                />
              </div>
              {/* END Divider: With Label */}
              <div className="grid grid-cols-1 gap-2">
                <Button
                  onClick={() => handleSignup("google")}
                  variant={"outline"}
                  type="button"
                  className="inline-flex h-12 "
                >
                  <Image
                    src="/icons/google.svg"
                    height={30}
                    width={30}
                    alt="Login with google"
                  />
                  <span>Google</span>
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div className="my-4 text-center mx-6">
            <Button
              onClick={() => handleSignup("password")}
              className=""
            >
              <ForwardIcon className="hi-mini hi-arrow-uturn-right inline-block h-5 w-5 opacity-50" />

              <span>Resend Verification Email</span>
            </Button>
          </div>
        )}
        <div className="grow bg-gray-50 p-5 text-center text-sm dark:bg-gray-700/50 md:px-16 text-gray-500">
          Already have an account?
          <Link
            href="/login"
            className="font-medium text-pink-600 hover:text-pink-400 dark:text-pink-400 dark:hover:text-pink-300"
          >
            Login
          </Link>
        </div>
      </div>
    </>
  );
}
