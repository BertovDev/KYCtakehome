"use client";

import HeroSection from "@/components/landing/HeroSection";
import NavBar from "@/components/landing/Navbar";
import { useState } from "react";
import SignUpModal from "@/components/landing/SignUpModal";

export default function Home() {
  const [start, setStart] = useState(true);

  return (
    <main className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <NavBar />
        <div className="mt-12 md:mt-16">
          <HeroSection />
        </div>
      </div>

      {start && <SignUpModal setStart={setStart} />}
    </main>
  );
}
