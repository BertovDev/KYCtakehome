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
import { step1Endpoint } from "@/lib/routes";
import { motion } from "framer-motion";

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
      setIsLoading(false);
      setData({ ...data, ...values });
      router.push(step1Endpoint);
    } catch (error) {
      console.error("Error during form submission:", error);
    }
  });

  return !isHydrated ? (
    <div className="flex items-center justify-center text-zinc-300">
      Loading...
    </div>
  ) : (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col lg:flex-row w-full justify-around rounded-lg"
    >
      <form className="space-y-2  p-3 mx-2 w-full" onSubmit={onSubmit}>
        <div className="w-full flex items-center justify-center mb-6">
          <h1 className="text-2xl font-bold text-zinc-300 text-center">
            Sign Up to get started
          </h1>
        </div>
        <div className="flex flex-col  justify-center  space-y-6">
          <div className="space-y-4">
            <div>
              <Label
                htmlFor="email"
                className="block text-sm font-medium mb-2 text-zinc-300"
              >
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
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-red-500 text-sm mt-1"
                >
                  {errors.email.message?.toString()}
                </motion.p>
              )}
            </div>

            <div>
              <Label
                htmlFor="password"
                className="block text-sm font-medium mb-2 text-zinc-300"
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
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-red-500 text-sm mt-1"
                >
                  {errors.password.message?.toString()}
                </motion.p>
              )}
            </div>

            <div>
              <Label
                htmlFor="confirmPassword"
                className="block text-sm font-medium mb-2 text-zinc-300"
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
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-red-500 text-sm mt-1"
                >
                  {errors.confirmPassword.message?.toString()}
                </motion.p>
              )}
            </div>
          </div>
          <StepButtons isLoading={isLoading} />
          {/* <Button
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 border-0 relative overflow-hidden group h-12"
            asChild
          >
            <Link href="/signup">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></span>
              <span className="relative z-10 flex items-center">
                Get Started
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 1.5,
                    repeatType: "reverse",
                  }}
                >
                  <ChevronRight className="ml-2 h-4 w-4" />
                </motion.div>
              </span>
            </Link>
          </Button> */}
        </div>
      </form>
    </motion.div>
  );
}
