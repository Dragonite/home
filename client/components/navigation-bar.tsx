"use client"

import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react"

const navigationItems = [{ name: "Projects" }, { name: "Achievements" }, { name: "Blog" }, { name: "About" }]

const NavigationBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 hidden sm:block">
        <div className="flex items-center space-x-1 bg-white/10 backdrop-blur-xl border border-white/10 rounded-full px-6 py-2 shadow-2xl shadow-black/25">
          {navigationItems.map((item) => (
            <Button
              key={item.name}
              variant="ghost"
              className="text-white/90 hover:text-white hover:bg-white/10 rounded-full px-4 py-2 transition-all duration-200 border-0"
            >
              {item.name}
            </Button>
          ))}
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
              {navigationItems.map((item) => (
                <Button
                  key={item.name}
                  variant="ghost"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white/90 hover:text-white hover:bg-white/10 rounded-xl px-4 py-3 transition-all duration-200 border-0 justify-start"
                >
                  {item.name}
                </Button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  )
}

export default NavigationBar;