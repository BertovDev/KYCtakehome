import { motion } from "framer-motion";
import {
  ArrowUp,
  ArrowDown,
  DollarSign,
  LineChart,
  PieChart,
} from "lucide-react";
import React from "react";

type Props = {};

export default function DashboardCards({}: Props) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
      {[
        {
          title: "Total Balance",
          value: "$24,563.82",
          change: "+3.5%",
          icon: <DollarSign className="h-6 w-6" />,
          color: "cyan",
          trend: "up",
        },
        {
          title: "Total Investments",
          value: "$18,245.30",
          change: "+5.2%",
          icon: <LineChart className="h-6 w-6" />,
          color: "purple",
          trend: "up",
        },
        {
          title: "Total Savings",
          value: "$6,318.52",
          change: "+2.1%",
          icon: <PieChart className="h-6 w-6" />,
          color: "blue",
          trend: "up",
        },
        {
          title: "Total Expenses",
          value: "$3,945.20",
          change: "+1.8%",
          icon: <ArrowDown className="h-6 w-6" />,
          color: "red",
          trend: "up",
        },
      ].map((card, index) => (
        <motion.div
          key={card.title}
          initial={{ y: 20, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 + index * 0.1 }}
          whileHover={{
            y: -5,
            boxShadow:
              card.color === "cyan"
                ? "0 0 30px rgba(56,189,248,0.15)"
                : card.color === "purple"
                  ? "0 0 30px rgba(124,58,237,0.15)"
                  : card.color === "blue"
                    ? "0 0 30px rgba(59,130,246,0.15)"
                    : "0 0 30px rgba(239,68,68,0.15)",
          }}
          className={`rounded-xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm p-4 hover:border-${card.color}-500/50 transition-all duration-300`}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-zinc-400">{card.title}</p>
              <motion.h3
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: 0.6 + index * 0.1,
                  type: "spring",
                }}
                className="text-2xl font-bold text-white"
              >
                {card.value}
              </motion.h3>
            </div>
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className={`flex h-12 w-12 items-center justify-center rounded-lg bg-${card.color}-500/10 text-${card.color}-400`}
            >
              {card.icon}
            </motion.div>
          </div>
          <div className="mt-3 flex items-center text-sm">
            <motion.span
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              className={`flex items-center ${card.trend === "up" ? "text-emerald-500" : "text-red-500"}`}
            >
              <ArrowUp className="mr-1 h-3 w-3" />
              {card.change}
            </motion.span>
            <span className="ml-2 text-zinc-500">from last month</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
