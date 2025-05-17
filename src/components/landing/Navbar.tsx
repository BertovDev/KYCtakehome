"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { motion } from "framer-motion";
import { Button } from "../ui/button";

const navItems = [
  { name: "Dashboard", href: "#dashboard" },
  { name: "Products", href: "#products" },
  { name: "Solutions", href: "#solutions" },
  { name: "Pricing", href: "#pricing" },
  { name: "Features", href: "#features" },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariant = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionId = section.getAttribute("id") || "";

        if (
          sectionTop < window.innerHeight / 2 &&
          sectionTop > -window.innerHeight / 2
        ) {
          setActiveSection(sectionId.toLowerCase());
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      variants={container}
      initial="hidden"
      animate="show"
      className=" rounded-xl shadow-sm py-4 px-6 border-b border-zinc-800 bg-black/80 backdrop-blur-md sticky top-0 z-50"
    >
      <div className="flex items-center justify-between">
        <div className="flex-shrink-0">
          <Link href="/" className="text-xl font-bold">
            Cryptiva
          </Link>
        </div>

        <div className="hidden md:flex items-center justify-center flex-1 mx-10">
          <div className="text-white rounded-full px-4 py-1.5 flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                variants={itemVariant}
                className={`text-sm font-medium text-white hover:underline hover:underline-offset-4 hover:transition-all hover:duration-300 ${
                  activeSection === item.name.toLowerCase()
                    ? "text-white underline underline-offset-4 "
                    : "text-zinc-100"
                }`}
              >
                <Link href={item.href}>{item.name}</Link>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.7 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:flex"
          >
            <Button
              size="sm"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0 relative overflow-hidden group"
              asChild
            >
              <Link href="/signup">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></span>
                <span className="relative z-10">Get Started</span>
              </Link>
            </Button>
          </motion.div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button className="p-2 rounded-full hover:scale-110 transition-all md:hidden">
                <Menu className="h-5 w-5 text-gray-200" />
              </button>
            </SheetTrigger>
            <SheetContent side="top" className="bg-black">
              <div className="flex flex-col justify-between h-full mt-2">
                <div className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-lg font-medium text-gray-200 hover:text-white transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0 relative overflow-hidden group"
                  asChild
                >
                  <Link href="/signup">
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></span>
                    <span className="relative z-10">Get Started</span>
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
}
