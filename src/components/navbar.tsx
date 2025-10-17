"use client";

import { useState, useEffect } from "react";
import { Menu, X, Music2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/theme-toggle";
import { SoundToggle } from "@/components/sound-toggle";
import { useSound } from "@/components/sound-provider";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { playSound } = useSound();

  const toggleMenu = () => {
    playSound("whoosh");
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Components", href: "/components" },
    { label: "Documentation", href: "/docs" },
  ];

  return (
    <>
      {/* Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo - Floating Button Style */}
          <motion.a
            href="/"
            className="glass-card px-6 py-3 flex items-center gap-2 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={() => playSound("hover")}
            onClick={() => playSound("click")}
          >
            <motion.div
              whileHover={{ rotate: 8 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Music2 className="w-6 h-6 text-primary dark:text-interactive transition-colors" />
            </motion.div>
            <span className="font-semibold text-foreground dark:group-hover:text-interactive text-lg hidden sm:inline transition-colors duration-200">
              sonic
              <span className="text-primary dark:text-interactive">-ui</span>
            </span>
          </motion.a>

          {/* Actions Cluster - Floating Button Style */}
          <div className="glass-card px-3 py-3 flex items-center gap-2">
            {/* GitHub Link */}
            <motion.a
              href="https://github.com/AshishBagdane/sonic-ui"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full hover:bg-muted dark:hover:bg-interactive/10 flex items-center justify-center transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onMouseEnter={() => playSound("hover")}
              onClick={() => playSound("click")}
              aria-label="GitHub"
            >
              <svg
                className="w-5 h-5 text-foreground dark:text-muted-foreground dark:hover:text-interactive transition-colors"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </motion.a>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Sound Toggle */}
            <SoundToggle />

            {/* Divider */}
            <div className="w-px h-6 bg-border" />

            {/* Menu Toggle */}
            <motion.button
              onClick={toggleMenu}
              className="w-10 h-10 rounded-full hover:bg-muted dark:hover:bg-interactive/10 flex items-center justify-center transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onMouseEnter={() => playSound("hover")}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-5 h-5 text-foreground dark:text-interactive" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-5 h-5 text-foreground" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl"
            onClick={toggleMenu}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="h-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Menu Items */}
              <nav className="flex flex-col items-center gap-6 md:gap-8">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-light text-foreground dark:hover:text-interactive hover:opacity-60 dark:hover:opacity-100 transition-all tracking-tight group relative"
                    onClick={() => {
                      playSound("click");
                      toggleMenu();
                    }}
                    onMouseEnter={() => playSound("hover")}
                    whileHover={{ x: 10 }}
                  >
                    {link.label}
                    {/* Subtle underline on hover */}
                    <motion.div
                      className="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary dark:bg-interactive origin-left"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.a>
                ))}
              </nav>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="mt-12 md:mt-16 flex flex-col sm:flex-row gap-4"
              >
                <motion.a
                  href="/components"
                  className="btn-base btn-primary-electric text-base md:text-lg px-8 py-3 font-normal min-w-[180px]"
                  onClick={() => {
                    playSound("click");
                    toggleMenu();
                  }}
                  onMouseEnter={() => playSound("hover")}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Components
                </motion.a>
                <motion.a
                  href="https://github.com/AshishBagdane/sonic-ui"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-base bg-secondary text-foreground hover:bg-secondary/80 text-base md:text-lg px-8 py-3 font-normal min-w-[180px]"
                  onClick={() => playSound("click")}
                  onMouseEnter={() => playSound("hover")}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Star on GitHub
                </motion.a>
              </motion.div>

              {/* Bottom Info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.8 }}
                className="absolute bottom-12 text-center"
              >
                <p className="text-muted-foreground text-sm">
                  Built with shadcn/ui + Framer Motion
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
