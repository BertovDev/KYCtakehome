"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Check, Wallet, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useRouter } from "next/navigation";

const WalletInitialization = () => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const router = useRouter();

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
    <div className="w-full max-w-md  rounded-xl   mx-auto   p-5">
      <div className=" p-4 space-y-6">
        <div className="pb-4">
          <CardTitle className="text-center text-3xl font-semibold text-zinc-300">
            {isComplete ? "Wallet Ready!" : "Checking the information..."}
          </CardTitle>
        </div>
        <div className="space-y-6">
          {!isComplete ? (
            <>
              <div className="flex justify-center mb-6">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="p-4 rounded-full bg-gray-100"
                >
                  <Wallet className="h-12 w-12 text-gray-500" />
                </motion.div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-zinc-300">
                  <span>Initializing wallet</span>
                  <span>{progress}%</span>
                </div>
                <Progress value={progress} className="h-2" />
              </div>
              <div className="text-center text-sm text-zinc-300">
                Our team is checking the information you provided...
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

              <div className="space-y-4 text-center ">
                <div className="p-4 rounded-xl">
                  <p className="text-sm text-zinc-300 mb-1">Starting Balance</p>
                  <motion.p
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-3xl flex items-center justify-center gap-x-2 font-bold text-blue-600"
                  >
                    100{" "}
                    <span className="text-base font-bold  text-blue-600">
                      Points
                    </span>
                  </motion.p>
                </div>
                <p className="text-sm text-zinc-300">
                  Your digital wallet has been successfully created. Now you can
                  start tradig your vinils with full security! Enjoy!
                </p>
              </div>
            </>
          )}
        </div>
        <div>
          {/* <Button
            onClick={() => {
              router.push("/");
            }}
            disabled={!isComplete}
            className="w-full flex items-center justify-center"
          >
            {isComplete ? "Start Trading" : "Setting up..."}
            {isComplete && <ArrowRight className="ml-2 h-4 w-4" />}
          </Button> */}

          <Button
            className=" bg-gradient-to-r w-full from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 border-0 relative overflow-hidden group"
            type="button"
            disabled={!isComplete}
            onClick={() => {
              router.push("/");
            }}
          >
            <div>
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></span>
              <span className="relative z-10 flex items-center">
                {isComplete ? "Start Trading" : "Setting up..."}
                {isComplete && <ArrowRight className="ml-2 h-4 w-4" />}
              </span>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WalletInitialization;
