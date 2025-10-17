"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface SoundContextType {
  enabled: boolean;
  volume: number;
  toggleSound: () => void;
  setVolume: (volume: number) => void;
  playSound: (soundName: keyof typeof sounds) => void;
}

const SoundContext = createContext<SoundContextType | undefined>(undefined);

// Sound file paths - Add your Uppbeat sounds here
const sounds = {
  click: "/sounds/click.mp3",
  hover: "/sounds/hover.mp3",
  success: "/sounds/success.mp3",
  whoosh: "/sounds/whoosh.mp3",
  button: "/sounds/button.mp3",
};

export function SoundProvider({ children }: { children: React.ReactNode }) {
  const [enabled, setEnabled] = useState(true);
  const [volume, setVolume] = useState(0.5);
  const [audioElements, setAudioElements] = useState<
    Record<string, HTMLAudioElement>
  >({});
  const [loadedSounds, setLoadedSounds] = useState<Set<string>>(new Set());

  useEffect(() => {
    // Initialize audio elements
    const elements: Record<string, HTMLAudioElement> = {};
    const loaded = new Set<string>();

    Object.entries(sounds).forEach(([key, path]) => {
      const audio = new Audio();
      audio.volume = volume;
      audio.preload = "auto";

      // Track which sounds successfully load
      audio.addEventListener("canplaythrough", () => {
        loaded.add(key);
        setLoadedSounds(new Set(loaded));
      });

      // Handle errors silently
      audio.addEventListener("error", (e) => {
        console.warn(
          `Sound file not found: ${path}. Add sound files to /public/sounds/ directory.`
        );
      });

      // Set source after event listeners
      audio.src = path;
      elements[key] = audio;
    });

    setAudioElements(elements);

    return () => {
      // Cleanup
      Object.values(elements).forEach((audio) => {
        audio.pause();
        audio.src = "";
      });
    };
  }, []);

  useEffect(() => {
    // Update volume for all audio elements
    Object.values(audioElements).forEach((audio) => {
      audio.volume = volume;
    });
  }, [volume, audioElements]);

  const toggleSound = () => {
    setEnabled(!enabled);
  };

  const playSound = (soundName: keyof typeof sounds) => {
    if (!enabled) return;

    const audio = audioElements[soundName];
    if (audio && loadedSounds.has(soundName)) {
      audio.currentTime = 0;
      audio.play().catch((error) => {
        // Silently handle play errors
        console.debug("Audio play prevented:", error.message);
      });
    }
  };

  return (
    <SoundContext.Provider
      value={{ enabled, volume, toggleSound, setVolume, playSound }}
    >
      {children}
    </SoundContext.Provider>
  );
}

export function useSound() {
  const context = useContext(SoundContext);
  if (context === undefined) {
    throw new Error("useSound must be used within a SoundProvider");
  }
  return context;
}
