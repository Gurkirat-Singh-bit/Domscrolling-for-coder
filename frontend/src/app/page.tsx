'use client';

import Hero from "@/components/ui/neural-network-hero";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black">
      <Navbar />
      
      <Hero
        title="Scroll better. Learn faster."
        description="Domscrolling curates short, focused coding reels — the best ideas, libraries, and techniques for devs that are worth your attention."
        badgeText="Curated for coders"
        badgeLabel="Beta"
        ctaButtons={[
          { text: "Join the feed", href: "/register", primary: true },
          { text: "See how it works", href: "#how-it-works" }
        ]}
        microDetails={["Short clips", "High signal", "Daily refresh"]}
      />

      {/* Right-side image placeholder (visible on large screens) */}
      <div className="pointer-events-none hidden lg:flex absolute top-1/2 right-12 z-10 -translate-y-1/2">
        <div className="w-80 h-96 rounded-2xl border border-white/6 bg-gradient-to-br from-white/5 to-white/2 p-4 flex items-center justify-center">
          <div className="text-sm text-white/70">Preview (image / mockup will go here)</div>
        </div>
      </div>
    </main>
  );
}
