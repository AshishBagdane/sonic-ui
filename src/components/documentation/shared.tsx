"use client";

import React, { useState } from "react";
import {
  Copy,
  Check,
  Code2,
  Terminal,
  Info,
  AlertCircle,
  PlayCircle,
  CheckCircle2,
  FolderTree,
} from "lucide-react";

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

export function cn(...inputs: (string | undefined | null | false)[]) {
  return inputs.filter(Boolean).join(" ");
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

export function CodeBlock({
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
            {language === "bash" ? (
              <Terminal className="w-3.5 h-3.5" />
            ) : (
              <Code2 className="w-3.5 h-3.5" />
            )}
            {filename}
          </span>
          <span className="text-xs text-muted-foreground/60">{language}</span>
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

export interface PropsTableRow {
  prop: string;
  type: string;
  default?: string;
  description: string;
}

interface PropsTableProps {
  data: PropsTableRow[];
}

export function PropsTable({ data }: PropsTableProps) {
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
// STEP CARD COMPONENT
// ============================================================================

interface StepCardProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  isLast?: boolean;
}

export function StepCard({
  number,
  title,
  description,
  icon,
  children,
  isLast = false,
}: StepCardProps) {
  return (
    <div className="relative group">
      {!isLast && (
        <div className="absolute left-6 top-14 bottom-0 w-px bg-gradient-to-b from-border via-border/50 to-transparent lg:block hidden" />
      )}

      <div className="relative rounded-2xl border border-border/50 bg-card/50 backdrop-blur-xl overflow-hidden hover:border-border transition-all duration-300 hover:shadow-lg">
        <div className="p-6 lg:p-8 space-y-4">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-interactive/10 border border-interactive/20 group-hover:bg-interactive/20 transition-colors">
              <span className="text-lg font-bold text-interactive">
                {number}
              </span>
            </div>

            <div className="flex-1 space-y-1">
              <div className="flex items-center gap-2">
                <div className="text-interactive">{icon}</div>
                <h3 className="text-xl font-semibold">{title}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {description}
              </p>
            </div>
          </div>

          {children && <div className="lg:pl-16 space-y-4">{children}</div>}
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// FEATURE CARD COMPONENT
// ============================================================================

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="rounded-xl border border-border/50 bg-background/50 p-4 hover:bg-accent/50 transition-all duration-200">
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-interactive/10 flex items-center justify-center text-interactive">
          {icon}
        </div>
        <div className="space-y-1">
          <h4 className="font-medium text-sm">{title}</h4>
          <p className="text-xs text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// INFO BOX COMPONENT
// ============================================================================

interface InfoBoxProps {
  type?: "info" | "warning" | "success";
  title: string;
  children: React.ReactNode;
}

export function InfoBox({ type = "info", title, children }: InfoBoxProps) {
  const styles = {
    info: {
      bg: "bg-blue-500/5",
      border: "border-blue-500/20",
      icon: <Info className="w-5 h-5 text-blue-500" />,
      titleColor: "text-blue-700 dark:text-blue-400",
    },
    warning: {
      bg: "bg-yellow-500/5",
      border: "border-yellow-500/20",
      icon: <AlertCircle className="w-5 h-5 text-yellow-500" />,
      titleColor: "text-yellow-700 dark:text-yellow-400",
    },
    success: {
      bg: "bg-green-500/5",
      border: "border-green-500/20",
      icon: <CheckCircle2 className="w-5 h-5 text-green-500" />,
      titleColor: "text-green-700 dark:text-green-400",
    },
  };

  const style = styles[type];

  return (
    <div
      className={cn("rounded-lg border p-4 space-y-2", style.bg, style.border)}
    >
      <div className="flex items-start gap-2">
        <div className="flex-shrink-0 mt-0.5">{style.icon}</div>
        <div className="space-y-1 flex-1">
          <p className={cn("text-sm font-medium", style.titleColor)}>{title}</p>
          <div className="text-sm text-muted-foreground space-y-2">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// INTERACTIVE DEMO COMPONENT
// ============================================================================

interface InteractiveDemoProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export function InteractiveDemo({
  title,
  description,
  children,
}: InteractiveDemoProps) {
  return (
    <div className="rounded-2xl border border-border/50 bg-card/50 backdrop-blur-xl overflow-hidden">
      <div className="border-b border-border/50 bg-muted/30 px-4 py-3">
        <div className="flex items-center gap-2">
          <PlayCircle className="w-4 h-4 text-interactive" />
          <div>
            <h4 className="text-sm font-semibold">{title}</h4>
            <p className="text-xs text-muted-foreground">{description}</p>
          </div>
        </div>
      </div>
      <div className="p-8 flex items-center justify-center min-h-[200px] bg-background/50">
        {children}
      </div>
    </div>
  );
}
