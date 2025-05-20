import React from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUp,
  Bitcoin,
  MoreHorizontal,
  BadgeDollarSign,
} from "lucide-react";

type Props = {};

const assets = [
  {
    name: "Bitcoin",
    symbol: "BTC",
    icon: <Bitcoin />,
    gradient: "from-orange-400 to-orange-600",
    balance: "0.4582 BTC",
    price: "$42,384.25",
    value: "$19,420.48",
    change: "+2.34%",
    changeType: "positive",
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    icon: <BadgeDollarSign />,
    gradient: "from-blue-400 to-blue-600",
    balance: "2.3456 ETH",
    price: "$2,245.12",
    value: "$5,265.82",
    change: "+3.56%",
    changeType: "positive",
  },
  {
    name: "Solana",
    symbol: "SOL",
    icon: <BadgeDollarSign />,
    gradient: "from-purple-400 to-purple-600",
    balance: "18.2345 SOL",
    price: "$102.45",
    value: "$1,868.12",
    change: "-1.24%",
    changeType: "negative",
  },
];

export default function DashboardAssets({}: Props) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-zinc-800">
            <th className="whitespace-nowrap px-4 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">
              Asset
            </th>
            <th className="whitespace-nowrap px-4 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">
              Balance
            </th>
            <th className="whitespace-nowrap px-4 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">
              Price
            </th>
            <th className="whitespace-nowrap px-4 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">
              Value
            </th>
            <th className="whitespace-nowrap px-4 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">
              24h Change
            </th>
            <th className="whitespace-nowrap px-4 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-zinc-800">
          {assets.map((asset, index) => (
            <motion.tr
              key={asset.symbol}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + index * 0.1 }}
              whileHover={{
                backgroundColor: "rgba(255,255,255,0.03)",
              }}
              className="transition-colors duration-200"
            >
              <td className="whitespace-nowrap px-4 py-4">
                <div className="flex items-center gap-3">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r ${asset.gradient}`}
                  >
                    {asset.icon}
                  </motion.div>
                  <div>
                    <p className="text-sm font-medium text-white">
                      {asset.name}
                    </p>
                    <p className="text-xs text-zinc-500">{asset.symbol}</p>
                  </div>
                </div>
              </td>
              <td className="whitespace-nowrap px-4 py-4">
                <p className="text-sm text-white">{asset.balance}</p>
              </td>
              <td className="whitespace-nowrap px-4 py-4">
                <p className="text-sm text-white">{asset.price}</p>
              </td>
              <td className="whitespace-nowrap px-4 py-4">
                <p className="text-sm text-white">{asset.value}</p>
              </td>
              <td className="whitespace-nowrap px-4 py-4">
                <motion.p
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{
                    delay: 1.5 + index * 0.1,
                    type: "spring",
                  }}
                  className={`text-sm ${asset.changeType === "positive" ? "text-emerald-500" : "text-red-500"}`}
                >
                  {asset.change}
                </motion.p>
              </td>
              <td className="whitespace-nowrap px-4 py-4">
                <div className="flex items-center gap-2">
                  <motion.button
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="rounded-md p-1.5 text-zinc-400 hover:bg-zinc-800 hover:text-white transition-colors duration-300"
                  >
                    <ArrowUp className="h-4 w-4" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1, y: 2 }}
                    whileTap={{ scale: 0.9 }}
                    className="rounded-md p-1.5 text-zinc-400 hover:bg-zinc-800 hover:text-white transition-colors duration-300"
                  >
                    <ArrowDown className="h-4 w-4" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                    className="rounded-md p-1.5 text-zinc-400 hover:bg-zinc-800 hover:text-white transition-colors duration-300"
                  >
                    <MoreHorizontal className="h-4 w-4" />
                  </motion.button>
                </div>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
