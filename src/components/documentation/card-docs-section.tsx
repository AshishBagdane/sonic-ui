"use client";

import React, { useState } from "react";
import {
  LayoutGrid,
  Sparkles,
  Volume2,
  Palette,
  MousePointer2,
  Heart,
  MessageCircle,
  Share2,
  Star,
  TrendingUp,
  Users,
  Calendar,
  ArrowRight,
} from "lucide-react";
import { CodeBlock, PropsTable, InfoBox, InteractiveDemo } from "./shared";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function CardDocsSection() {
  const [liked, setLiked] = useState(false);

  return (
    <div id="card" className="space-y-16 scroll-mt-20">
      {/* Hero Section */}
      <div className="space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-interactive/10 text-interactive text-sm font-medium">
          <LayoutGrid className="w-4 h-4" />
          <span>Component • Container</span>
        </div>

        <div className="space-y-4">
          <h1 className="text-display font-bold tracking-tight">Card</h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            A sound-reactive card component with smooth hover animations,
            glass-morphism design, and Apple-inspired aesthetics. Perfect for
            showcasing content, features, and data.
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
            <p className="text-2xl font-bold">2</p>
            <p className="text-xs text-muted-foreground">Hover, Click</p>
          </div>

          <div className="rounded-xl border border-border/50 bg-card/30 p-4">
            <div className="flex items-center gap-2 text-interactive mb-1">
              <Palette className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider">
                Parts
              </span>
            </div>
            <p className="text-2xl font-bold">5</p>
            <p className="text-xs text-muted-foreground">Composable</p>
          </div>

          <div className="rounded-xl border border-border/50 bg-card/30 p-4">
            <div className="flex items-center gap-2 text-interactive mb-1">
              <MousePointer2 className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider">
                Interactive
              </span>
            </div>
            <p className="text-2xl font-bold">Yes</p>
            <p className="text-xs text-muted-foreground">Optional mode</p>
          </div>

          <div className="rounded-xl border border-border/50 bg-card/30 p-4">
            <div className="flex items-center gap-2 text-interactive mb-1">
              <Sparkles className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider">
                Glass
              </span>
            </div>
            <p className="text-2xl font-bold">Yes</p>
            <p className="text-xs text-muted-foreground">Backdrop blur</p>
          </div>
        </div>
      </div>

      {/* Interactive Demo */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-title-2 font-semibold">Interactive Demo</h2>
          <p className="text-muted-foreground">
            Try hovering over the cards to experience the animations and sound
            effects.
          </p>
        </div>

        <InteractiveDemo
          title="Basic Card"
          description="Simple card with header and content"
        >
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card description goes here</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                This is the card content area. You can put any content here.
              </p>
            </CardContent>
          </Card>
        </InteractiveDemo>

        <InteractiveDemo
          title="With Footer"
          description="Card with header, content, and footer"
        >
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle>Complete Card</CardTitle>
              <CardDescription>All card sections included</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Cards can have headers, content areas, and footers for actions.
              </p>
            </CardContent>
            <CardFooter className="gap-2">
              <Button variant="outline" size="sm">
                Cancel
              </Button>
              <Button size="sm">Confirm</Button>
            </CardFooter>
          </Card>
        </InteractiveDemo>

        <InteractiveDemo
          title="Interactive Card"
          description="Clickable card with hover effects"
        >
          <Card
            className="w-full max-w-md cursor-pointer"
            interactive
            onClick={() => console.log("Card clicked")}
          >
            <CardHeader>
              <CardTitle>Interactive Mode</CardTitle>
              <CardDescription>Click me to trigger an action</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Interactive cards lift on hover and play sounds on click.
              </p>
            </CardContent>
          </Card>
        </InteractiveDemo>

        <InteractiveDemo
          title="Feature Cards"
          description="Grid of feature cards"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
            <Card>
              <CardHeader>
                <div className="w-10 h-10 rounded-lg bg-interactive/10 flex items-center justify-center mb-2">
                  <TrendingUp className="w-5 h-5 text-interactive" />
                </div>
                <CardTitle>Analytics</CardTitle>
                <CardDescription>Track your metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Real-time insights into your data.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-10 h-10 rounded-lg bg-interactive/10 flex items-center justify-center mb-2">
                  <Users className="w-5 h-5 text-interactive" />
                </div>
                <CardTitle>Team</CardTitle>
                <CardDescription>Collaborate together</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Work seamlessly with your team.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-10 h-10 rounded-lg bg-interactive/10 flex items-center justify-center mb-2">
                  <Calendar className="w-5 h-5 text-interactive" />
                </div>
                <CardTitle>Schedule</CardTitle>
                <CardDescription>Plan ahead</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Organize your time effectively.
                </p>
              </CardContent>
            </Card>
          </div>
        </InteractiveDemo>

        <InteractiveDemo
          title="Product Card"
          description="E-commerce style card"
        >
          <Card className="w-full max-w-sm">
            <CardHeader className="p-0">
              <div className="aspect-video bg-gradient-to-br from-interactive/20 to-interactive/5 rounded-t-2xl flex items-center justify-center">
                <Sparkles className="w-12 h-12 text-interactive" />
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <CardTitle className="text-lg">Premium Product</CardTitle>
                  <CardDescription>High quality item</CardDescription>
                </div>
                <div className="flex items-center gap-1 text-yellow-500">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="text-sm font-medium">4.8</span>
                </div>
              </div>
              <p className="text-2xl font-bold">$99.00</p>
            </CardContent>
            <CardFooter className="gap-2">
              <Button
                variant="outline"
                size="sm"
                className="flex-1"
                onClick={() => setLiked(!liked)}
              >
                <Heart
                  className={`w-4 h-4 ${
                    liked ? "fill-current text-red-500" : ""
                  }`}
                />
              </Button>
              <Button size="sm" className="flex-1">
                Add to Cart
              </Button>
            </CardFooter>
          </Card>
        </InteractiveDemo>

        <InteractiveDemo
          title="Stats Card"
          description="Dashboard metrics card"
        >
          <Card className="w-full max-w-sm">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium">
                  Total Revenue
                </CardTitle>
                <TrendingUp className="w-4 h-4 text-green-500" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">$45,231.89</div>
              <p className="text-xs text-muted-foreground mt-1">
                <span className="text-green-500 font-medium">+20.1%</span> from
                last month
              </p>
            </CardContent>
          </Card>
        </InteractiveDemo>

        <InteractiveDemo
          title="Social Card"
          description="Social media post style"
        >
          <Card className="w-full max-w-md">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-interactive to-interactive-hover flex items-center justify-center text-white font-bold">
                  JD
                </div>
                <div className="flex-1">
                  <CardTitle className="text-sm">John Doe</CardTitle>
                  <CardDescription className="text-xs">
                    2 hours ago
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Just launched my new project! Check it out and let me know what
                you think. 🚀
              </p>
            </CardContent>
            <CardFooter className="gap-4">
              <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Heart className="w-4 h-4" />
                <span>24</span>
              </button>
              <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <MessageCircle className="w-4 h-4" />
                <span>12</span>
              </button>
              <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Share2 className="w-4 h-4" />
              </button>
            </CardFooter>
          </Card>
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
          <h3 className="text-title-3 font-semibold">Copy Component Code</h3>

          <CodeBlock
            filename="components/ui/card.tsx"
            language="tsx"
            code={`"use client";

import * as React from "react";
import { useSound } from "@/components/sound-provider";

function cn(...inputs: (string | undefined | null | false)[]) {
  return inputs.filter(Boolean).join(" ");
}

type SoundName = "click" | "hover" | "success" | "whoosh" | "button";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  soundEnabled?: boolean;
  hoverSound?: SoundName;
  clickSound?: SoundName;
  interactive?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      soundEnabled = true,
      hoverSound = "hover",
      clickSound,
      interactive = false,
      onMouseEnter,
      onClick,
      children,
      ...props
    },
    ref
  ) => {
    const { playSound, enabled: globalSoundEnabled } = useSound();
    const shouldPlaySound = soundEnabled && globalSoundEnabled;

    const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
      if (shouldPlaySound && hoverSound && interactive) {
        playSound(hoverSound);
      }
      onMouseEnter?.(e);
    };

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
      if (shouldPlaySound && clickSound) {
        playSound(clickSound);
      }
      onClick?.(e);
    };

    return (
      <div
        ref={ref}
        className={cn(
          "rounded-2xl border border-border/50 bg-card text-card-foreground shadow-sm transition-all duration-300",
          interactive &&
            "cursor-pointer hover:border-border hover:shadow-md hover:-translate-y-1",
          className
        )}
        onMouseEnter={handleMouseEnter}
        onClick={handleClick}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("font-semibold leading-none tracking-tight", className)}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
export type { CardProps };`}
          />
        </div>
      </section>

      {/* Usage Examples */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-title-2 font-semibold">Usage Examples</h2>
          <p className="text-muted-foreground">
            Common patterns and use cases for the Card component.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-title-3 font-semibold">Basic Usage</h3>

          <CodeBlock
            filename="app/page.tsx"
            language="tsx"
            code={`import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

export default function Page() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card content goes here.</p>
      </CardContent>
    </Card>
  );
}`}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-title-3 font-semibold">Interactive Card</h3>

          <CodeBlock
            filename="app/page.tsx"
            language="tsx"
            code={`<Card 
  interactive
  clickSound="click"
  onClick={() => console.log("Card clicked")}
>
  <CardHeader>
    <CardTitle>Clickable Card</CardTitle>
  </CardHeader>
  <CardContent>
    <p>This card responds to clicks with sound.</p>
  </CardContent>
</Card>`}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-title-3 font-semibold">Feature Grid</h3>

          <CodeBlock
            filename="components/features.tsx"
            language="tsx"
            code={`import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Zap, Shield, Globe } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Fast",
    description: "Lightning quick performance"
  },
  {
    icon: Shield,
    title: "Secure",
    description: "Bank-level security"
  },
  {
    icon: Globe,
    title: "Global",
    description: "Available worldwide"
  }
];

export function Features() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {features.map((feature) => (
        <Card key={feature.title}>
          <CardHeader>
            <div className="w-12 h-12 rounded-lg bg-interactive/10 flex items-center justify-center mb-4">
              <feature.icon className="w-6 h-6 text-interactive" />
            </div>
            <CardTitle>{feature.title}</CardTitle>
            <CardDescription>{feature.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              More details about this feature.
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}`}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-title-3 font-semibold">With Actions</h3>

          <CodeBlock
            filename="app/page.tsx"
            language="tsx"
            code={`import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

<Card>
  <CardHeader>
    <CardTitle>Confirm Action</CardTitle>
  </CardHeader>
  <CardContent>
    <p>Are you sure you want to proceed?</p>
  </CardContent>
  <CardFooter className="gap-2">
    <Button variant="outline">Cancel</Button>
    <Button>Confirm</Button>
  </CardFooter>
</Card>`}
          />
        </div>
      </section>

      {/* API Reference */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-title-2 font-semibold">API Reference</h2>
          <p className="text-muted-foreground">
            Complete props documentation for the Card component.
          </p>
        </div>

        <PropsTable
          data={[
            {
              prop: "interactive",
              type: "boolean",
              default: "false",
              description: "Enable interactive mode with hover lift and sounds",
            },
            {
              prop: "soundEnabled",
              type: "boolean",
              default: "true",
              description: "Enable or disable sound effects",
            },
            {
              prop: "hoverSound",
              type: "SoundName",
              default: '"hover"',
              description:
                "Sound to play on hover (only when interactive=true)",
            },
            {
              prop: "clickSound",
              type: "SoundName",
              description: "Sound to play on click",
            },
            {
              prop: "className",
              type: "string",
              description: "Additional CSS classes",
            },
            {
              prop: "onClick",
              type: "(e: MouseEvent) => void",
              description: "Click event handler",
            },
          ]}
        />

        <div className="space-y-4">
          <h3 className="text-title-3 font-semibold">Card Parts</h3>
          <div className="rounded-xl border border-border/50 bg-card/30 p-6 space-y-3">
            <ul className="space-y-2 text-sm">
              <li>
                <code className="px-2 py-0.5 rounded bg-muted font-mono">
                  Card
                </code>{" "}
                - Main container
              </li>
              <li>
                <code className="px-2 py-0.5 rounded bg-muted font-mono">
                  CardHeader
                </code>{" "}
                - Header section with padding
              </li>
              <li>
                <code className="px-2 py-0.5 rounded bg-muted font-mono">
                  CardTitle
                </code>{" "}
                - Bold title text
              </li>
              <li>
                <code className="px-2 py-0.5 rounded bg-muted font-mono">
                  CardDescription
                </code>{" "}
                - Muted description text
              </li>
              <li>
                <code className="px-2 py-0.5 rounded bg-muted font-mono">
                  CardContent
                </code>{" "}
                - Main content area
              </li>
              <li>
                <code className="px-2 py-0.5 rounded bg-muted font-mono">
                  CardFooter
                </code>{" "}
                - Footer for actions/buttons
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-title-2 font-semibold">Best Practices</h2>
        </div>

        <div className="space-y-4">
          <InfoBox type="success" title="Do's">
            <ul className="space-y-2 text-sm">
              <li>✅ Use cards to group related content</li>
              <li>✅ Keep card content concise and scannable</li>
              <li>✅ Use interactive mode for clickable cards</li>
              <li>✅ Maintain consistent card heights in grids</li>
              <li>✅ Use CardFooter for actions and buttons</li>
            </ul>
          </InfoBox>

          <InfoBox type="warning" title="Don'ts">
            <ul className="space-y-2 text-sm">
              <li>❌ Don&apos;t nest cards deeply (max 1 level)</li>
              <li>❌ Avoid overfilling cards with too much content</li>
              <li>❌ Don&apos;t make non-interactive cards look clickable</li>
              <li>❌ Avoid inconsistent padding across card parts</li>
            </ul>
          </InfoBox>
        </div>
      </section>
    </div>
  );
}
