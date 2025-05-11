"use client";
import React, { useEffect, useState } from "react";
import { FormErrors, StepsProps } from "@/types/formTypes";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useFormData } from "@/context/SignupStepContext";
import StepButtons from "../StepButtons";
import { useForm } from "react-hook-form";
import { SignUpFormValues, signUpSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

type Props = {};

export default function AccountCreationStep({}: Props) {
  const router = useRouter();
  const { data, setData, isHydrated } = useFormData();
  const [isLoading, setIsLoading] = React.useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignUpFormValues>({
    defaultValues: data,
    resolver: zodResolver(signUpSchema),
  });

  useEffect(() => {
    if (!isHydrated) return;
    reset(data);
  }, [isHydrated, data, reset]);

  const onSubmit = handleSubmit(async (values: SignUpFormValues) => {
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 200));
    } catch (error) {
      console.error("Error during form submission:", error);
    } finally {
      setIsLoading(false);
      setData({ ...data, ...values });
      router.push("/signup/step-2");
    }
  });

  return !isHydrated ? (
    <div>Loading...</div>
  ) : (
    <form className="space-y-4" onSubmit={onSubmit}>
      <div>
        <Label htmlFor="email" className="block text-sm font-medium mb-2">
          Email Address
        </Label>
        <Input
          id="email"
          type="email"
          {...register("email")}
          className="w-full p-2 border rounded-md"
          placeholder="Enter your email address"
          // disabled={isLoading}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">
            {errors.email.message?.toString()}
          </p>
        )}
      </div>

      <div>
        <Label htmlFor="password" className="block text-sm font-medium mb-2">
          Password
        </Label>
        <Input
          id="password"
          type="password"
          {...register("password")}
          className="w-full p-2 border rounded-md"
          placeholder="Create a password"
          // disabled={isLoading}
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">
            {errors.password.message?.toString()}
          </p>
        )}
      </div>

      <div>
        <Label
          htmlFor="confirmPassword"
          className="block text-sm font-medium mb-2"
        >
          Confirm Password
        </Label>
        <Input
          id="confirmPassword"
          type="password"
          {...register("confirmPassword")}
          className="w-full p-2 border rounded-md"
          placeholder="Confirm your password"
          // disabled={isLoading}
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-sm mt-1">
            {errors.confirmPassword.message?.toString()}
          </p>
        )}
      </div>
      <StepButtons isLoading={isLoading} />
    </form>
  );
}
