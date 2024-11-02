'use client'
import '@/app/globals.css';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

const contact = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b border-emerald-800">
        <Link href="/" className="text-lg font-bold text-emerald-500">TokenizedBiz</Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-emerald-500 transition-colors" href="/">
            Home
          </Link>
          <Link className="text-sm font-medium hover:text-emerald-500 transition-colors" href="/marketplace">
            Marketplace
          </Link>
          <Link className="text-sm font-medium hover:text-emerald-500 transition-colors" href="/about">
            About
          </Link>
          <Link className="text-sm font-medium text-emerald-500 transition-colors" href="/contact">
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
                  Contact Us
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Have questions or need assistance? We're here to help.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-emerald-900/20">
          <div className="container mx-auto px-4">
            <div className="grid gap-10 sm:grid-cols-2">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-emerald-300">Get in Touch</h2>
                <p className="text-gray-400">
                  Fill out the form below, and we'll get back to you as soon as possible.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Mail className="h-4 w-4 text-emerald-500" />
                    <span>info@tokenizedbiz.com</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Phone className="h-4 w-4 text-emerald-500" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400">
                    <MapPin className="h-4 w-4 text-emerald-500" />
                    <span>123 Blockchain Street, Crypto City, CC 12345</span>
                  </div>
                </div>
              </div>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-emerald-300">Name</Label>
                  <Input id="name" placeholder="Your name" className="bg-emerald-900/20 border-emerald-500 text-white" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-emerald-300">Email</Label>
                  <Input id="email" placeholder="Your email" type="email" className="bg-emerald-900/20 border-emerald-500 text-white" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-emerald-300">Message</Label>
                  <Textarea id="message" placeholder="Your message" className="bg-emerald-900/20 border-emerald-500 text-white" />
                </div>
                <Button type="submit" className="w-full bg-emerald-500 text-black hover:bg-emerald-600">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-emerald-800">
        <p className="text-xs text-gray-400">© 2024 TokenizedBiz. All rights reserved.</p>
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
export default contact;