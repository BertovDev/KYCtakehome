import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Props = {};

const stats = [
  {
    label: "Current Value",
    value: "$24,563.82",
    color: "text-white",
  },
  {
    label: "Return",
    value: "+$1,245.32",
    color: "text-emerald-500",
  },
  {
    label: "ROI",
    value: "+5.32%",
    color: "text-emerald-500",
  },
];

export default function DashboardChart({}: Props) {
  const [chartData, setChartData] = useState([
    35, 32, 30, 25, 20, 15, 18, 16, 12, 10, 8, 5,
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setChartData((prev) => {
        const newData = [...prev];
        for (let i = 0; i < newData.length - 1; i++) {
          newData[i] = newData[i + 1];
        }
        newData[newData.length - 1] = Math.floor(Math.random() * 10) + 5;
        return newData;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const generatePath = () => {
    const max = Math.max(...chartData);
    const min = Math.min(...chartData);
    const range = max - min;
    const step = 100 / (chartData.length - 1);

    let path = `M0,${40 - ((chartData[0] - min) / range) * 35}`;

    for (let i = 1; i < chartData.length; i++) {
      const x = i * step;
      const y = 40 - ((chartData[i] - min) / range) * 35;
      path += ` L${x},${y}`;
    }

    return path;
  };

  const generateFillPath = () => {
    const max = Math.max(...chartData);
    const min = Math.min(...chartData);
    const range = max - min;
    const step = 100 / (chartData.length - 1);

    let path = `M0,${40 - ((chartData[0] - min) / range) * 35}`;

    for (let i = 1; i < chartData.length; i++) {
      const x = i * step;
      const y = 40 - ((chartData[i] - min) / range) * 35;
      path += ` L${x},${y}`;
    }

    path += ` L100,40 L0,40 Z`;
    return path;
  };

  return (
    <>
      <div className="h-64 w-full rounded-md bg-zinc-800/50 p-2 relative overflow-hidden">
        <div className="absolute bottom-2 left-2 right-2 h-56">
          <svg viewBox="0 0 100 40" className="h-full w-full">
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                duration: 1.5,
                delay: 1,
                ease: "easeInOut",
              }}
              fill="none"
              stroke="url(#chartGradient)"
              strokeWidth="1.5"
              d={generatePath()}
            />
            <motion.path
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.2 }}
              transition={{ duration: 1.5, delay: 1.5 }}
              fill="url(#chartFill)"
              d={generateFillPath()}
            />
            <defs>
              <linearGradient
                id="chartGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#818cf8" />
              </linearGradient>
              <linearGradient id="chartFill" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Chart Labels */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-between px-2 text-xs text-zinc-500">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
          >
            Mon
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.7 }}
          >
            Tue
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
          >
            Wed
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.9 }}
          >
            Thu
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.0 }}
          >
            Fri
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.1 }}
          >
            Sat
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2 }}
          >
            Sun
          </motion.span>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2.3 + index * 0.1 }}
          >
            <p className="text-xs text-zinc-500">{stat.label}</p>
            <p className={`text-sm font-medium ${stat.color}`}>{stat.value}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
}
