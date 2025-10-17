"use client";

import React, { useState } from "react";
import {
  MousePointer2,
  Sparkles,
  Volume2,
  Zap,
  Package,
  Palette,
  Settings as SettingsIcon,
} from "lucide-react";
import { CodeBlock, PropsTable, InfoBox, InteractiveDemo } from "./shared";
import { Button } from "@/components/ui/button";

export default function ButtonDocsSection() {
  const [clickCount, setClickCount] = useState(0);

  return (
    <div id="button" className="space-y-16 scroll-mt-20">
      {/* Hero Section */}
      <div className="space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-interactive/10 text-interactive text-sm font-medium">
          <MousePointer2 className="w-4 h-4" />
          <span>Component • Interactive</span>
        </div>

        <div className="space-y-4">
          <h1 className="text-display font-bold tracking-tight">Button</h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            A sound-reactive button component with smooth animations, multiple
            variants, and Apple-inspired design. Built with Framer Motion and
            Radix UI.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="rounded-xl border border-border/50 bg-card/30 p-4">
            <div className="flex items-center gap-2 text-interactive mb-1">
              <Volume2 className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider">
                Sounds
              </span>
            </div>
            <p className="text-2xl font-bold">3</p>
            <p className="text-xs text-muted-foreground">
              Click, Hover, Default
            </p>
          </div>

          <div className="rounded-xl border border-border/50 bg-card/30 p-4">
            <div className="flex items-center gap-2 text-interactive mb-1">
              <Palette className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider">
                Variants
              </span>
            </div>
            <p className="text-2xl font-bold">6</p>
            <p className="text-xs text-muted-foreground">Visual styles</p>
          </div>

          <div className="rounded-xl border border-border/50 bg-card/30 p-4">
            <div className="flex items-center gap-2 text-interactive mb-1">
              <Package className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider">
                Sizes
              </span>
            </div>
            <p className="text-2xl font-bold">4</p>
            <p className="text-xs text-muted-foreground">Size options</p>
          </div>

          <div className="rounded-xl border border-border/50 bg-card/30 p-4">
            <div className="flex items-center gap-2 text-interactive mb-1">
              <Zap className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider">
                Motion
              </span>
            </div>
            <p className="text-2xl font-bold">Yes</p>
            <p className="text-xs text-muted-foreground">Framer Motion</p>
          </div>
        </div>
      </div>

      {/* Interactive Demo */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-title-2 font-semibold">Interactive Demo</h2>
          <p className="text-muted-foreground">
            Try hovering and clicking the buttons to experience the sound
            effects and animations.
          </p>
        </div>

        <InteractiveDemo
          title="Default Variants"
          description="Hover and click to hear the sounds"
        >
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="default">Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="link">Link</Button>
          </div>
        </InteractiveDemo>

        <InteractiveDemo title="Sizes" description="Available size options">
          <div className="flex flex-wrap items-center gap-4 justify-center">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
            <Button size="icon">
              <Sparkles className="w-4 h-4" />
            </Button>
          </div>
        </InteractiveDemo>

        <InteractiveDemo
          title="With Icons"
          description="Combine text and icons"
        >
          <div className="flex flex-wrap gap-4 justify-center">
            <Button>
              <Sparkles className="w-4 h-4" />
              With Icon
            </Button>
            <Button variant="outline">
              Download
              <Package className="w-4 h-4" />
            </Button>
            <Button variant="secondary">
              <SettingsIcon className="w-4 h-4" />
              Settings
              <Zap className="w-4 h-4" />
            </Button>
          </div>
        </InteractiveDemo>

        <InteractiveDemo
          title="Disabled State"
          description="Sounds and animations are disabled"
        >
          <div className="flex flex-wrap gap-4 justify-center">
            <Button disabled>Disabled</Button>
            <Button variant="outline" disabled>
              Disabled Outline
            </Button>
            <Button variant="destructive" disabled>
              Disabled Destructive
            </Button>
          </div>
        </InteractiveDemo>

        <InteractiveDemo
          title="Click Counter"
          description="Each click plays a sound"
        >
          <div className="text-center space-y-4">
            <div className="text-4xl font-bold text-interactive">
              {clickCount}
            </div>
            <Button onClick={() => setClickCount(clickCount + 1)}>
              Click Me!
            </Button>
            {clickCount > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setClickCount(0)}
              >
                Reset
              </Button>
            )}
          </div>
        </InteractiveDemo>
      </section>

      {/* Installation */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-title-2 font-semibold">Installation</h2>
          <p className="text-muted-foreground">
            Copy and paste the component code into your project.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-title-3 font-semibold">Install Dependencies</h3>

          <CodeBlock
            filename="terminal"
            language="bash"
            code={`npm install framer-motion class-variance-authority
npm install @radix-ui/react-slot`}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-title-3 font-semibold">Copy Component Code</h3>

          <CodeBlock
            filename="components/ui/button.tsx"
            language="tsx"
            code={`"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { motion, type HTMLMotionProps } from "framer-motion";
import { useSound } from "@/components/sound-provider";

function cn(...inputs: (string | undefined | null | false)[]) {
  return inputs.filter(Boolean).join(" ");
}

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3 text-xs",
        lg: "h-11 rounded-lg px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

type SoundName = "click" | "hover" | "success" | "whoosh" | "button";

export interface ButtonProps
  extends Omit<HTMLMotionProps<"button">, "onAnimationStart" | "onDrag" | "onDragEnd" | "onDragStart">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  soundEnabled?: boolean;
  clickSound?: SoundName;
  hoverSound?: SoundName;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      soundEnabled = true,
      clickSound = "click",
      hoverSound = "hover",
      onMouseEnter,
      onClick,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const { playSound, enabled: globalSoundEnabled } = useSound();
    const shouldPlaySound = soundEnabled && globalSoundEnabled && !disabled;

    const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      if (shouldPlaySound && hoverSound) {
        playSound(hoverSound);
      }
      onMouseEnter?.(e);
    };

    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      if (shouldPlaySound && clickSound) {
        playSound(clickSound);
      }
      onClick?.(e);
    };

    if (asChild) {
      return (
        <Slot
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          onMouseEnter={handleMouseEnter}
          onClick={handleClick}
          {...(props as React.HTMLAttributes<HTMLElement>)}
        >
          {children as React.ReactNode}
        </Slot>
      );
    }

    return (
      <motion.button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={disabled}
        onMouseEnter={handleMouseEnter}
        onClick={handleClick}
        whileHover={disabled ? undefined : { scale: 1.02 }}
        whileTap={disabled ? undefined : { scale: 0.98 }}
        transition={{
          type: "spring" as const,
          stiffness: 400,
          damping: 17,
        }}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };`}
          />
        </div>
      </section>

      {/* Usage Examples */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-title-2 font-semibold">Usage Examples</h2>
          <p className="text-muted-foreground">
            Common patterns and use cases for the Button component.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-title-3 font-semibold">Basic Usage</h3>

          <CodeBlock
            filename="app/page.tsx"
            language="tsx"
            code={`import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <Button>Click me</Button>
  );
}`}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-title-3 font-semibold">Variants</h3>

          <CodeBlock
            filename="app/page.tsx"
            language="tsx"
            code={`<Button variant="default">Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="link">Link</Button>`}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-title-3 font-semibold">With Custom Sounds</h3>

          <CodeBlock
            filename="app/page.tsx"
            language="tsx"
            code={`<Button 
  clickSound="success"
  hoverSound="whoosh"
>
  Custom Sounds
</Button>

<Button soundEnabled={false}>
  No Sound
</Button>`}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-title-3 font-semibold">With Icons</h3>

          <CodeBlock
            filename="app/page.tsx"
            language="tsx"
            code={`import { Sparkles, Download } from "lucide-react";

<Button>
  <Sparkles className="w-4 h-4" />
  With Icon
</Button>

<Button variant="outline">
  Download
  <Download className="w-4 h-4" />
</Button>

<Button size="icon">
  <Sparkles className="w-4 h-4" />
</Button>`}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-title-3 font-semibold">As Link (asChild)</h3>

          <CodeBlock
            filename="app/page.tsx"
            language="tsx"
            code={`import Link from "next/link";

<Button asChild>
  <Link href="/dashboard">
    Go to Dashboard
  </Link>
</Button>`}
          />
        </div>
      </section>

      {/* API Reference */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-title-2 font-semibold">API Reference</h2>
          <p className="text-muted-foreground">
            Complete props documentation for the Button component.
          </p>
        </div>

        <PropsTable
          data={[
            {
              prop: "variant",
              type: '"default" | "destructive" | "outline" | "secondary" | "ghost" | "link"',
              default: '"default"',
              description: "Visual style variant of the button",
            },
            {
              prop: "size",
              type: '"default" | "sm" | "lg" | "icon"',
              default: '"default"',
              description: "Size of the button",
            },
            {
              prop: "asChild",
              type: "boolean",
              default: "false",
              description: "Render as child element (e.g., Link component)",
            },
            {
              prop: "soundEnabled",
              type: "boolean",
              default: "true",
              description: "Enable or disable sound effects for this button",
            },
            {
              prop: "clickSound",
              type: "SoundName",
              default: '"click"',
              description:
                'Sound to play on click. Options: "click" | "hover" | "success" | "whoosh" | "button"',
            },
            {
              prop: "hoverSound",
              type: "SoundName",
              default: '"hover"',
              description:
                'Sound to play on hover. Options: "click" | "hover" | "success" | "whoosh" | "button"',
            },
            {
              prop: "disabled",
              type: "boolean",
              default: "false",
              description:
                "Disable the button (also disables sounds and animations)",
            },
            {
              prop: "onClick",
              type: "(e: MouseEvent) => void",
              description: "Click event handler",
            },
            {
              prop: "children",
              type: "React.ReactNode",
              description: "Button content",
            },
          ]}
        />
      </section>

      {/* Animation Details */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-title-2 font-semibold">Animation Details</h2>
          <p className="text-muted-foreground">
            Understanding the motion behavior of the Button component.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-border/50 bg-card/30 p-6 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-interactive/10 flex items-center justify-center">
                <MousePointer2 className="w-4 h-4 text-interactive" />
              </div>
              <h3 className="font-semibold">Hover Effect</h3>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                • Scale:{" "}
                <code className="px-1.5 py-0.5 rounded bg-muted text-xs font-mono">
                  1.02
                </code>
              </li>
              <li>• Plays hover sound</li>
              <li>• Spring animation (stiffness: 400)</li>
              <li>• Smooth transition</li>
            </ul>
          </div>

          <div className="rounded-xl border border-border/50 bg-card/30 p-6 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-interactive/10 flex items-center justify-center">
                <Zap className="w-4 h-4 text-interactive" />
              </div>
              <h3 className="font-semibold">Click Effect</h3>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                • Scale:{" "}
                <code className="px-1.5 py-0.5 rounded bg-muted text-xs font-mono">
                  0.98
                </code>
              </li>
              <li>• Plays click sound</li>
              <li>• Instant feedback</li>
              <li>• Tactile feel</li>
            </ul>
          </div>
        </div>

        <InfoBox type="info" title="Accessibility">
          <p>
            Animations and sounds are automatically disabled when{" "}
            <code className="px-1.5 py-0.5 rounded bg-muted text-xs font-mono">
              disabled
            </code>{" "}
            is true. The component respects{" "}
            <code className="px-1.5 py-0.5 rounded bg-muted text-xs font-mono">
              prefers-reduced-motion
            </code>{" "}
            through the global SoundProvider settings.
          </p>
        </InfoBox>
      </section>

      {/* Best Practices */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-title-2 font-semibold">Best Practices</h2>
        </div>

        <div className="space-y-4">
          <InfoBox type="success" title="Do's">
            <ul className="space-y-2 text-sm">
              <li>✅ Use semantic variants (destructive for delete actions)</li>
              <li>✅ Add icons to improve scannability</li>
              <li>✅ Use size=&quot;icon&quot; for icon-only buttons</li>
              <li>✅ Keep button text concise and action-oriented</li>
              <li>✅ Group related buttons together</li>
            </ul>
          </InfoBox>

          <InfoBox type="warning" title="Don'ts">
            <ul className="space-y-2 text-sm">
              <li>❌ Don&apos;t use too many button variants in one view</li>
              <li>❌ Avoid overly long button text</li>
              <li>❌ Don&apos;t disable sounds without good reason</li>
              <li>
                ❌ Avoid using buttons for navigation (use asChild with Link)
              </li>
            </ul>
          </InfoBox>
        </div>
      </section>
    </div>
  );
}
