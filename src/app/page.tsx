"use client";

import NavBar from "@/components/landing/Navbar";
import DashboardMock from "@/components/landing/DashboardMock";
import HeroSection from "@/components/landing/HeroSection";
import Products from "@/components/landing/Products";
import Solutions from "@/components/landing/Solutions";
import Pricing from "@/components/landing/Pricing";
import Features from "@/components/landing/Features";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <>
      <div className="flex min-h-screen flex-col bg-black text-white">
        {/* Background animation elements */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-pulse"></div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-pulse"></div>
          </div>
          <div className="absolute top-1/4 -left-20 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl animate-blob"></div>
          <div className="absolute bottom-1/4 -right-20 h-40 w-40 rounded-full bg-purple-500/10 blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-60 w-60 rounded-full bg-blue-500/5 blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <NavBar />

        <main className="flex-1">
          <div className="absolute  inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(56,182,255,0.1),transparent_40%)] pointer-events-none"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(124,58,237,0.15),transparent_50%)] pointer-events-none"></div>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>

          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIHN0cm9rZT0icmdiYSg1NiwgMTg5LCAyNDgsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjAuNSI+PHBhdGggZD0iTTYwIDBoLTJ2NjBoMnpNMCAwdjYwaDJ2LTYwek0wIDYwaDYwdi0ySDB6TTAgMGg2MHYySDB6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30 pointer-events-none"></div>

          <HeroSection />

          <DashboardMock />

          <Products />

          <Solutions />

          <Pricing />

          <Features />
        </main>
        <Footer />
      </div>
    </>
  );
}
