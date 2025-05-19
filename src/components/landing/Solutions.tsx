import { motion } from "framer-motion";
import { Globe, Wallet } from "lucide-react";
import React from "react";

const solutions = [
  {
    title: "Personal Finance",
    description:
      "Take control of your personal finances with our intuitive tools for budgeting, saving, investing, and planning for the future.",
    icon: <Wallet className="h-5 w-5" />,
    features: [
      "AI-powered savings recommendations",
      "Personalized investment algorithms",
      "Holographic financial dashboard",
    ],
  },
  {
    title: "Enterprise Solutions",
    description:
      "Streamline your business finances with our comprehensive suite of tools for payment processing, expense management, and financial reporting.",
    icon: <Globe className="h-5 w-5" />,
    features: [
      "Quantum-secured payment systems",
      "Predictive financial analytics",
      "Multi-chain currency support",
    ],
  },
];

type Props = {};

export default function Solutions({}: Props) {
  return (
    <motion.section
      id="solutions"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="w-full py-16 md:py-24 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(124,58,237,0.1),transparent_50%)] pointer-events-none"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center space-y-4 text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block rounded-lg bg-zinc-800/60 px-3 py-1 text-sm text-purple-400 backdrop-blur-sm border border-zinc-700/50"
          >
            Solutions
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-3xl font-bold tracking-tighter md:text-4xl/tight bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent"
          >
            Tailored for the Digital Age
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="max-w-[700px] text-zinc-400 md:text-lg"
          >
            Comprehensive financial solutions designed for individuals,
            businesses, and institutions in the Web3 era.
          </motion.p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          {solutions.map((solution) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{
                boxShadow: "0 0 30px rgba(124,58,237,0.15)",
              }}
              className="flex flex-col space-y-4 rounded-xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm p-6 hover:border-purple-500/50 transition-all duration-150"
            >
              <div className="flex items-center space-x-3">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-800 text-purple-400"
                >
                  {solution.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-white">
                  {solution.title}
                </h3>
              </div>
              <p className="text-zinc-400">{solution.description}</p>
              <ul className="space-y-2">
                {solution.features.map((feature, featureIndex) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: 0.5 + featureIndex * 0.1,
                    }}
                    className="flex items-center text-zinc-400"
                  >
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        repeat: Number.POSITIVE_INFINITY,
                        duration: 2,
                        repeatType: "reverse",
                        delay: featureIndex * 0.5,
                      }}
                      className="mr-2 h-1.5 w-1.5 rounded-full bg-purple-500"
                    ></motion.div>
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
