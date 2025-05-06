"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sun, Menu, X } from "lucide-react"
import { useState } from "react"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold text-xl">DevLab Solutions</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="/" className="transition-colors hover:text-primary">
            Home
          </Link>
          <Link href="/projects" className="transition-colors hover:text-primary">
            Projects
          </Link>
          <Link href="/services" className="transition-colors hover:text-primary">
            Services
          </Link>
          <Link href="/reviews" className="transition-colors hover:text-primary">
            Reviews
          </Link>
          <Link href="/about" className="transition-colors hover:text-primary">
            About
          </Link>
          <Link href="/team" className="transition-colors hover:text-primary">
            Team
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Sun className="h-4 w-4" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Button variant="gradient" size="sm" asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border/40">
          <div className="container py-4 space-y-4">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="transition-colors hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
              <Link
                href="/projects"
                className="transition-colors hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="/services"
                className="transition-colors hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/reviews"
                className="transition-colors hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Reviews
              </Link>
              <Link
                href="/about"
                className="transition-colors hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/team"
                className="transition-colors hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Team
              </Link>
              <Link
                href="/contact"
                className="transition-colors hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

