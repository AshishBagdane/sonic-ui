"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2 } from "lucide-react";

/**
 * InitialLoader Component
 *
 * Apple-inspired startup loader for sonic-ui landing page.
 * Features elegant animations, sound wave visualization, and startup sound.
 * Shows only on first visit per session.
 *
 * @example
 * ```tsx
 * <InitialLoader />
 * ```
 */
export function InitialLoader() {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldShow, setShouldShow] = useState(false);

  useEffect(() => {
    // Check if this is the first visit in this session
    const hasVisited = sessionStorage.getItem("sonic-ui-visited");

    if (!hasVisited) {
      setShouldShow(true);
      setIsVisible(true);
      sessionStorage.setItem("sonic-ui-visited", "true");

      // Play startup sound
      // In production, use use-sound or Howler.js
      // const audio = new Audio('/sounds/startup.mp3');
      // audio.volume = 0.3;
      // audio.play().catch(() => {});

      // Auto-hide after animation completes
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 3200);

      return () => clearTimeout(timer);
    }
  }, []);

  // Don't render anything if shouldn't show
  if (!shouldShow) {
    return null;
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background"
        >
          {/* Radial gradient background */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1.5, opacity: 0.15 }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-radial from-interactive/20 to-transparent blur-3xl"
            />
          </div>

          {/* Main content container */}
          <div className="relative flex flex-col items-center gap-12">
            {/* Sound wave visualization */}
            <div className="relative flex items-center justify-center gap-1.5 h-24">
              {[0, 1, 2, 3, 4].map((index) => (
                <motion.div
                  key={index}
                  initial={{ scaleY: 0.3 }}
                  animate={{
                    scaleY: [0.3, 1, 0.5, 1, 0.3],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: 1,
                    ease: "easeInOut",
                    delay: index * 0.1,
                  }}
                  className="w-1.5 h-full rounded-full origin-center"
                  style={{
                    background:
                      "linear-gradient(to top, var(--interactive), var(--interactive-hover))",
                    boxShadow: "0 0 20px var(--interactive-glow)",
                  }}
                />
              ))}
            </div>

            {/* Logo and text */}
            <div className="flex flex-col items-center gap-6">
              {/* Logo icon */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.34, 1.56, 0.64, 1],
                  delay: 0.3,
                }}
              >
                <div className="relative">
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 rounded-2xl bg-interactive/20 blur-xl"
                  />
                  <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-interactive to-interactive-hover flex items-center justify-center shadow-lg">
                    <Volume2 className="w-10 h-10 text-white" strokeWidth={2} />
                  </div>
                </div>
              </motion.div>

              {/* Brand name */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  ease: [0.4, 0, 0.2, 1],
                  delay: 0.8,
                }}
                className="flex flex-col items-center gap-2"
              >
                <h1 className="text-4xl font-bold tracking-tight">
                  sonic
                  <span className="text-interactive">-ui</span>
                </h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.4 }}
                  className="text-sm text-muted-foreground font-medium"
                >
                  Sound-Reactive Components
                </motion.p>
              </motion.div>
            </div>

            {/* Loading dots */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.3 }}
              className="flex items-center gap-2"
            >
              {[0, 1, 2].map((index) => (
                <motion.div
                  key={index}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2,
                  }}
                  className="w-2 h-2 rounded-full bg-interactive"
                />
              ))}
            </motion.div>
          </div>

          {/* Bottom hint text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: 2,
            }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            <p className="text-xs text-muted-foreground/60 font-medium">
              Initializing audio experience...
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
