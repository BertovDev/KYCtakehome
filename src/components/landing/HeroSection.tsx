import {
  ChevronRight,
  ExternalLink,
  Shield,
  TrendingUp,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:pb-16 xl:pt-32 relative overflow-hidden">
      {/* Futuristic background elements */}

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-1 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 180 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="absolute md:top-30 md:left-10 top-0 left-0"
          >
            <Image
              className="relative lg:hidden xl:block  z-100 object-cover"
              src="/images/btc.png"
              alt=""
              width={90}
              height={90}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 180 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="absolute md:top-30 md:right-10 top-0 right-0"
          >
            <Image
              className="relative lg:hidden xl:block z-100 object-cover"
              src="/images/eth.png"
              alt=""
              width={90}
              height={90}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 30 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="absolute md:bottom-30 md:left-44 bottom-0 left-44"
          >
            <Image
              className="relative lg:hidden xl:block z-100 object-cover"
              src="/images/sol.png"
              alt=""
              width={90}
              height={90}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 30 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="absolute md:top-64 md:right-44 top-44 right-44"
          >
            <Image
              className="relative lg:hidden xl:block rotate-12   z-100 object-cover"
              src="/images/usdt.png"
              alt=""
              width={90}
              height={90}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col justify-center items-center text-center space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="inline-flex  items-center space-x-2 rounded-full bg-zinc-800/60 px-3 py-1 text-sm text-cyan-400 backdrop-blur-sm border border-zinc-700/50 
              w-fit"
            >
              <motion.span
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 2,
                }}
                className="relative flex h-2 w-2"
              >
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </motion.span>
              <span>Next-Gen Finance</span>
            </motion.div>
            <div className="space-y-2 gap-y-2 flex flex-col items-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-7xl/none bg-gradient-to-br from-white via-blue-100 to-blue-200 bg-clip-text text-transparent"
              >
                The Future of Finance is{" "}
                <motion.span
                  initial={{ opacity: 0, filter: "blur(10px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent"
                >
                  Decentralized
                </motion.span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="max-w-[600px] text-zinc-400 md:text-xl pt-1"
              >
                Secure, innovative solutions for modern finance. Invest, grow,
                and manage your digital assets with confidence.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="flex flex-col gap-4 min-[400px]:flex-row pt-2"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 border-0 relative overflow-hidden group h-12"
                  asChild
                >
                  <Link href="/signup">
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></span>
                    <span className="relative z-10 flex items-center">
                      Get Started
                      <motion.div
                        animate={{ x: [0, 4, 0] }}
                        transition={{
                          repeat: Number.POSITIVE_INFINITY,
                          duration: 1.5,
                          repeatType: "reverse",
                        }}
                      >
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </motion.div>
                    </span>
                  </Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  className="border-zinc-700 bg-zinc-800 text-zinc-300 hover:bg-zinc-300 hover:text-zinc-800 h-12"
                >
                  <span className="flex items-center">
                    Learn More
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </span>
                </Button>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              className="flex flex-wrap items-center gap-6 text-sm text-zinc-400 pt-3"
            >
              <motion.div
                whileHover={{ scale: 1.05, color: "#22d3ee" }}
                className="flex items-center gap-1 transition-colors duration-300"
              >
                <Shield className="mr-1 h-4 w-4 text-cyan-400" />
                <span>Military-grade Security</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, color: "#22d3ee" }}
                className="flex items-center gap-1 transition-colors duration-300"
              >
                <TrendingUp className="mr-1 h-4 w-4 text-cyan-400" />
                <span>AI-Powered Investments</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, color: "#22d3ee" }}
                className="flex items-center gap-1 transition-colors duration-300"
              >
                <Zap className="mr-1 h-4 w-4 text-cyan-400" />
                <span>Lightning Transfers</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
