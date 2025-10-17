"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useSound } from "@/components/sound-provider";

export function HeroSection() {
  const { playSound } = useSound();

  const scrollToNext = () => {
    playSound("whoosh");
    const nextSection = document.getElementById("features");
    nextSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="container-story py-16">
        <div className="mx-auto max-w-5xl text-center">
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-display mb-8 tracking-tight animate-fade-in"
          >
            sonic-ui
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-title-3 text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed font-light"
          >
            Sound-reactive components for React. Elegant motion and audio
            feedback. Built on shadcn/ui.
          </motion.p>

          {/* CTA Button - Electric Blue with Sound */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-20"
          >
            <button
              onClick={scrollToNext}
              onMouseEnter={() => playSound("hover")}
              className="btn-base btn-primary-electric group"
            >
              <span>Explore the Library</span>
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-col items-center gap-3"
          >
            <span className="text-tiny uppercase tracking-widest text-muted-foreground/60">
              Scroll
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-5 h-8 rounded-full border border-border/50 flex items-start justify-center p-1.5"
            >
              <div className="w-1 h-2 rounded-full bg-muted-foreground/40" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
