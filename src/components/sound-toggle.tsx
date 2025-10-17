"use client";

import { Volume2, VolumeX } from "lucide-react";
import { useSound } from "@/components/sound-provider";

export function SoundToggle() {
  const { enabled, toggleSound, playSound } = useSound();

  const handleToggle = () => {
    if (enabled) {
      // Play sound before disabling
      playSound("click");
    }
    toggleSound();
  };

  return (
    <button
      onClick={handleToggle}
      className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-secondary transition-all duration-200"
      aria-label="Toggle sound"
      title={enabled ? "Mute sounds" : "Enable sounds"}
    >
      {enabled ? (
        <Volume2 className="w-5 h-5" />
      ) : (
        <VolumeX className="w-5 h-5 text-muted-foreground" />
      )}
    </button>
  );
}
