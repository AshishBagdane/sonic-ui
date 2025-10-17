"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  Sparkles,
  Download,
  Trash2,
  Mail,
  Github,
} from "lucide-react";
import { useSound } from "@/components/sound-provider";
import { ComponentPreview } from "@/components/demo/component-preview";
import { Button } from "@/components/ui/button";

export default function ButtonPage() {
  const { playSound } = useSound();

  return (
    <div className="relative w-full">
      {/* Back Navigation */}
      <div className="w-full border-b border-border/40 bg-background/80 backdrop-blur-sm">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 py-4">
          <Link
            href="/components"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            onMouseEnter={() => playSound("hover")}
            onClick={() => playSound("click")}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Components
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="w-full border-b border-border/40 bg-gradient-to-b from-background to-secondary/20">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 py-16 sm:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/20">
                <Sparkles className="w-6 h-6 text-blue-500" />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                Button
              </h1>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
              Trigger actions with elegant sound feedback and smooth animations.
              Buttons are the most fundamental interactive elements in any
              interface.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 py-16 sm:py-24">
        <div className="space-y-24">
          {/* Default Preview */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Preview</h2>
            <ComponentPreview code={`<Button>Click me</Button>`}>
              <Button>Click me</Button>
            </ComponentPreview>
          </div>

          {/* Variants Section */}
          <div>
            <h2 className="text-3xl font-bold mb-4">Variants</h2>
            <p className="text-muted-foreground mb-8">
              Different visual styles for different contexts and actions.
            </p>

            <div className="space-y-6">
              <ComponentPreview
                title="Default"
                description="Primary action button with solid fill and shadow"
                code={`<Button variant="default">Default</Button>`}
              >
                <Button variant="default">Default</Button>
              </ComponentPreview>

              <ComponentPreview
                title="Destructive"
                description="For dangerous or destructive actions"
                code={`<Button variant="destructive">
  <Trash2 />
  Delete
</Button>`}
              >
                <Button variant="destructive">
                  <Trash2 />
                  Delete
                </Button>
              </ComponentPreview>

              <ComponentPreview
                title="Outline"
                description="Subtle button with border"
                code={`<Button variant="outline">Outline</Button>`}
              >
                <Button variant="outline">Outline</Button>
              </ComponentPreview>

              <ComponentPreview
                title="Secondary"
                description="Secondary actions with muted styling"
                code={`<Button variant="secondary">Secondary</Button>`}
              >
                <Button variant="secondary">Secondary</Button>
              </ComponentPreview>

              <ComponentPreview
                title="Ghost"
                description="Minimal button with no background"
                code={`<Button variant="ghost">Ghost</Button>`}
              >
                <Button variant="ghost">Ghost</Button>
              </ComponentPreview>

              <ComponentPreview
                title="Link"
                description="Text link style button"
                code={`<Button variant="link">Link</Button>`}
              >
                <Button variant="link">Link</Button>
              </ComponentPreview>
            </div>
          </div>

          {/* Sizes Section */}
          <div>
            <h2 className="text-3xl font-bold mb-4">Sizes</h2>
            <p className="text-muted-foreground mb-8">
              Three sizes to fit different contexts and layouts.
            </p>

            <ComponentPreview
              code={`<div className="flex items-center gap-4">
  <Button size="sm">Small</Button>
  <Button size="default">Default</Button>
  <Button size="lg">Large</Button>
</div>`}
            >
              <div className="flex items-center gap-4">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
              </div>
            </ComponentPreview>
          </div>

          {/* With Icons */}
          <div>
            <h2 className="text-3xl font-bold mb-4">With Icons</h2>
            <p className="text-muted-foreground mb-8">
              Combine buttons with icons for better visual communication.
            </p>

            <ComponentPreview
              code={`<div className="flex flex-wrap gap-4">
  <Button>
    <Mail />
    Email
  </Button>
  <Button variant="secondary">
    <Download />
    Download
  </Button>
  <Button variant="outline">
    <Github />
    GitHub
  </Button>
</div>`}
            >
              <div className="flex flex-wrap gap-4">
                <Button>
                  <Mail />
                  Email
                </Button>
                <Button variant="secondary">
                  <Download />
                  Download
                </Button>
                <Button variant="outline">
                  <Github />
                  GitHub
                </Button>
              </div>
            </ComponentPreview>
          </div>

          {/* Sound Customization */}
          <div>
            <h2 className="text-3xl font-bold mb-4">Sound Customization</h2>
            <p className="text-muted-foreground mb-8">
              Override default sounds or disable sound for specific buttons.
            </p>

            <div className="space-y-6">
              <ComponentPreview
                title="Custom Click Sound"
                description="Use a different sound for the click action"
                code={`<Button clickSound="success">Success Sound</Button>`}
              >
                <Button clickSound="success">Success Sound</Button>
              </ComponentPreview>

              <ComponentPreview
                title="Custom Hover Sound"
                description="Change the hover sound effect"
                code={`<Button hoverSound="whoosh">Whoosh Hover</Button>`}
              >
                <Button hoverSound="whoosh">Whoosh Hover</Button>
              </ComponentPreview>

              <ComponentPreview
                title="Silent Button"
                description="Disable sound for specific buttons"
                code={`<Button soundEnabled={false}>No Sound</Button>`}
              >
                <Button soundEnabled={false}>No Sound</Button>
              </ComponentPreview>
            </div>
          </div>

          {/* Disabled State */}
          <div>
            <h2 className="text-3xl font-bold mb-4">Disabled</h2>
            <p className="text-muted-foreground mb-8">
              Disabled buttons have no animations or sound effects.
            </p>

            <ComponentPreview
              code={`<div className="flex flex-wrap gap-4">
  <Button disabled>Default</Button>
  <Button variant="secondary" disabled>Secondary</Button>
  <Button variant="outline" disabled>Outline</Button>
</div>`}
            >
              <div className="flex flex-wrap gap-4">
                <Button disabled>Default</Button>
                <Button variant="secondary" disabled>
                  Secondary
                </Button>
                <Button variant="outline" disabled>
                  Outline
                </Button>
              </div>
            </ComponentPreview>
          </div>

          {/* Installation Section */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Installation</h2>
            <div className="rounded-lg border border-border/50 bg-card overflow-hidden">
              <div className="bg-muted/50 px-6 py-4 border-b border-border/50">
                <p className="text-sm font-medium">Terminal</p>
              </div>
              <div className="p-6">
                <code className="text-sm font-mono">
                  npx shadcn-ui@latest add button
                </code>
              </div>
            </div>
          </div>

          {/* Usage Section */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Usage</h2>
            <div className="rounded-lg border border-border/50 bg-card overflow-hidden">
              <div className="bg-muted/50 px-6 py-4 border-b border-border/50">
                <p className="text-sm font-medium">example.tsx</p>
              </div>
              <div className="p-6">
                <pre className="text-sm font-mono overflow-x-auto">
                  <code>{`import { Button } from "@/components/ui/button"

export function Example() {
  return (
    <Button>Click me</Button>
  )
}`}</code>
                </pre>
              </div>
            </div>
          </div>

          {/* Props Documentation */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Props</h2>
            <div className="rounded-lg border border-border/50 bg-card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border/50 bg-muted/50">
                      <th className="px-6 py-4 text-left text-sm font-medium">
                        Prop
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-medium">
                        Type
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-medium">
                        Default
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-medium">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/50">
                    <tr>
                      <td className="px-6 py-4 text-sm font-mono">variant</td>
                      <td className="px-6 py-4 text-sm font-mono text-muted-foreground">
                        string
                      </td>
                      <td className="px-6 py-4 text-sm font-mono text-muted-foreground">
                        default
                      </td>
                      <td className="px-6 py-4 text-sm">
                        Visual style variant
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-mono">size</td>
                      <td className="px-6 py-4 text-sm font-mono text-muted-foreground">
                        string
                      </td>
                      <td className="px-6 py-4 text-sm font-mono text-muted-foreground">
                        default
                      </td>
                      <td className="px-6 py-4 text-sm">Button size</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-mono">
                        soundEnabled
                      </td>
                      <td className="px-6 py-4 text-sm font-mono text-muted-foreground">
                        boolean
                      </td>
                      <td className="px-6 py-4 text-sm font-mono text-muted-foreground">
                        true
                      </td>
                      <td className="px-6 py-4 text-sm">
                        Enable/disable sound effects
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-mono">
                        clickSound
                      </td>
                      <td className="px-6 py-4 text-sm font-mono text-muted-foreground">
                        SoundName
                      </td>
                      <td className="px-6 py-4 text-sm font-mono text-muted-foreground">
                        click
                      </td>
                      <td className="px-6 py-4 text-sm">
                        Sound to play on click
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-mono">
                        hoverSound
                      </td>
                      <td className="px-6 py-4 text-sm font-mono text-muted-foreground">
                        SoundName
                      </td>
                      <td className="px-6 py-4 text-sm font-mono text-muted-foreground">
                        hover
                      </td>
                      <td className="px-6 py-4 text-sm">
                        Sound to play on hover
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-mono">asChild</td>
                      <td className="px-6 py-4 text-sm font-mono text-muted-foreground">
                        boolean
                      </td>
                      <td className="px-6 py-4 text-sm font-mono text-muted-foreground">
                        false
                      </td>
                      <td className="px-6 py-4 text-sm">
                        Render as child element
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
