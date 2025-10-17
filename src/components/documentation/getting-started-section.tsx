"use client";

import React from "react";
import {
  Sparkles,
  CheckCircle2,
  Volume2,
  Settings,
  Download,
  FolderTree,
  PlayCircle,
  ArrowRight,
} from "lucide-react";
import { CodeBlock, StepCard, FeatureCard, InfoBox } from "./shared";

export default function GettingStartedSection() {
  return (
    <div id="getting-started" className="space-y-16 scroll-mt-20">
      {/* Hero Section */}
      <div className="space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-interactive/10 text-interactive text-sm font-medium">
          <Sparkles className="w-4 h-4" />
          <span>Quick Setup • 5 minutes</span>
        </div>

        <div className="space-y-4">
          <h1 className="text-display font-bold tracking-tight">
            Getting Started
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Get sonic-ui up and running in your React/Next.js project. Follow
            these steps to add sound-reactive components with Apple-inspired
            design.
          </p>
        </div>

        {/* Quick Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
          <FeatureCard
            icon={<CheckCircle2 className="w-4 h-4" />}
            title="Copy & Paste"
            description="No npm package needed. Just copy components to your project."
          />
          <FeatureCard
            icon={<Volume2 className="w-4 h-4" />}
            title="Sound Ready"
            description="Pre-configured sound system with default audio files."
          />
          <FeatureCard
            icon={<Settings className="w-4 h-4" />}
            title="Fully Customizable"
            description="Override sounds, styles, and behavior to match your needs."
          />
        </div>
      </div>

      {/* Step-by-Step Guide */}
      <div className="space-y-8">
        {/* Step 1: Prerequisites */}
        <StepCard
          number={1}
          title="Prerequisites"
          description="Make sure you have the required dependencies installed"
          icon={<CheckCircle2 className="w-5 h-5" />}
        >
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              sonic-ui is built on top of these technologies:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-center gap-2 p-3 rounded-lg bg-muted/30 border border-border/30">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span className="text-sm font-medium">React 18+</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-lg bg-muted/30 border border-border/30">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span className="text-sm font-medium">
                  Next.js 14+ (recommended)
                </span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-lg bg-muted/30 border border-border/30">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span className="text-sm font-medium">Tailwind CSS 3+</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-lg bg-muted/30 border border-border/30">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span className="text-sm font-medium">
                  TypeScript (optional)
                </span>
              </div>
            </div>

            <CodeBlock
              filename="terminal"
              language="bash"
              code={`# Install required dependencies
npm install framer-motion class-variance-authority
npm install -D tailwindcss @tailwindcss/typography`}
            />
          </div>
        </StepCard>

        {/* Step 2: Install Radix UI */}
        <StepCard
          number={2}
          title="Install Radix UI Primitives"
          description="sonic-ui uses Radix UI for accessible component primitives"
          icon={<Download className="w-5 h-5" />}
        >
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Install only the primitives you need for the components
              you&apos;ll use:
            </p>

            <CodeBlock
              filename="terminal"
              language="bash"
              code={`# Core primitives (required for most components)
npm install @radix-ui/react-slot

# Install based on components you need:
npm install @radix-ui/react-switch      # For Switch component
npm install @radix-ui/react-dialog      # For Dialog component
npm install lucide-react                # For icons`}
            />
          </div>
        </StepCard>

        {/* Step 3: Setup Sound System */}
        <StepCard
          number={3}
          title="Setup Sound System"
          description="Add the sound provider and audio files to your project"
          icon={<Volume2 className="w-5 h-5" />}
        >
          <div className="space-y-4">
            {/* File Structure */}
            <div className="space-y-2">
              <p className="text-sm font-medium">
                Create the following file structure:
              </p>
              <div className="rounded-lg bg-muted/30 border border-border/30 p-4 font-mono text-xs space-y-1">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <FolderTree className="w-3 h-3" />
                  <span>your-project/</span>
                </div>
                <div className="pl-4 space-y-1">
                  <div>├── components/</div>
                  <div className="pl-4">└── sound-provider.tsx</div>
                  <div>└── public/</div>
                  <div className="pl-4">└── sounds/</div>
                  <div className="pl-8">├── click.mp3</div>
                  <div className="pl-8">├── hover.mp3</div>
                  <div className="pl-8">├── success.mp3</div>
                  <div className="pl-8">├── whoosh.mp3</div>
                  <div className="pl-8">└── button.mp3</div>
                </div>
              </div>
            </div>

            {/* Sound Provider Code */}
            <div className="space-y-2">
              <p className="text-sm font-medium">
                Copy the sound provider code:
              </p>
              <CodeBlock
                filename="components/sound-provider.tsx"
                language="tsx"
                code={`"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface SoundContextType {
  enabled: boolean;
  volume: number;
  toggleSound: () => void;
  setVolume: (volume: number) => void;
  playSound: (soundName: keyof typeof sounds) => void;
}

const SoundContext = createContext<SoundContextType | undefined>(undefined);

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
  // ... rest of implementation
  
  return (
    <SoundContext.Provider value={{ enabled, volume, toggleSound, setVolume, playSound }}>
      {children}
    </SoundContext.Provider>
  );
}

export function useSound() {
  const context = useContext(SoundContext);
  if (!context) throw new Error("useSound must be used within SoundProvider");
  return context;
}`}
              />
            </div>

            {/* Download Sounds */}
            <div className="rounded-lg border border-interactive/20 bg-interactive/5 p-4 space-y-2">
              <div className="flex items-start gap-2">
                <Download className="w-5 h-5 text-interactive flex-shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="text-sm font-medium">
                    Download Default Sound Pack
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Get our curated sound effects from Uppbeat (free for
                    personal use)
                  </p>
                  <button className="mt-2 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-interactive text-white text-xs font-medium hover:bg-interactive-hover transition-colors">
                    <Download className="w-3 h-3" />
                    Download Sounds (.zip)
                  </button>
                </div>
              </div>
            </div>
          </div>
        </StepCard>

        {/* Step 4: Wrap Your App */}
        <StepCard
          number={4}
          title="Wrap Your App with SoundProvider"
          description="Add the provider to your root layout to enable sounds globally"
          icon={<Settings className="w-5 h-5" />}
        >
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              For Next.js App Router, wrap your layout:
            </p>

            <CodeBlock
              filename="app/layout.tsx"
              language="tsx"
              code={`import { SoundProvider } from '@/components/sound-provider';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SoundProvider>
          {children}
        </SoundProvider>
      </body>
    </html>
  );
}`}
            />

            <p className="text-sm text-muted-foreground">
              For React (Vite, CRA), wrap your App component:
            </p>

            <CodeBlock
              filename="src/App.tsx"
              language="tsx"
              code={`import { SoundProvider } from './components/sound-provider';

function App() {
  return (
    <SoundProvider>
      <YourApp />
    </SoundProvider>
  );
}`}
            />
          </div>
        </StepCard>

        {/* Step 5: Use Components */}
        <StepCard
          number={5}
          title="Start Using Components"
          description="Copy component code and start building sound-reactive interfaces"
          icon={<PlayCircle className="w-5 h-5" />}
          isLast={true}
        >
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Copy any component from our library and start using it:
            </p>

            <CodeBlock
              filename="app/page.tsx"
              language="tsx"
              code={`import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="p-8">
      <Button 
        soundEnabled={true}
        clickSound="click"
        hoverSound="hover"
      >
        Click me!
      </Button>
    </div>
  );
}`}
            />

            <div className="flex items-center gap-3 p-4 rounded-lg bg-green-500/10 border border-green-500/20">
              <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
              <p className="text-sm text-green-700 dark:text-green-400">
                <strong>You&apos;re all set!</strong> Start exploring components
                in the sidebar.
              </p>
            </div>
          </div>
        </StepCard>
      </div>

      {/* Next Steps */}
      <div className="space-y-6">
        <h2 className="text-title-2 font-semibold">Next Steps</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a
            href="#button"
            className="group relative rounded-xl border border-border/50 bg-card/50 backdrop-blur-xl p-6 hover:border-interactive/50 transition-all duration-300 hover:shadow-lg"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-lg">Explore Components</h3>
                <ArrowRight className="w-5 h-5 text-interactive opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-sm text-muted-foreground">
                Browse all available sound-reactive components
              </p>
            </div>
          </a>

          <a
            href="#custom-sounds"
            className="group relative rounded-xl border border-border/50 bg-card/50 backdrop-blur-xl p-6 hover:border-interactive/50 transition-all duration-300 hover:shadow-lg"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-lg">Custom Sounds</h3>
                <ArrowRight className="w-5 h-5 text-interactive opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-sm text-muted-foreground">
                Learn how to add your own custom sound effects
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
