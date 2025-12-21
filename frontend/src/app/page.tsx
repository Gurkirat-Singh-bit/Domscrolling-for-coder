/**
 * @license MIT License
 * @author Gurkirat Singh
 * @file page.tsx
 * @file Landing page for the application showing hero, features, and footer.
 */

'use client';

import Hero from "@/components/ui/neural-network-hero";
import { Iphone } from "@/components/ui/iphone"
import Navbar from "@/components/layout/Navbar";
import { FeaturesSectionWithHoverEffects } from "@/components/blocks/feature-section-with-hover-effects";
import { About3 } from "@/components/ui/about-3";
import { Footer } from "@/components/ui/footer";
import Image from "next/image";
import { useEffect } from "react";
import Lenis from '@studio-freight/lenis';
import { Github } from "lucide-react";

/**
 * Renders the landing page with hero, features, and footer.
 * @returns {JSX.Element} The home page element.
 */
export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="relative min-h-screen bg-black">
      <Navbar />
      
      <div className="relative">
        <Hero
          title="Scroll better. Learn faster."
          description="Domscrolling curates short, focused coding reels — the best ideas, libraries, and techniques for devs that are worth your attention."
          badgeText="Curated for coders"
          badgeLabel="Beta"
          ctaButtons={[
            { text: "Join the feed", href: "/", primary: true },
            { text: "See how it works", href: "#how-it-works" }
          ]}
          microDetails={["Short clips", "High signal", "Daily refresh"]}
        />

        {/* Right-side mobile mockup with sample screenshot */}
        <div className="pointer-events-none lg:flex absolute top-[14%] right-28 z-10 md:block hidden">
          <div className="relative w-[200px] h-[400px] md:w-[260px] md:h-[520px] lg:w-80 lg:h-[600px] rounded-[2rem] border-2 border-white/10 bg-black overflow-hidden shadow-2xl">
            <Iphone src="/sample-images/Screenshot_2025-04-07-10-47-25-976_com.instagram.android.jpg" />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="relative w-full bg-black py-20 scale-90">
        <FeaturesSectionWithHoverEffects />
      </section>

      {/* About Section */}
      <About3 />

      {/* Footer */}
      <Footer
        logo={
          <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        }
        brandName="Domscrolling"
        socialLinks={[
          {
            icon: <Github className="h-5 w-5" />,
            href: "https://github.com/Gurkirat-Singh-bit/Domscrolling-for-coder",
            label: "GitHub",
          },
        ]}
        mainLinks={[
          { href: "#how-it-works", label: "How it works" },
          { href: "#features", label: "Features" },
          { href: "#about", label: "About" },
          { href: "/register", label: "Join" },
        ]}
        legalLinks={[
          { href: "/privacy", label: "Privacy" },
          { href: "/terms", label: "Terms" },
        ]}
        copyright={{
          text: "© 2025 Domscrolling",
          license: "Built for coders, by coders",
        }}
      />
    </main>
  );
}
