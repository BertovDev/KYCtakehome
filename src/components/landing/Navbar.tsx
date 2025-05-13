"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  { name: "Sell / Buy", href: "/signup" },
  { name: "Connect", href: "/signup" },
  { name: "Sign Up", href: "/signup" },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white rounded-xl shadow-sm py-4 px-6">
      <div className="flex items-center justify-between">
        <div className="flex-shrink-0">
          <Link href="/" className="text-xl font-bold">
            Viniltify
          </Link>
        </div>

        <div className="hidden md:flex items-center justify-center flex-1 mx-10">
          <div className="bg-gray-100 rounded-full px-4 py-1.5 flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
            <Search className="h-5 w-5 text-gray-700" />
          </button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button className="p-2 rounded-full hover:bg-gray-100 transition-colors md:hidden">
                <Menu className="h-5 w-5 text-gray-700" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white">
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-lg font-medium text-gray-700 hover:text-gray-900 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>

          {/* Desktop menu button */}
          <button className="hidden md:block p-2 rounded-full hover:bg-gray-100 transition-colors">
            <Menu className="h-5 w-5 text-gray-700" />
          </button>
        </div>
      </div>
    </nav>
  );
}
