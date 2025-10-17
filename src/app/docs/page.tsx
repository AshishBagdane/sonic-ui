"use client";

import React, { useState } from "react";
import {
  Volume2,
  VolumeX,
  Menu,
  X,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { SoundProvider, useSound } from "@/components/sound-provider";
import GettingStartedSection from "@/components/documentation/getting-started-section";
import SoundSystemSection from "@/components/documentation/sound-system-section";
import ButtonDocsSection from "@/components/documentation/button-docs-section";
import { cn } from "@/components/documentation/shared";
import InputDocsSection from "@/components/documentation/input-docs-section";
import SwitchDocsSection from "@/components/documentation/switch-docs-section";
import CardDocsSection from "@/components/documentation/card-docs-section";
import DialogDocsSection from "@/components/documentation/dialog-docs-section";
import ToastDocsSection from "@/components/documentation/toast-docs-section";
import { SoundToggle } from "@/components/sound-toggle";

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
        { name: "Introduction", href: "#getting-started" },
        { name: "Installation", href: "#getting-started" },
        { name: "Quick Start", href: "#getting-started" },
      ],
    },
    {
      title: "Sound System",
      items: [
        { name: "Sound Provider", href: "#sound-provider" },
        { name: "Sound Toggle", href: "#sound-toggle" },
        { name: "Custom Sounds", href: "#custom-sounds" },
        { name: "Volume Control", href: "#volume-control" },
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
                      onClick={onClose}
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
    <div className="min-h-screen bg-background">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Content */}
      <div className="lg:pl-64">
        {/* Page Content */}
        <main className="px-4 lg:px-8 py-12 max-w-5xl mx-auto space-y-32">
          {/* Getting Started Section */}
          <GettingStartedSection />

          {/* Sound System Section */}
          <SoundSystemSection />

          {/* Button Component Documentation */}
          <ButtonDocsSection />

          {/* Input Component Documentation */}
          <InputDocsSection />

          {/* Switch Component Documentation */}
          <SwitchDocsSection />

          {/* Card Component Documentation */}
          <CardDocsSection />

          {/* Dialog Component Documentation */}
          <DialogDocsSection />

          {/* Toast Component Documentation */}
          <ToastDocsSection />
        </main>
      </div>
    </div>
  );
}
