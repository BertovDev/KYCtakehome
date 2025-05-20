"use client";

import { useState } from "react";
import { MoreHorizontal, Download, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import DashboardAside from "@/components/dashboard/DashboardAside";
import DashBoardHeader from "@/components/dashboard/DashBoardHeader";
import DashboardCards from "@/components/dashboard/DashboardCards";
import DashboardChart from "@/components/dashboard/DashboardChart";
import DashboardActivity from "@/components/dashboard/DashboardActivity";
import DashboardAssets from "@/components/dashboard/DashboardAssets";

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-black text-white">
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

      <AnimatePresence>
        {(sidebarOpen || window.innerWidth >= 1024) && (
          <DashboardAside
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />
        )}
      </AnimatePresence>

      <div className="flex flex-1 flex-col">
        <DashBoardHeader setSidebarOpen={setSidebarOpen} />

        <main className="flex-1 overflow-auto">
          <div className="container mx-auto p-4 lg:p-6">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mb-8"
            >
              <h1 className="text-2xl font-bold text-white">
                Welcome back, John
              </h1>
              <p className="text-zinc-400">
                Here's what's happening with your assets today.
              </p>
            </motion.div>

            <DashboardCards />

            <div className="grid gap-6 md:grid-cols-7 mb-8">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                whileHover={{
                  boxShadow: "0 0 30px rgba(56,189,248,0.15)",
                  borderColor: "rgba(56,189,248,0.5)",
                }}
                className="md:col-span-4 rounded-xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm p-5 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-white">
                    Portfolio Performance
                  </h3>
                  <div className="flex items-center gap-2">
                    <select className="rounded-md bg-zinc-800 border-zinc-700 text-zinc-400 text-sm focus:border-cyan-500 focus:ring-cyan-500/20 transition-all duration-300">
                      <option>Last 7 days</option>
                      <option>Last 30 days</option>
                      <option>Last 90 days</option>
                      <option>Last year</option>
                    </select>
                    <motion.button
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="rounded-md p-1.5 text-zinc-400 hover:bg-zinc-800 hover:text-white transition-colors duration-300"
                    >
                      <Download className="h-4 w-4" />
                    </motion.button>
                  </div>
                </div>

                <DashboardChart />
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9 }}
                whileHover={{
                  boxShadow: "0 0 30px rgba(124,58,237,0.15)",
                  borderColor: "rgba(124,58,237,0.5)",
                }}
                className="md:col-span-3 rounded-xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm p-5 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-white">
                    Recent Activity
                  </h3>
                  <button className="text-sm text-zinc-400 hover:text-white transition-colors duration-300">
                    View All
                  </button>
                </div>

                <DashboardActivity />
              </motion.div>
            </div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.1 }}
              whileHover={{
                boxShadow: "0 0 30px rgba(56,189,248,0.15)",
                borderColor: "rgba(56,189,248,0.5)",
              }}
              className="rounded-xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm p-5 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-white">Your Assets</h3>
                <div className="flex items-center gap-2">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0 relative overflow-hidden group"
                    >
                      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></span>
                      <span className="relative z-10 flex items-center">
                        <Plus className="mr-1 h-4 w-4" />
                        Add Asset
                      </span>
                    </Button>
                  </motion.div>
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                    className="rounded-md p-1.5 text-zinc-400 hover:bg-zinc-800 hover:text-white transition-colors duration-300"
                  >
                    <MoreHorizontal className="h-5 w-5" />
                  </motion.button>
                </div>
              </div>

              <DashboardAssets />
            </motion.div>
          </div>
        </main>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
