"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SignupForm from "@/components/signup/SignupForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  const [isComplete, setIsComplete] = useState(false);

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-3xl"
      >
        <Card className="border shadow-lg">
          <CardHeader className="text-center border-b bg-muted/30">
            <CardTitle className="text-2xl md:text-3xl font-bold">
              Food Competition Digital Wallet
            </CardTitle>
            <p className="text-muted-foreground mt-2">
              Create your account to start competing and tracking your progress
            </p>
          </CardHeader>
          <CardContent className="p-6">
            <SignupForm onComplete={() => setIsComplete(true)} />
          </CardContent>
        </Card>

        <footer className="mt-8 text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Food Competition App. All rights
            reserved.
          </p>
        </footer>
      </motion.div>
    </div>
  );
}
