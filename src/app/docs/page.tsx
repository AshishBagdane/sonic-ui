"use client";

import React, { useState } from "react";
import {
  Volume2,
  VolumeX,
  Copy,
  Check,
  Play,
  Menu,
  X,
  ChevronRight,
  Code2,
  Sparkles,
} from "lucide-react";
import { SoundProvider, useSound } from "@/components/sound-provider";

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

function cn(...inputs: (string | undefined | null | false)[]) {
  return inputs.filter(Boolean).join(" ");
}

// ============================================================================
// SOUND TOGGLE COMPONENT
// ============================================================================

function SoundToggle() {
  const { enabled, toggleSound, playSound } = useSound();

  const handleToggle = () => {
    if (enabled) {
      playSound("click");
    }
    toggleSound();
  };

  return (
    <button
      onClick={handleToggle}
      onMouseEnter={() => enabled && playSound("hover")}
      className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-accent transition-all duration-200 active:scale-95"
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

// ============================================================================
// CODE BLOCK COMPONENT
// ============================================================================

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  className?: string;
}

function CodeBlock({
  code,
  language = "tsx",
  filename,
  className,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={cn(
        "group relative rounded-2xl border border-border/50 bg-card/50 backdrop-blur-xl overflow-hidden",
        className
      )}
    >
      {filename && (
        <div className="flex items-center justify-between px-4 py-2 border-b border-border/50 bg-muted/30">
          <span className="text-xs font-medium text-muted-foreground flex items-center gap-2">
            <Code2 className="w-3.5 h-3.5" />
            {filename}
          </span>
        </div>
      )}
      <div className="relative">
        <pre className="p-4 overflow-x-auto text-sm leading-relaxed">
          <code className="text-foreground">{code}</code>
        </pre>
        <button
          onClick={copyToClipboard}
          className="absolute top-3 right-3 p-2 rounded-lg bg-background/80 backdrop-blur-sm border border-border/50 opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-accent active:scale-95"
          aria-label="Copy code"
        >
          {copied ? (
            <Check className="w-4 h-4 text-green-500" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
        </button>
      </div>
    </div>
  );
}

// ============================================================================
// PROPS TABLE COMPONENT
// ============================================================================

interface PropsTableRow {
  prop: string;
  type: string;
  default?: string;
  description: string;
}

interface PropsTableProps {
  data: PropsTableRow[];
}

function PropsTable({ data }: PropsTableProps) {
  return (
    <div className="rounded-2xl border border-border/50 overflow-hidden bg-card/30 backdrop-blur-xl">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border/50 bg-muted/30">
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide">
                Prop
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide">
                Type
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide">
                Default
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide">
                Description
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/30">
            {data.map((row, index) => (
              <tr key={index} className="hover:bg-muted/20 transition-colors">
                <td className="px-4 py-3 font-mono text-sm font-medium text-primary">
                  {row.prop}
                </td>
                <td className="px-4 py-3 font-mono text-xs text-muted-foreground">
                  {row.type}
                </td>
                <td className="px-4 py-3 font-mono text-xs text-muted-foreground">
                  {row.default || "—"}
                </td>
                <td className="px-4 py-3 text-sm text-foreground">
                  {row.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ============================================================================
// DEMO CARD COMPONENT
// ============================================================================

interface DemoCardProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  soundIndicator?: boolean;
}

function DemoCard({
  title,
  description,
  children,
  soundIndicator,
}: DemoCardProps) {
  const [soundPlayed, setSoundPlayed] = useState(false);

  React.useEffect(() => {
    if (soundIndicator) {
      setSoundPlayed(true);
      const timer = setTimeout(() => setSoundPlayed(false), 500);
      return () => clearTimeout(timer);
    }
  }, [soundIndicator]);

  return (
    <div className="group relative rounded-2xl border border-border/50 bg-card/50 backdrop-blur-xl overflow-hidden hover:border-border transition-all duration-300">
      <div className="p-6 space-y-4">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <h4 className="font-semibold text-lg flex items-center gap-2">
              {title}
              {soundPlayed && (
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-interactive/10 animate-pulse">
                  <Volume2 className="w-3.5 h-3.5 text-interactive" />
                </span>
              )}
            </h4>
            {description && (
              <p className="text-sm text-muted-foreground">{description}</p>
            )}
          </div>
        </div>
        <div className="flex items-center justify-center min-h-[120px] p-8 rounded-xl bg-background/50 border border-border/30">
          {children}
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// SIDEBAR NAVIGATION
// ============================================================================

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

function Sidebar({ isOpen, onClose }: SidebarProps) {
  const navigation = [
    {
      title: "Getting Started",
      items: [
        { name: "Introduction", href: "#intro" },
        { name: "Installation", href: "#installation" },
        { name: "Quick Start", href: "#quickstart" },
      ],
    },
    {
      title: "Sound System",
      items: [
        { name: "Sound Provider", href: "#sound-provider" },
        { name: "Sound Toggle", href: "#sound-toggle" },
        { name: "Custom Sounds", href: "#custom-sounds" },
      ],
    },
    {
      title: "Components",
      items: [
        { name: "Button", href: "#button" },
        { name: "Input", href: "#input" },
        { name: "Switch", href: "#switch" },
        { name: "Card", href: "#card" },
        { name: "Dialog", href: "#dialog" },
        { name: "Toast", href: "#toast" },
      ],
    },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 left-0 z-50 h-full w-64 bg-card/95 backdrop-blur-xl border-r border-border/50",
          "transform transition-transform duration-300 ease-in-out lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border/50">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-interactive/10">
                <Sparkles className="w-4 h-4 text-interactive" />
              </div>
              <span className="font-bold text-lg">sonic-ui</span>
            </div>
            <button
              onClick={onClose}
              className="lg:hidden p-2 rounded-lg hover:bg-accent transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-4 space-y-6">
            {navigation.map((section, idx) => (
              <div key={idx} className="space-y-2">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground px-3">
                  {section.title}
                </h3>
                <div className="space-y-1">
                  {section.items.map((item, itemIdx) => (
                    <a
                      key={itemIdx}
                      href={item.href}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-accent transition-all duration-200 group"
                    >
                      <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-1 group-hover:ml-0 transition-all" />
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
}

// ============================================================================
// MAIN DOC PAGE COMPONENT
// ============================================================================

export default function DocumentationPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <SoundProvider>
      <div className="min-h-screen bg-background">
        {/* Sidebar */}
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        {/* Main Content */}
        <div className="lg:pl-64">
          {/* Top Navigation */}
          <header className="sticky top-0 z-30 border-b border-border/50 bg-background/80 backdrop-blur-xl">
            <div className="flex items-center justify-between px-4 lg:px-8 h-16">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setSidebarOpen(true)}
                  className="lg:hidden p-2 rounded-lg hover:bg-accent transition-colors"
                >
                  <Menu className="w-5 h-5" />
                </button>
                <div className="hidden lg:flex items-center gap-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-interactive/10">
                    <Sparkles className="w-4 h-4 text-interactive" />
                  </div>
                  <div>
                    <h1 className="font-bold text-lg">sonic-ui</h1>
                    <p className="text-xs text-muted-foreground">
                      Sound-reactive components
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <SoundToggle />
              </div>
            </div>
          </header>

          {/* Page Content */}
          <main className="px-4 lg:px-8 py-12 max-w-5xl mx-auto">
            {/* Hero Section */}
            <div className="space-y-6 mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-interactive/10 text-interactive text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                <span>Apple-inspired • Sound-reactive • Accessible</span>
              </div>

              <h1 className="text-display font-bold tracking-tight">
                Build interfaces that
                <span className="block bg-gradient-to-r from-interactive to-interactive-hover bg-clip-text text-transparent">
                  sound as good as they look
                </span>
              </h1>

              <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                A sound-reactive component library for React. Elegant motion,
                subtle audio feedback, and Apple-inspired design — all built on
                shadcn/ui.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <button className="btn-base btn-interactive flex items-center gap-2">
                  <Play className="w-4 h-4" />
                  Get Started
                </button>
                <button className="btn-base border border-border hover:bg-accent">
                  View on GitHub
                </button>
              </div>
            </div>

            {/* Demo Section - CodeBlock */}
            <section className="space-y-6 mb-16">
              <div>
                <h2 className="text-title-2 font-semibold mb-2">
                  Installation
                </h2>
                <p className="text-muted-foreground">
                  Copy and paste the component code into your project.
                </p>
              </div>

              <CodeBlock
                filename="button.tsx"
                language="tsx"
                code={`import { Button } from "@/components/ui/button";

function Demo() {
  return (
    <Button 
      soundEnabled={true}
      clickSound="click"
      hoverSound="hover"
    >
      Click me
    </Button>
  );
}`}
              />
            </section>

            {/* Demo Section - PropsTable */}
            <section className="space-y-6 mb-16">
              <div>
                <h2 className="text-title-2 font-semibold mb-2">
                  Props Reference
                </h2>
                <p className="text-muted-foreground">
                  Available props for the Button component.
                </p>
              </div>

              <PropsTable
                data={[
                  {
                    prop: "soundEnabled",
                    type: "boolean",
                    default: "true",
                    description:
                      "Enable or disable sound effects for this component",
                  },
                  {
                    prop: "clickSound",
                    type: "SoundName",
                    default: '"click"',
                    description: "Sound to play on click event",
                  },
                  {
                    prop: "hoverSound",
                    type: "SoundName",
                    default: '"hover"',
                    description: "Sound to play on hover event",
                  },
                  {
                    prop: "variant",
                    type: '"default" | "destructive" | "outline"',
                    default: '"default"',
                    description: "Visual style variant of the button",
                  },
                ]}
              />
            </section>

            {/* Demo Section - Interactive Demo */}
            <section className="space-y-6 mb-16">
              <div>
                <h2 className="text-title-2 font-semibold mb-2">
                  Interactive Demo
                </h2>
                <p className="text-muted-foreground">
                  Hover and click to experience the sound effects.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <DemoCard
                  title="Default Button"
                  description="Subtle click and hover sounds"
                >
                  <button className="btn-base btn-primary">Click me</button>
                </DemoCard>

                <DemoCard
                  title="Interactive Button"
                  description="Enhanced with motion"
                >
                  <button className="btn-base btn-interactive">Hover me</button>
                </DemoCard>
              </div>
            </section>

            {/* Feature Grid */}
            <section className="space-y-6">
              <h2 className="text-title-2 font-semibold">Why sonic-ui?</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    icon: "🎨",
                    title: "Apple-inspired Design",
                    description:
                      "Professional aesthetics following Human Interface Guidelines",
                  },
                  {
                    icon: "🔊",
                    title: "Subtle Audio Feedback",
                    description:
                      "Contextual sounds that enhance without distracting",
                  },
                  {
                    icon: "♿",
                    title: "Accessibility First",
                    description:
                      "Respects prefers-reduced-motion and user preferences",
                  },
                ].map((feature, idx) => (
                  <div key={idx} className="card-interactive p-6 space-y-3">
                    <div className="text-4xl">{feature.icon}</div>
                    <h3 className="font-semibold text-lg">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>
    </SoundProvider>
  );
}
