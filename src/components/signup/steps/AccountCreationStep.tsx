"use client";
import React, { useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useFormData } from "@/context/SignupStepContext";
import StepButtons from "../StepButtons";
import { useForm } from "react-hook-form";
import { SignUpFormValues, signUpSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { step1Endpoint } from "@/app/routes";
import Image from "next/image";

export default function AccountCreationStep() {
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
      router.push(step1Endpoint);
    }
  });

  return !isHydrated ? (
    <div>Loading...</div>
  ) : (
    <div className="flex flex-col lg:flex-row w-full justify-around rounded-lg">
      <div className=" w-full flex  items-center justify-center border-l border-r-0 rounded-l-lg">
        <Image
          src="/images/image2.png"
          alt="start"
          width={500}
          height={300}
          className="w-full h-full object-cover rounded-l-lg "
        />
      </div>
      <form className="space-y-4 p-5 mx-2 w-full lg:w-3/4 " onSubmit={onSubmit}>
        <div className="w-full flex items-start mb-6 ">
          <h1 className="text-2xl font-bold">Sign Up to get started</h1>
        </div>
        <div className="flex flex-col  justify-center  space-y-10">
          <div className="space-y-4">
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
              <Label
                htmlFor="password"
                className="block text-sm font-medium mb-2"
              >
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
          </div>
          <StepButtons isLoading={isLoading} />
        </div>
      </form>
    </div>
  );
}
