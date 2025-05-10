"use client";
import React, { Children, ReactNode } from "react";
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

const isComplete = false;

export default function layout({ children }: Props) {
  const { currentStep } = useStep();

  return (
    <SignupProvider>
      <div className="flex min-h-screen w-full justify-center ">
        <div className="w-full max-w-3xl mt-20 mx-5">
          <Card className="w-full shadow-lg border-border">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl mb-5 font-bold text-center">
                {isComplete
                  ? "Wallet Setup Complete"
                  : "Food Competition Signup"}
              </CardTitle>

              <StepsCounter isComplete={isComplete} />
            </CardHeader>

            <CardContent className="pt-8">
              {isComplete ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* <WalletInitialization
              userName={formData.name}
              startingPoints={100}
              onComplete={() => console.log("Wallet setup complete", formData)}
            /> */}
                </motion.div>
              ) : (
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {children}
                </motion.div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </SignupProvider>
  );
}
