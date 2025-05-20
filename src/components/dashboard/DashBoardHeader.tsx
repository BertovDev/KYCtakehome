import { motion } from "framer-motion";
import React from "react";
import { Search, Bell, MessageSquare, Moon, Menu } from "lucide-react";
import { Input } from "@/components/ui/input";

type Props = {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
};

export default function DashBoardHeader({
  sidebarOpen,
  setSidebarOpen,
}: Props) {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-zinc-800 bg-black/80 px-4 backdrop-blur-md lg:px-6"
    >
      <div className="flex items-center gap-2 lg:hidden">
        <button
          onClick={() => setSidebarOpen(true)}
          className="rounded-md p-1.5 text-zinc-400 hover:bg-zinc-800"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      <div className="relative hidden md:block">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-zinc-500" />
        <Input
          type="search"
          placeholder="Search..."
          className="w-64 rounded-md bg-zinc-900 pl-8 text-sm text-zinc-400 border-zinc-800 focus:border-cyan-500 focus:ring-cyan-500/20 transition-all duration-300"
        />
      </div>

      <div className="flex items-center gap-3">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="rounded-md p-1.5 text-zinc-400 hover:bg-zinc-800 hover:text-white transition-colors duration-300"
        >
          <Moon className="h-5 w-5" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative rounded-md p-1.5 text-zinc-400 hover:bg-zinc-800 hover:text-white transition-colors duration-300"
        >
          <Bell className="h-5 w-5" />
          <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-cyan-500 animate-pulse"></span>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative rounded-md p-1.5 text-zinc-400 hover:bg-zinc-800 hover:text-white transition-colors duration-300"
        >
          <MessageSquare className="h-5 w-5" />
          <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-cyan-500 animate-pulse"></span>
        </motion.button>
        <div className="h-8 w-px bg-zinc-800"></div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 rounded-md p-1.5 text-zinc-400 hover:bg-zinc-800 hover:text-white transition-colors duration-300"
        >
          <div className="relative h-8 w-8 overflow-hidden rounded-full bg-gradient-to-br from-cyan-400 to-blue-600">
            <div className="absolute inset-0 flex items-center justify-center text-white font-medium">
              LI
            </div>
          </div>
        </motion.button>
      </div>
    </motion.header>
  );
}
