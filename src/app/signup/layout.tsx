"use client";
import React, { ReactNode } from "react";
import { Card, CardContent } from "../../components/ui/card";
import { motion } from "framer-motion";
import { SignupProvider } from "@/context/SignupStepContext";

import StepsCounter from "@/components/signup/StepsCounter";
import useStep from "../../hooks/useStep";
import NavBar from "@/components/landing/Navbar";

import "../globals.css";

type Props = {
  children: ReactNode[];
};

export default function Layout({ children }: Props) {
  const { currentStep, isComplete } = useStep();

  return (
    <SignupProvider>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <NavBar />
      </div>
      <div className="flex  w-full items-start mt-20 justify-center  signup-steps flex-row content-layout ">
        <div className="w-full max-w-5xl   flex">
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
