"use client";
import React, { ReactNode } from "react";
import { Card, CardContent } from "../../components/ui/card";
import { motion } from "framer-motion";
import { SignupProvider } from "@/context/SignupStepContext";

import StepsCounter from "@/components/signup/StepsCounter";
import useStep from "../../hooks/useStep";

import "../globals.css";

type Props = {
  children: ReactNode[];
};

export default function Layout({ children }: Props) {
  const { currentStep, isComplete } = useStep();

  return (
    <SignupProvider>
      <div className="flex  min-h-screen w-full items-center justify-center  signup-steps flex-row content-layout ">
        <div className="w-full max-w-5xl  py-10 flex">
          <Card className="w-full h-full flex flex-col items-center justify-center shadow-lg border-border ">
            {currentStep >= 0 && <StepsCounter isComplete={isComplete} />}
            {/* <CardHeader className="pb-4">
              <CardTitle className="text-2xl mb-5 font-bold text-center">
                {isComplete && "Wallet Ready!"}
              </CardTitle>
            </CardHeader> */}

            <CardContent className="h-full flex  justify-start items-start   w-full">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full"
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
