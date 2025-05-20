import React from "react";

import { ArrowDown, ArrowUp, CreditCard, Wallet } from "lucide-react";
import { motion } from "framer-motion";

type Props = {};

const activities = [
  {
    icon: <ArrowUp className="h-5 w-5" />,
    title: "Received Bitcoin",
    time: "Today, 11:42 AM",
    amount: "+0.0024 BTC",
    value: "$94.32",
    color: "emerald",
  },
  {
    icon: <ArrowDown className="h-5 w-5" />,
    title: "Sent Ethereum",
    time: "Yesterday, 3:26 PM",
    amount: "-0.245 ETH",
    value: "$486.12",
    color: "red",
  },
  {
    icon: <CreditCard className="h-5 w-5" />,
    title: "Purchased Solana",
    time: "Yesterday, 1:42 PM",
    amount: "+2.45 SOL",
    value: "$158.23",
    color: "blue",
  },
  {
    icon: <Wallet className="h-5 w-5" />,
    title: "Added to Savings",
    time: "Mar 21, 10:15 AM",
    amount: "+$500.00",
    value: "5% APY",
    color: "purple",
  },
];

export default function DashboardActivity({}: Props) {
  return (
    <div className="space-y-4">
      {activities.map((activity, index) => (
        <motion.div
          key={activity.title}
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1 + index * 0.1 }}
          whileHover={{ x: 5 }}
          className="flex items-center gap-3"
        >
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className={`flex h-10 w-10 items-center justify-center rounded-full bg-${activity.color}-500/10 text-${activity.color}-500`}
          >
            {activity.icon}
          </motion.div>
          <div className="flex-1">
            <p className="text-sm font-medium text-white">{activity.title}</p>
            <p className="text-xs text-zinc-500">{activity.time}</p>
          </div>
          <div className="text-right">
            <p className={`text-sm font-medium text-${activity.color}-500`}>
              {activity.amount}
            </p>
            <p className="text-xs text-zinc-500">{activity.value}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
