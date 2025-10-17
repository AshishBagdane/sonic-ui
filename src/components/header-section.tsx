"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { SoundToggle } from "@/components/sound-toggle";

export function HeaderSection() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#features", label: "Features" },
    { href: "#demo", label: "Demo" },
    { href: "#installation", label: "Installation" },
    { href: "#documentation", label: "Docs" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
        <div className="container-story">
          <div className="flex items-center justify-between h-20 sm:h-24">
            {/* Left: Logo as Floating Button */}
            <motion.a
              href="#"
              className="pointer-events-auto flex items-center gap-2 rounded-full border border-border bg-card backdrop-blur-xl px-4 py-2 hover:bg-secondary transition-all duration-200 shadow-sm hover:shadow-md"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex items-center justify-center h-6 w-6 rounded-md bg-interactive-glow border border-interactive/20">
                <svg
                  className="h-4 w-4 text-interactive"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                  />
                </svg>
              </div>
              <span className="text-sm font-medium tracking-tight">
                sonic-ui
              </span>
            </motion.a>

            {/* Right: Actions Cluster as Floating Button */}
            <motion.div
              className="pointer-events-auto flex items-center gap-2 rounded-full border border-border bg-card backdrop-blur-xl p-1 shadow-sm"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {/* Sound Toggle */}
              <div className="flex items-center">
                <SoundToggle />
              </div>

              {/* Divider */}
              <div className="h-6 w-px bg-border" />

              {/* Theme Toggle */}
              <div className="flex items-center">
                <ThemeToggle />
              </div>

              {/* Divider */}
              <div className="h-6 w-px bg-border" />

              {/* Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-secondary transition-all duration-200"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Full-Screen Menu Overlay */}
      {isMobileMenuOpen && (
        <motion.div
          className="fixed inset-0 z-40 glass-card"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <nav className="h-full flex flex-col items-center justify-center gap-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="text-title-1 hover:text-interactive transition-colors tracking-tight"
                onClick={() => setIsMobileMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
              >
                {link.label}
              </motion.a>
            ))}

            {/* Additional Links in Menu */}
            <motion.div
              className="mt-8 flex flex-col items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-body link-interactive"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                GitHub
              </a>
              <a
                href="#"
                className="text-body link-interactive"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Storybook
              </a>
            </motion.div>
          </nav>
        </motion.div>
      )}
    </>
  );
}
