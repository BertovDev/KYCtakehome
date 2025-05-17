import { motion } from "framer-motion";
import { UnlockIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

type Props = {};

export default function DashboardMock({}: Props) {
  return (
    <section
      id="dashboard"
      className="w-full relative overflow-hidden h-[100vh] py-12 md:py-12 lg:py-32 xl:pt-24 xl:pb-2"
    >
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="relative flex flex-col items-center justify-center "
        >
          {/* Glowing effect behind dashboard */}
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 5,
              repeatType: "reverse",
            }}
            className="absolute -z-10 h-full w-full bg-gradient-to-r from-cyan-500/10 to-purple-600/10 rounded-3xl blur-3xl"
          ></motion.div>

          {/* Dashboard mockup */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            whileHover={{ y: -5 }}
            className="relative w-full h-full min-h-[600px] rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900/80 backdrop-blur-sm shadow-[0_0_15px_rgba(56,189,248,0.15)]"
          >
            {/* Window controls */}
            <div className="absolute top-4 left-4 right-4 h-12 rounded-lg bg-zinc-800/80 backdrop-blur-sm flex items-center px-4 border border-zinc-700/50">
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="h-3 w-3 rounded-full bg-red-400 mr-2"
              ></motion.div>
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="h-3 w-3 rounded-full bg-yellow-400 mr-2"
              ></motion.div>
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="h-3 w-3 rounded-full bg-green-400 mr-2"
              ></motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="ml-auto text-xs text-zinc-400 font-mono"
              >
                Cryptiva.io/dashboard
              </motion.div>
            </div>

            {/* Dashboard content */}
            <div className="absolute top-20 left-4 right-4 bottom-4">
              <div className="h-full w-full bg-zinc-900 rounded-lg border border-zinc-800 p-4">
                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.6 }}
                    className="flex items-center justify-between"
                  >
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.6 }}
                      className="h-8 w-1/3 rounded-md bg-zinc-800 flex items-center px-3"
                    >
                      <motion.div
                        animate={{
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          repeat: Number.POSITIVE_INFINITY,
                          duration: 2,
                          repeatType: "reverse",
                          delay: 2,
                        }}
                        className="h-3 w-3 rounded-full bg-cyan-500 mr-2"
                      ></motion.div>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.6 }}
                        className="h-2 w-16 bg-zinc-700 rounded-full"
                      ></motion.div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.6 }}
                      className="flex space-x-2"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="h-8 w-8 rounded-md bg-zinc-800 flex items-center justify-center"
                      >
                        <div className="h-4 w-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"></div>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        className="h-8 w-8 rounded-md bg-zinc-800 flex items-center justify-center"
                      >
                        <div className="h-4 w-4 rounded-full bg-gradient-to-r from-purple-400 to-pink-500"></div>
                      </motion.div>
                    </motion.div>
                  </motion.div>

                  {/* Chart mockup */}
                  <motion.div
                    initial={{ opacity: 0, scaleY: 0.7 }}
                    animate={{ opacity: 1, scaleY: 1 }}
                    transition={{ delay: 1.8, duration: 0.5 }}
                    className="h-24 w-full  rounded-md bg-zinc-800 p-2 relative overflow-hidden"
                  >
                    <div className="absolute w-full bottom-2 left-2 right-2 h-28">
                      <svg
                        viewBox="0 0 100 18"
                        className="h-full w-full scale-x-150 "
                      >
                        <motion.path
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ pathLength: 1, opacity: 1 }}
                          transition={{ duration: 1.5, delay: 2 }}
                          fill="none"
                          stroke="url(#gradient)"
                          strokeWidth="1"
                          d="M0,10 Q10,15 20,10 T40,10 T60,10 T80,10 T100,10"
                          // vectorEffect="non-scaling-stroke"
                        />
                        <motion.path
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 0.3 }}
                          transition={{ duration: 1, delay: 2.5 }}
                          fill="url(#gradientFill)"
                          d="M0,18 L0,10 Q10,15 20,10 T40,10 T60,10 T80,10 T100,10 L100,18 Z"
                        />
                        <defs>
                          <linearGradient
                            id="gradient"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="0%"
                          >
                            <stop offset="0%" stopColor="#38bdf8" />
                            <stop offset="100%" stopColor="#818cf8" />
                          </linearGradient>
                          <linearGradient
                            id="gradientFill"
                            x1="0%"
                            y1="0%"
                            x2="0%"
                            y2="100%"
                          >
                            <stop offset="0%" stopColor="#38bdf8" />
                            <stop
                              offset="100%"
                              stopColor="#38bdf8"
                              stopOpacity="0"
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </motion.div>

                  {/* Crypto cards */}
                  <div className="grid grid-cols-1 gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 2.2 }}
                      whileHover={{
                        y: -5,
                        boxShadow: "0 10px 25px -5px rgba(56, 189, 248, 0.1)",
                      }}
                      className="h-24  rounded-md bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700/50   p-8 flex items-center justify-between transition-all duration-300"
                    >
                      <div className="flex items-center">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 10 }}
                          className="h-8 w-8 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center mr-2"
                        >
                          <svg
                            className="h-4 w-4 text-white"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </motion.div>
                        <div>
                          <div className="h-2 w-10 bg-zinc-700 rounded-full mb-1"></div>
                          <div className="h-2 w-6 bg-zinc-700 rounded-full"></div>
                        </div>
                      </div>
                      <motion.div
                        animate={{
                          width: ["30%", "60%", "40%"],
                        }}
                        transition={{
                          repeat: Number.POSITIVE_INFINITY,
                          duration: 5,
                          repeatType: "reverse",
                        }}
                        className="h-2 bg-cyan-500/20 rounded-full"
                      ></motion.div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 2.4 }}
                      whileHover={{
                        y: -5,
                        boxShadow: "0 10px 25px -5px rgba(168, 85, 247, 0.1)",
                      }}
                      className="h-24 rounded-md bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700/50 p-8 flex items-center justify-between transition-all duration-300"
                    >
                      <div className="flex items-center">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: -10 }}
                          className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 flex items-center justify-center mr-2"
                        >
                          <svg
                            className="h-4 w-4 text-white"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <circle
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M8 14s1.5 2 4 2 4-2 4-2"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <line
                              x1="9"
                              y1="9"
                              x2="9.01"
                              y2="9"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <line
                              x1="15"
                              y1="9"
                              x2="15.01"
                              y2="9"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </motion.div>
                        <div>
                          <div className="h-2 w-10 bg-zinc-700 rounded-full mb-1"></div>
                          <div className="h-2 w-6 bg-zinc-700 rounded-full"></div>
                        </div>
                      </div>
                      <motion.div
                        animate={{
                          width: ["40%", "20%", "50%"],
                        }}
                        transition={{
                          repeat: Number.POSITIVE_INFINITY,
                          duration: 6,
                          repeatType: "reverse",
                        }}
                        className="h-2 bg-purple-500/20 rounded-full"
                      ></motion.div>
                    </motion.div>
                  </div>

                  {/* Bottom controls */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.6 }}
                    className="grid grid-cols-3 gap-2"
                  >
                    <div className="h-8 rounded-md bg-zinc-800 flex items-center justify-center">
                      <div className="h-2 w-12 bg-zinc-700 rounded-full"></div>
                    </div>
                    <div className="h-8 rounded-md bg-zinc-800 flex items-center justify-center">
                      <div className="h-2 w-12 bg-zinc-700 rounded-full"></div>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="h-8 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center"
                    >
                      <div className="h-2 w-12 bg-white/20 rounded-full"></div>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Decorative elements */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 4,
              repeatType: "reverse",
            }}
            className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-cyan-500/20 blur-xl"
          ></motion.div>
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 5,
              repeatType: "reverse",
              delay: 1,
            }}
            className="absolute -top-6 -left-6 h-24 w-24 rounded-full bg-purple-500/10 blur-xl"
          ></motion.div>

          {/* Floating elements */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute -top-10 -right-10 h-20 w-20 rounded-full border border-zinc-700/50 backdrop-blur-sm bg-zinc-900/30"
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 5,
                repeatType: "reverse",
              }}
              className="h-full w-full"
            ></motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7, duration: 1 }}
            className="absolute -bottom-8 -left-8 h-16 w-16 rounded-full border border-zinc-700/50 backdrop-blur-sm bg-zinc-900/30"
          >
            <motion.div
              animate={{
                y: [0, 10, 0],
                rotate: [0, -5, 0],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 6,
                repeatType: "reverse",
              }}
              className="h-full w-full"
            ></motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="flex flex-col items-center  justify-center py-6 lg:pt-16 "
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="text-3xl text-center  font-bold tracking-tighter md:text-4xl/tight text-white"
          >
            Discover an{" "}
            <span className="bg-gradient-to-r underline underline-offset-4 decoration-2 decoration-cyan-400 from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              Unique
            </span>{" "}
            Dashboard Experience
          </motion.h2>
          <Button
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 border-0 relative overflow-hidden group h-12 w-60 mt-6"
            asChild
          >
            <Link className="flex items-center justify-center " href="/signup">
              Unlock Now <UnlockIcon className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
