"use client";

import React, { useState } from "react";
import {
  Volume2,
  VolumeX,
  Settings,
  Music,
  Sliders,
  FolderOpen,
  FileAudio,
  Zap,
  AlertCircle,
} from "lucide-react";
import { CodeBlock, PropsTable, InfoBox, InteractiveDemo } from "./shared";

export default function SoundSystemSection() {
  const [volume, setVolume] = useState(0.5);
  const [soundEnabled, setSoundEnabled] = useState(true);

  return (
    <div id="sound-system" className="space-y-16 scroll-mt-20">
      {/* Hero */}
      <div className="space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-interactive/10 text-interactive text-sm font-medium">
          <Volume2 className="w-4 h-4" />
          <span>Sound System • Core Features</span>
        </div>

        <div className="space-y-4">
          <h1 className="text-display font-bold tracking-tight">
            Sound System
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Learn how sonic-ui&apos;s sound system works. Control audio playback
            globally, customize sounds per component, and respect user
            accessibility preferences.
          </p>
        </div>
      </div>

      {/* Sound Provider */}
      <section id="sound-provider" className="space-y-6 scroll-mt-20">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Settings className="w-6 h-6 text-interactive" />
            <h2 className="text-title-2 font-semibold">SoundProvider</h2>
          </div>
          <p className="text-muted-foreground">
            The SoundProvider is a React context that manages sound playback
            globally.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-title-3 font-semibold">Basic Usage</h3>

          <CodeBlock
            filename="app/layout.tsx"
            language="tsx"
            code={`import { SoundProvider } from '@/components/sound-provider';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <SoundProvider>
          {children}
        </SoundProvider>
      </body>
    </html>
  );
}`}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-title-3 font-semibold">API Reference</h3>
          <PropsTable
            data={[
              {
                prop: "enabled",
                type: "boolean",
                default: "true",
                description: "Whether sounds are currently enabled globally",
              },
              {
                prop: "volume",
                type: "number",
                default: "0.5",
                description: "Global volume level (0.0 to 1.0)",
              },
              {
                prop: "toggleSound",
                type: "() => void",
                description: "Function to toggle sound on/off",
              },
              {
                prop: "setVolume",
                type: "(volume: number) => void",
                description: "Function to update the global volume",
              },
              {
                prop: "playSound",
                type: "(soundName: SoundName) => void",
                description: "Function to play a specific sound",
              },
            ]}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-title-3 font-semibold">
            Using the useSound Hook
          </h3>

          <CodeBlock
            filename="components/my-component.tsx"
            language="tsx"
            code={`"use client";

import { useSound } from '@/components/sound-provider';

export function MyComponent() {
  const { enabled, playSound, toggleSound } = useSound();

  const handleClick = () => {
    playSound("click");
  };

  return (
    <button onClick={handleClick}>
      Play Sound
    </button>
  );
}`}
          />
        </div>

        <InfoBox type="info" title="Automatic Accessibility">
          <p>
            The SoundProvider automatically respects user preferences. Sounds
            will be silently skipped if audio files fail to load.
          </p>
        </InfoBox>
      </section>

      {/* Sound Toggle */}
      <section id="sound-toggle" className="space-y-6 scroll-mt-20">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <VolumeX className="w-6 h-6 text-interactive" />
            <h2 className="text-title-2 font-semibold">SoundToggle</h2>
          </div>
          <p className="text-muted-foreground">
            A pre-built component that allows users to mute/unmute sounds
            globally.
          </p>
        </div>

        <InteractiveDemo
          title="Live Demo"
          description="Try toggling the sound on and off"
        >
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            className="flex items-center justify-center h-12 w-12 rounded-full bg-accent hover:bg-accent/80 transition-all duration-200 active:scale-95"
          >
            {soundEnabled ? (
              <Volume2 className="w-6 h-6" />
            ) : (
              <VolumeX className="w-6 h-6 text-muted-foreground" />
            )}
          </button>
        </InteractiveDemo>

        <div className="space-y-4">
          <h3 className="text-title-3 font-semibold">Usage</h3>

          <CodeBlock
            filename="components/navbar.tsx"
            language="tsx"
            code={`import { SoundToggle } from '@/components/sound-toggle';

export function Navbar() {
  return (
    <nav>
      <SoundToggle />
    </nav>
  );
}`}
          />
        </div>
      </section>

      {/* Custom Sounds */}
      <section id="custom-sounds" className="space-y-6 scroll-mt-20">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Music className="w-6 h-6 text-interactive" />
            <h2 className="text-title-2 font-semibold">Custom Sounds</h2>
          </div>
          <p className="text-muted-foreground">
            Replace default sounds with your own audio files or add new sound
            types.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-title-3 font-semibold">Adding New Sound Files</h3>

          <div className="space-y-3">
            <p className="text-sm text-muted-foreground">
              1. Add your audio files to{" "}
              <code className="px-2 py-0.5 rounded bg-muted text-xs font-mono">
                /public/sounds/
              </code>
            </p>

            <div className="rounded-lg bg-muted/30 border border-border/30 p-4 font-mono text-xs space-y-1">
              <div className="flex items-center gap-2 text-muted-foreground">
                <FolderOpen className="w-3 h-3" />
                <span>public/sounds/</span>
              </div>
              <div className="pl-4 space-y-1">
                <div className="flex items-center gap-2">
                  <FileAudio className="w-3 h-3 text-interactive" />
                  <span>my-custom-click.mp3</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileAudio className="w-3 h-3 text-interactive" />
                  <span>notification-sound.wav</span>
                </div>
              </div>
            </div>

            <p className="text-sm text-muted-foreground">
              2. Update the sound mapping in{" "}
              <code className="px-2 py-0.5 rounded bg-muted text-xs font-mono">
                sound-provider.tsx
              </code>
            </p>

            <CodeBlock
              filename="components/sound-provider.tsx"
              language="tsx"
              code={`const sounds = {
  click: "/sounds/click.mp3",
  hover: "/sounds/hover.mp3",
  success: "/sounds/success.mp3",
  whoosh: "/sounds/whoosh.mp3",
  button: "/sounds/button.mp3",
  // Add custom sounds
  notification: "/sounds/notification-sound.wav",
  customClick: "/sounds/my-custom-click.mp3",
};`}
            />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-title-3 font-semibold">
            Sound Format Guidelines
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h4 className="text-sm font-semibold flex items-center gap-2">
                <Zap className="w-4 h-4 text-green-500" />
                Recommended
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>
                    <strong>Format:</strong> MP3 or WAV
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>
                    <strong>Duration:</strong> 100-300ms
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>
                    <strong>File Size:</strong> Under 50KB
                  </span>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-semibold flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-yellow-500" />
                Tips
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 mt-1">•</span>
                  <span>Keep sounds subtle</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 mt-1">•</span>
                  <span>Test at different volumes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 mt-1">•</span>
                  <span>Normalize audio levels</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <InfoBox type="success" title="Free Sound Resources">
          <p>Check out these resources for royalty-free UI sounds:</p>
          <ul className="space-y-1 mt-2 text-sm">
            <li>
              • <strong>Uppbeat</strong> - Free for personal use
            </li>
            <li>
              • <strong>Freesound.org</strong> - Community-sourced sounds
            </li>
            <li>
              • <strong>Zapsplat</strong> - Free sound effects library
            </li>
          </ul>
        </InfoBox>
      </section>

      {/* Volume Control */}
      <section id="volume-control" className="space-y-6 scroll-mt-20">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Sliders className="w-6 h-6 text-interactive" />
            <h2 className="text-title-2 font-semibold">Volume Control</h2>
          </div>
          <p className="text-muted-foreground">
            Allow users to adjust the sound volume to their preference.
          </p>
        </div>

        <InteractiveDemo
          title="Volume Slider Demo"
          description="Adjust the global volume"
        >
          <div className="w-full max-w-md space-y-4">
            <div className="flex items-center gap-4">
              <VolumeX className="w-5 h-5 text-muted-foreground" />
              <input
                type="range"
                min="0"
                max="100"
                value={volume * 100}
                onChange={(e) => setVolume(Number(e.target.value) / 100)}
                className="flex-1 h-2 rounded-lg appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, var(--interactive) 0%, var(--interactive) ${
                    volume * 100
                  }%, var(--muted) ${volume * 100}%, var(--muted) 100%)`,
                }}
              />
              <Volume2 className="w-5 h-5 text-interactive" />
            </div>
            <div className="text-center">
              <span className="text-sm font-mono text-muted-foreground">
                Volume: {Math.round(volume * 100)}%
              </span>
            </div>
          </div>
        </InteractiveDemo>

        <div className="space-y-4">
          <h3 className="text-title-3 font-semibold">Implementation</h3>

          <CodeBlock
            filename="components/volume-control.tsx"
            language="tsx"
            code={`"use client";

import { useSound } from '@/components/sound-provider';
import { Volume2, VolumeX } from 'lucide-react';

export function VolumeControl() {
  const { volume, setVolume } = useSound();

  return (
    <div className="flex items-center gap-3">
      <VolumeX className="w-4 h-4" />
      <input
        type="range"
        min="0"
        max="100"
        value={volume * 100}
        onChange={(e) => setVolume(Number(e.target.value) / 100)}
      />
      <Volume2 className="w-4 h-4" />
      <span className="text-sm">{Math.round(volume * 100)}%</span>
    </div>
  );
}`}
          />
        </div>
      </section>
    </div>
  );
}
