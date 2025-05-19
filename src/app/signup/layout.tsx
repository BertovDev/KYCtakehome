"use client";
import React, { ReactNode } from "react";
import { SignupProvider } from "@/context/SignupStepContext";

import StepsCounter from "@/components/signup/StepsCounter";
import useStep from "../../hooks/useStep";
import Link from "next/link";
import "../globals.css";

type Props = {
  children: ReactNode[];
};

export default function Layout({ children }: Props) {
  const { isComplete } = useStep();

  return (
    <SignupProvider>
      <div className="flex min-h-screen flex-col bg-black text-black">
        {/* Background animation elements */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-pulse"></div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-pulse"></div>
          </div>
          <div className="absolute top-1/4 -left-20 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl animate-blob"></div>
          <div className="absolute bottom-1/4 -right-20 h-40 w-40 rounded-full bg-purple-500/10 blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-60 w-60 rounded-full bg-blue-500/5 blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <nav className=" rounded-xl shadow-sm py-4 px-6 border-b border-zinc-800 bg-black/80 backdrop-blur-md sticky top-0 z-50">
          <div className="flex items-center justify-between">
            <div className="flex-shrink-0">
              <Link href="/" className="text-xl font-bold text-white">
                Cryptiva
              </Link>
            </div>
          </div>
        </nav>

        <main className="flex-1">
          <div className="absolute  inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(56,182,255,0.1),transparent_40%)] pointer-events-none"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(124,58,237,0.15),transparent_50%)] pointer-events-none"></div>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>

          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIHN0cm9rZT0icmdiYSg1NiwgMTg5LCAyNDgsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjAuNSI+PHBhdGggZD0iTTYwIDBoLTJ2NjBoMnpNMCAwdjYwaDJ2LTYwek0wIDYwaDYwdi0ySDB6TTAgMGg2MHYySDB6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30 pointer-events-none"></div>

          <div className="container max-w-xl mx-auto px-4 py-16 relative z-10">
            {/* {currentStep >= 0 && <StepsCounter isComplete={isComplete} />} */}
            <StepsCounter isComplete={isComplete} />
            <div className="rounded-xl border border-zinc-800  backdrop-blur-sm p-6 shadow-[0_0_30px_rgba(56,189,248,0.1)]">
              {children}
            </div>
          </div>
        </main>
      </div>
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <NavBar />
      </div>
      <div className="flex  w-full items-start mt-20 justify-center  signup-steps flex-row content-layout ">
        <div className="w-full max-w-5xl   flex">
          <Card className="w-full h-full flex flex-col items-center justify-center shadow-lg border-border ">
            {currentStep >= 0 && <StepsCounter isComplete={isComplete} />}
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
      </div> */}
    </SignupProvider>
  );
}
