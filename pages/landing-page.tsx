"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowRight,
  BarChart2,
  Building2,
  Globe,
  Search,
  Wallet,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
// import { MarketplaceComponent } from "./marketplace"

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
}

const ParticleAnimation = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const particleCount = 50;
    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 4 + 1,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-emerald-500 opacity-20"
          style={{
            width: particle.size,
            height: particle.size,
            left: particle.x,
            top: particle.y,
          }}
          animate={{
            x: [particle.x, particle.x + Math.random() * 100 - 50],
            y: [particle.y, particle.y + Math.random() * 100 - 50],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}
    </div>
  );
};

export default ParticleAnimation;

export function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <ParticleAnimation />
      <header className="px-4 lg:px-6 h-14 flex items-center z-10">
        <Link className="flex items-center justify-center" href="#">
          <Wallet className="h-6 w-6 text-emerald-500" />
          <span className="ml-2 text-lg font-bold text-emerald-500">
            BlockShares
          </span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:text-emerald-500 transition-colors"
            href="/marketplace"
          >
            Marketplace
          </Link>
          <Link
            className="text-sm font-medium hover:text-emerald-500 transition-colors"
            href="/business"
          >
            For Businesses
          </Link>
          <Link
            className="text-sm font-medium hover:text-emerald-500 transition-colors"
            href="/about"
          >
            About
          </Link>
          <Link
            className="text-sm font-medium hover:text-emerald-500 transition-colors"
            href="/contact"
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1 z-10">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-emerald-500">
                  Revolutionize Business Ownership
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                  Tokenize your business, democratize investment, and unlock new
                  opportunities with RWA and ERC-404 tokens.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-emerald-500 text-black hover:bg-emerald-600">
                  Get Started
                </Button>
                <Button
                  variant="outline"
                  className="border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-black"
                >
                  <Link
                    className="text-sm font-medium transition-colors"
                    href="https://block-shares.gitbook.io/block-shares/"
                  >
                      Learn More
                  </Link>
                
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-emerald-900/20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-emerald-500">
              How It Works
            </h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center space-y-4 text-center">
                <Building2 className="h-12 w-12 text-emerald-500" />
                <h3 className="text-xl font-bold text-emerald-300">
                  Tokenize Your Business
                </h3>
                <p className="text-gray-300">
                  Convert a fraction of your business into ERC-404 tokens,
                  representing shares in your company.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <Globe className="h-12 w-12 text-emerald-500" />
                <h3 className="text-xl font-bold text-emerald-300">
                  List on Marketplace
                </h3>
                <p className="text-gray-300">
                  After vetting, your business tokens become available to a
                  global pool of investors.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <BarChart2 className="h-12 w-12 text-emerald-500" />
                <h3 className="text-xl font-bold text-emerald-300">
                  Grow Together
                </h3>
                <p className="text-gray-300">
                  Investors buy tokens, becoming shareholders. Your business
                  gains capital and a network of supporters.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-emerald-500">
              Explore Opportunities
            </h2>
            <Tabs defaultValue="trending" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-emerald-900/20">
                <TabsTrigger
                  value="trending"
                  className="data-[state=active]:bg-emerald-500 data-[state=active]:text-black"
                >
                  Trending
                </TabsTrigger>
                <TabsTrigger
                  value="new"
                  className="data-[state=active]:bg-emerald-500 data-[state=active]:text-black"
                >
                  New Listings
                </TabsTrigger>
                <TabsTrigger
                  value="sectors"
                  className="data-[state=active]:bg-emerald-500 data-[state=active]:text-black"
                >
                  Sectors
                </TabsTrigger>
              </TabsList>
              <TabsContent value="trending">
                <div className="grid gap-6 lg:grid-cols-3 lg:gap-12 mt-6">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="flex flex-col space-y-2 bg-emerald-900/20 p-6 rounded-lg shadow-md"
                    >
                      <h3 className="text-xl font-bold text-emerald-300">
                        TechCorp Inc.
                      </h3>
                      <p className="text-sm text-gray-300">
                        Software Development
                      </p>
                      <div className="flex justify-between items-center mt-4">
                        <span className="text-lg font-semibold text-emerald-500">
                          $1,250 / token
                        </span>
                        <Button
                          size="sm"
                          className="bg-emerald-500 text-black hover:bg-emerald-600"
                        >
                          Invest
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="new">
                <div className="text-center py-12 text-emerald-300">
                  New listings coming soon...
                </div>
              </TabsContent>
              <TabsContent value="sectors">
                <div className="text-center py-12 text-emerald-300">
                  Sector breakdown coming soon...
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-emerald-900/20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-emerald-500">
                  Ready to Transform Your Business?
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join the future of business ownership and investment. Apply to
                  list your business or start investing today.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input
                    className="max-w-lg flex-1 bg-black text-white border-emerald-500 focus:ring-emerald-500"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button
                    type="submit"
                    className="bg-emerald-500 text-black hover:bg-emerald-600"
                  >
                    Subscribe
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
                <p className="text-xs text-gray-400">
                  By subscribing, you agree to our Terms of Service and Privacy
                  Policy.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-emerald-800 z-10">
        <p className="text-xs text-gray-400">
          © 2024 Blockshares. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-xs hover:text-emerald-500 transition-colors"
            href="#"
          >
            Terms of Service
          </Link>
          <Link
            className="text-xs hover:text-emerald-500 transition-colors"
            href="#"
          >
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
