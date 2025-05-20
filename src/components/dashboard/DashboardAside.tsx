import { motion } from "framer-motion";
import {
  LogOut,
  X,
  User,
  Wallet,
  BarChart3,
  CreditCard,
  Home,
  Settings,
  HelpCircle,
} from "lucide-react";
import React from "react";
import Link from "next/link";

type Props = {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
};

const menuItems = [
  {
    icon: <Home className="h-5 w-5" />,
    label: "Dashboard",

    active: true,
  },
  {
    icon: <Wallet className="h-5 w-5" />,
    label: "Wallet",
  },
  {
    icon: <CreditCard className="h-5 w-5" />,
    label: "Transactions",
  },
  {
    icon: <BarChart3 className="h-5 w-5" />,
    label: "Analytics",
  },
];

export default function DashboardAside({ sidebarOpen, setSidebarOpen }: Props) {
  return (
    <motion.aside
      initial={{ x: -320 }}
      animate={{ x: 0 }}
      exit={{ x: -320 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={`fixed inset-y-0 left-0 z-50 w-64 border-r border-zinc-800 bg-zinc-900/80 backdrop-blur-md lg:relative`}
    >
      <div className="flex h-16 items-center justify-between border-b border-zinc-800 px-4">
        <Link href="/" className="flex items-center gap-2">
          <motion.span
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl font-bold bg-gradient-to-r text-white bg-clip-text text-transparent"
          >
            Cryptiva
          </motion.span>
        </Link>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="rounded-md p-1.5 text-zinc-400 hover:bg-zinc-800 lg:hidden"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <div className="flex flex-col gap-1 p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-4 px-3 text-xs font-semibold uppercase tracking-wider text-zinc-500"
        >
          Main
        </motion.div>

        {menuItems.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 + index * 0.1 }}
          >
            <button
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all hover:bg-zinc-800/60 ${
                item.active
                  ? "bg-zinc-800/60 text-white"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <span className={item.active ? "text-cyan-400" : ""}>
                {item.icon}
              </span>
              {item.label}
            </button>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="my-4 px-3 text-xs font-semibold uppercase tracking-wider text-zinc-500"
        >
          Account
        </motion.div>

        {[
          {
            icon: <User className="h-5 w-5" />,
            label: "Profile",
          },
          {
            icon: <Settings className="h-5 w-5" />,
            label: "Settings",
          },
          {
            icon: <HelpCircle className="h-5 w-5" />,
            label: "Help & Support",
          },
        ].map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1 + index * 0.1 }}
          >
            <button className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-zinc-400 transition-colors hover:bg-zinc-800/60 hover:text-white">
              {item.icon}
              {item.label}
            </button>
          </motion.div>
        ))}

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="mt-auto pt-4"
        >
          <Link
            href="/"
            className="w-full flex items-center gap-2 border-zinc-700 text-zinc-400 hover:bg-zinc-800 hover:text-white bg-zinc-800/60 rounded-lg p-2 transition-all duration-300"
          >
            <LogOut className="h-4 w-4" />
            Log Out
          </Link>
        </motion.div>
      </div>
    </motion.aside>
  );
}
