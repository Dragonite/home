"use client"

import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X, Home } from "lucide-react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import ContactContent from "@/components/contact/content";
import { useSheet } from "@/contexts/sheet";

const navigationItems = [
  { name: "Projects", link: "/projects" },
  { name: "Achievements", link: "/achievements" },
  { name: "Blog", link: "/blog" },
]

const NavigationBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { isOpen, openSheet, closeSheet } = useSheet()

  return (
    <Sheet open={isOpen} onOpenChange={closeSheet}>
      {/* Desktop Navigation */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 hidden sm:block">
        <div className="flex items-center space-x-1 bg-white/10 backdrop-blur-xl border border-white/10 rounded-full px-2 py-2 shadow-2xl shadow-black/25">
          <Button
            asChild
            key="Home"
            variant="ghost"
            className="hover:text-white hover:bg-white/10 rounded-full px-4 py-2 transition-all duration-200 border-0"
          >
            <Link href="/" className="flex items-center">
              <Home size={20} />
            </Link>
          </Button>
          {navigationItems.map((item) => (
            <Button
              asChild
              key={item.name}
              variant="ghost"
              className="text-white/90 hover:text-white hover:bg-white/10 rounded-full px-4 py-2 transition-all duration-200 border-0"
            >
              <Link href={item.link}>
                {item.name}
              </Link>
            </Button>
          ))}
          <Button
            key="Contact"
            variant="secondary"
            onClick={openSheet}
            className="hover:text-white hover:bg-white/10 rounded-full px-4 py-2 transition-all duration-200 border-0"
          >
            Contact
          </Button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="fixed top-4 left-4 z-50 sm:hidden">
        <Button
          variant="ghost"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-full p-3 shadow-2xl shadow-black/25 text-white/90 hover:text-white hover:bg-white/10"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </Button>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="absolute top-12 left-0 bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl shadow-black/25 min-w-[200px]">
            <div className="flex flex-col space-y-2">
              <Button
                asChild
                key="Home"
                variant="ghost"
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-white hover:bg-white/10 rounded-full px-4 py-2 transition-all duration-200 border-0"
              >
                <Link href="/" className="flex items-center">
                  Home
                </Link>
              </Button>
              {navigationItems.map((item) => (
                <Button
                  asChild
                  key={item.name}
                  variant="ghost"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white/90 hover:text-white hover:bg-white/10 rounded-xl px-4 py-3 transition-all duration-200 border-0 text-center"
                >
                  <Link href={item.link}>
                    {item.name}
                  </Link>
                </Button>
              ))}
              <Button
                key="Contact"
                onClick={() => {
                  setIsMobileMenuOpen(false)
                  openSheet()
                }}
                variant="secondary"
                className="hover:text-white hover:bg-white/10 rounded-full px-4 py-2 transition-all duration-200 border-0"
              >
                Contact
              </Button>
            </div>
          </div>
        )}
      </nav>
      
      <SheetContent>
        <SheetHeader className="h-full">
          <SheetTitle>Contact me</SheetTitle>
          <SheetDescription asChild>
            <ContactContent />
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}

export default NavigationBar;