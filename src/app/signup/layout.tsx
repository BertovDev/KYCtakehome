"use client";
import React, { ReactNode } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { motion } from "framer-motion";
import { SignupProvider } from "@/context/SignupStepContext";

import StepsCounter from "@/components/signup/StepsCounter";
import useStep from "@/hooks/useStep";

type Props = {
  children: ReactNode[];
};

export default function Layout({ children }: Props) {
  const { currentStep } = useStep();

  const isComplete = false;

  return (
    <SignupProvider>
      <div className="flex min-h-screen w-full justify-center ">
        <div className="w-full max-w-3xl mt-20 mx-5">
          <Card className="w-full shadow-lg border-border">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl mb-5 font-bold text-center">
                Food Competition Signup
              </CardTitle>

              {currentStep >= 0 && <StepsCounter isComplete={isComplete} />}
            </CardHeader>

            <CardContent className="pt-8">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {children}
              </motion.div>
            </CardContent>
          </Card>
        </div>
      </div>
    </SignupProvider>
  );
}
