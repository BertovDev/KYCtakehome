import { motion } from "framer-motion";
import React from "react";
import { Button } from "../ui/button";

const pricingElements = [
  {
    title: "Explorer",
    description: "For individuals entering the crypto space",
    price: "$9",
    features: [
      "Basic crypto dashboard",
      "Up to 5 digital wallets",
      "Standard security features",
    ],
    popular: false,
  },
  {
    title: "Innovator",
    description: "For serious crypto enthusiasts and professionals",
    price: "$29",
    features: [
      "Advanced crypto dashboard",
      "Unlimited digital wallets",
      "Enhanced security features",
      "AI trading suggestions",
    ],
    popular: true,
  },
  {
    title: "Quantum",
    description: "Enterprise-grade solutions for institutions",
    price: "$99",
    features: [
      "Custom financial solutions",
      "Advanced API integrations",
      "Quantum-grade security",
      "Dedicated account manager",
    ],
    popular: false,
  },
];

type Props = {};

export default function Pricing({}: Props) {
  return (
    <motion.section
      id="pricing"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="w-full py-16 md:py-24 bg-black relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(56,182,255,0.1),transparent_70%)] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>

      <div className="container  px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center space-y-4  text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block rounded-lg bg-zinc-800/60 px-3 py-1 text-sm text-cyan-400 backdrop-blur-sm border border-zinc-700/50"
          >
            Pricing
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-3xl font-bold tracking-tighter md:text-4xl/tight bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent"
          >
            Future-Proof Your Finances
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="max-w-[700px] text-zinc-400 md:text-lg"
          >
            Choose the plan that works best for your financial needs with
            transparent pricing and no hidden fees.
          </motion.p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3 ">
          {pricingElements.map((plan, index) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className={`relative overflow-hidden  rounded-xl ${
                plan.popular
                  ? "border-2 border-cyan-500/50 bg-zinc-900/50 backdrop-blur-sm shadow-[0_0_30px_rgba(56,189,248,0.15)]"
                  : "border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(56,189,248,0.15)]"
              } transition-all duration-300`}
            >
              {plan.popular && (
                <motion.div
                  initial={{ x: 100 }}
                  animate={{ x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -right-5 top-5 rounded-lg rotate-45 bg-gradient-to-r from-cyan-500 to-blue-600 px-10 py-1 text-xs font-medium text-white"
                >
                  Popular
                </motion.div>
              )}
              <div className="p-6 flex flex-col h-full justify-between">
                <h3 className="mb-1 text-lg font-medium text-white">
                  {plan.title}
                </h3>
                <p className="mb-4 text-sm text-zinc-400">{plan.description}</p>
                <motion.div
                  initial={{ scale: 0.9 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    delay: 0.4 + index * 0.1,
                  }}
                  className="mb-4"
                >
                  <span className="text-3xl font-bold text-white">
                    {plan.price}
                  </span>
                  <span className="text-zinc-400">/month</span>
                </motion.div>
                <ul className="mb-6 space-y-2 text-sm text-zinc-400">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: 0.5 + featureIndex * 0.1,
                      }}
                      className="flex items-center"
                    >
                      <svg
                        className="mr-2 h-4 w-4 text-cyan-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0 relative overflow-hidden group h-10 ">
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></span>
                    <span className="relative z-10">Get Started</span>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
