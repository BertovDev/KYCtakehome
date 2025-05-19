import { motion } from "framer-motion";
import { PiggyBank, CreditCard, BarChart3, ArrowUpRight } from "lucide-react";
import React from "react";

type Props = {};

const soluotions = [
  {
    title: "Quantum Payments",
    description:
      "Next-gen payment processing with quantum encryption, fraud protection, and instant cross-border settlements.",
    icon: <CreditCard className="h-6 w-6" />,
    color: "cyan",
  },
  {
    title: "Neural Trading",
    description:
      "AI-powered investment platform with predictive analytics, automated trading strategies, and real-time market insights.",
    icon: <BarChart3 className="h-6 w-6" />,
    color: "cyan",
  },
  {
    title: "Crypto Vault",
    description:
      "Ultra-secure digital asset storage with multi-signature protection, biometric authentication, and insurance coverage.",
    icon: <PiggyBank className="h-6 w-6" />,
    color: "cyan",
  },
];

export default function Products({}: Props) {
  return (
    <motion.section
      id="products"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="w-full py-16 md:py-24 bg-black relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,182,255,0.1),transparent_50%)] pointer-events-none"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>

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
            className="inline-block rounded-lg bg-zinc-800/60 px-3 py-1 text-sm text-cyan-400 backdrop-blur-sm border border-zinc-700/50"
          >
            Products
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-3xl font-bold tracking-tighter md:text-4xl/tight bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent"
          >
            Cutting-Edge Financial Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="max-w-[700px] text-zinc-400 md:text-lg"
          >
            Discover our suite of next-generation financial products designed to
            help you manage, grow, and secure your digital assets.
          </motion.p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {soluotions.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0 }}
              whileHover={{
                y: -10,
                boxShadow: "0 0 40px rgba(56,189,248,0.15)",
              }}
              className="group relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm transition-all duration-150 hover:border-cyan-500/50"
            >
              <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-cyan-400 to-blue-600 transform origin-left scale-y-0 group-hover:scale-y-100 transition-transform duration-500"></div>
              <div className="p-6">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-800 text-cyan-400 group-hover:bg-cyan-500/10 transition-colors duration-300"
                >
                  {card.icon}
                </motion.div>
                <h3 className="mb-2 text-xl font-bold text-white">
                  {card.title}
                </h3>
                <p className="mb-4 text-zinc-400">{card.description}</p>
                <motion.a
                  whileHover={{ x: 5 }}
                  href="#"
                  className="inline-flex items-center text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Learn more
                  <motion.div
                    animate={{ x: [0, 3, 0] }}
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 1.5,
                      repeatType: "reverse",
                      delay: index * 0.2,
                    }}
                  >
                    <ArrowUpRight className="ml-1 h-4 w-4" />
                  </motion.div>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
