"use client";
import clsx from "clsx";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useMemo, useState } from "react";
import { z } from "zod";

const SignupFormSchema = z
  .object({
    email: z.string().describe("Email").email({ message: "Invalid Email" }),
    password: z
      .string()
      .describe("Password")
      .min(6, "Password must be minimum 6 characters"),
    confirmPassword: z
      .string()
      .describe("Confirm Password")
      .min(6, "Password must be minimum 6 characters "),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't Match.",
    path: ["confirmPassword"],
  });
const Signup = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [submitError, setSubmitError] = useState("");
  const [conformation, setConformation] = useState(false);
  const constExchangeError = useMemo(() => {
    if (!searchParams) return "";
    return searchParams.get("error_description");
  }, [searchParams]);

  const conformationAndErrorStyles = useMemo(
    () =>
      clsx("bg-primary", {
        "bg-red-500/10": constExchangeError,
        "border-red-500/50": constExchangeError,
        "text-red-700": constExchangeError,
      }),
    []
  );

  return <div>Signup</div>;
};

export default Signup;
