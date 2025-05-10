"use client";
import React, { ReactNode } from "react";
import { Card, CardContent } from "../../components/ui/card";
import { motion } from "framer-motion";
import { SignupProvider } from "@/context/SignupStepContext";

import useStep from "@/hooks/useStep";

type Props = {
  children: ReactNode[];
};

export default function layout({ children }: Props) {
  const { currentStep } = useStep();

  return (
    <SignupProvider>
      <div className="flex min-h-screen w-full justify-center ">
        <div className="w-full max-w-3xl mt-20 mx-5">
          <Card className="w-full shadow-lg border-border">
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
