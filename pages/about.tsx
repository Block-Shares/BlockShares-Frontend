'use client'

import '@/app/globals.css';
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Briefcase, Globe, Shield } from "lucide-react"

const about = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b border-emerald-800">
        <Link href="/" className="text-lg font-bold text-emerald-500">Block Shares</Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-emerald-500 transition-colors" href="/">
            Home
          </Link>
          <Link className="text-sm font-medium hover:text-emerald-500 transition-colors" href="/marketplace">
            Marketplace
          </Link>
          <Link className="text-sm font-medium text-emerald-500 transition-colors" href="/about">
            About
          </Link>
          <Link className="text-sm font-medium hover:text-emerald-500 transition-colors" href="/contact">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-emerald-500">
                  About BlockShares
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Revolutionizing business ownership through blockchain technology and tokenization.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-emerald-900/20">
          <div className="container mx-auto px-4">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 text-center">
                <Briefcase className="h-12 w-12 text-emerald-500" />
                <h2 className="text-2xl font-bold text-emerald-300">Our Mission</h2>
                <p className="text-gray-400">
                  To democratize business ownership and investment opportunities through innovative blockchain solutions.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <Globe className="h-12 w-12 text-emerald-500" />
                <h2 className="text-2xl font-bold text-emerald-300">Global Reach</h2>
                <p className="text-gray-400">
                  Connecting businesses with investors worldwide, breaking down geographical barriers.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <Shield className="h-12 w-12 text-emerald-500" />
                <h2 className="text-2xl font-bold text-emerald-300">Security First</h2>
                <p className="text-gray-400">
                  Leveraging blockchain technology to ensure transparent, secure, and efficient transactions.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-emerald-500">Join the Revolution</h2>
                <p className="mx-auto max-w-[600px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Whether you're a business looking to tokenize or an investor seeking new opportunities, Blockshares is here to help you succeed.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <Button asChild className="w-full bg-emerald-500 text-black hover:bg-emerald-600">
                  <Link href="/contact">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-emerald-800">
        <p className="text-xs text-gray-400">© 2024 Blockshares. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 text-gray-400" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-gray-400" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}
export default about;
