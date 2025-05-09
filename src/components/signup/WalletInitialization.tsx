"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Check, Wallet, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface WalletInitializationProps {
  onComplete?: () => void;
  userName?: string;
  startingPoints?: number;
}

const WalletInitialization = ({
  onComplete = () => {},
  userName = "Competitor",
  startingPoints = 100,
}: WalletInitializationProps) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    // Simulate wallet initialization process
    const timer = setTimeout(() => {
      if (progress < 100) {
        setProgress((prev) => Math.min(prev + 5, 100));
      } else if (progress === 100 && !isComplete) {
        setIsComplete(true);
        setShowConfetti(true);
        // Hide confetti after 3 seconds
        setTimeout(() => setShowConfetti(false), 3000);
      }
    }, 120);

    return () => clearTimeout(timer);
  }, [progress, isComplete]);

  return (
    <div className="w-full max-w-md mx-auto bg-background p-4">
      <Card className="border shadow-md">
        <CardHeader className="pb-4">
          <CardTitle className="text-center text-2xl font-bold">
            {isComplete ? "Wallet Ready!" : "Setting Up Your Wallet"}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {!isComplete ? (
            <>
              <div className="flex justify-center mb-6">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="p-4 rounded-full bg-primary/10"
                >
                  <Wallet className="h-12 w-12 text-primary" />
                </motion.div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Initializing wallet</span>
                  <span>{progress}%</span>
                </div>
                <Progress value={progress} className="h-2" />
              </div>
              <div className="text-center text-sm text-muted-foreground">
                Please wait while we set up your digital wallet...
              </div>
            </>
          ) : (
            <>
              <div className="flex justify-center mb-6">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  className="p-4 rounded-full bg-green-100 dark:bg-green-900"
                >
                  <Check className="h-12 w-12 text-green-600 dark:text-green-300" />
                </motion.div>
              </div>

              {showConfetti && (
                <div className="absolute inset-0 pointer-events-none">
                  {Array.from({ length: 50 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute"
                      initial={{
                        top: "50%",
                        left: "50%",
                        scale: 0,
                      }}
                      animate={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        scale: Math.random() * 0.8 + 0.2,
                        opacity: 0,
                      }}
                      transition={{
                        duration: Math.random() * 2 + 1,
                        ease: "easeOut",
                      }}
                      style={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        backgroundColor: [
                          "#FF5733",
                          "#33FF57",
                          "#3357FF",
                          "#F3FF33",
                          "#FF33F3",
                        ][Math.floor(Math.random() * 5)],
                      }}
                    />
                  ))}
                </div>
              )}

              <div className="space-y-4 text-center">
                <h3 className="text-xl font-medium">Welcome, {userName}!</h3>
                <div className="p-4 bg-primary/5 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">
                    Starting Balance
                  </p>
                  <motion.p
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-3xl font-bold text-primary"
                  >
                    {startingPoints}{" "}
                    <span className="text-base font-normal">points</span>
                  </motion.p>
                </div>
                <p className="text-sm text-muted-foreground">
                  Your digital wallet has been successfully created. You can now
                  participate in food competitions and track your progress!
                </p>
              </div>
            </>
          )}
        </CardContent>
        <CardFooter>
          <Button
            onClick={onComplete}
            disabled={!isComplete}
            className="w-full"
          >
            {isComplete ? "Continue to Dashboard" : "Setting up..."}
            {isComplete && <ArrowRight className="ml-2 h-4 w-4" />}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default WalletInitialization;
