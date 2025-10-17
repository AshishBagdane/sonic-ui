"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ToggleLeft } from "lucide-react";
import { useSound } from "@/components/sound-provider";
import { ComponentPreview } from "@/components/demo/component-preview";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";

export default function SwitchPage() {
  const { playSound } = useSound();
  const [airplaneMode, setAirplaneMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [marketing, setMarketing] = useState(false);
  const [analytics, setAnalytics] = useState(true);

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
              <div className="p-3 rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/20">
                <ToggleLeft className="w-6 h-6 text-green-500" />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                Switch
              </h1>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
              Toggle states with satisfying click sounds and smooth animations.
              Perfect for settings, preferences, and binary options.
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
            <ComponentPreview code={`<Switch />`}>
              <Switch />
            </ComponentPreview>
          </div>

          {/* With Label */}
          <div>
            <h2 className="text-3xl font-bold mb-4">With Label</h2>
            <p className="text-muted-foreground mb-8">
              Always associate switches with labels for clarity and
              accessibility.
            </p>

            <ComponentPreview
              code={`<div className="flex items-center space-x-2">
  <Switch id="airplane-mode" />
  <label 
    htmlFor="airplane-mode"
    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
  >
    Airplane Mode
  </label>
</div>`}
            >
              <div className="flex items-center space-x-2">
                <Switch id="airplane-mode" />
                <label
                  htmlFor="airplane-mode"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Airplane Mode
                </label>
              </div>
            </ComponentPreview>
          </div>

          {/* Controlled */}
          <div>
            <h2 className="text-3xl font-bold mb-4">Controlled</h2>
            <p className="text-muted-foreground mb-8">
              Control the switch state with React state management.
            </p>

            <ComponentPreview
              code={`const [checked, setChecked] = useState(false)

<div className="flex items-center justify-between p-4 border rounded-lg">
  <div className="space-y-0.5">
    <label className="text-sm font-medium">
      Airplane Mode
    </label>
    <p className="text-sm text-muted-foreground">
      {checked ? "Enabled" : "Disabled"}
    </p>
  </div>
  <Switch 
    checked={checked} 
    onCheckedChange={setChecked} 
  />
</div>`}
            >
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="space-y-0.5">
                  <label className="text-sm font-medium">Airplane Mode</label>
                  <p className="text-sm text-muted-foreground">
                    {airplaneMode ? "Enabled" : "Disabled"}
                  </p>
                </div>
                <Switch
                  checked={airplaneMode}
                  onCheckedChange={setAirplaneMode}
                />
              </div>
            </ComponentPreview>
          </div>

          {/* Disabled State */}
          <div>
            <h2 className="text-3xl font-bold mb-4">Disabled</h2>
            <p className="text-muted-foreground mb-8">
              Disabled switches have no interactions or sound effects.
            </p>

            <ComponentPreview
              code={`<div className="space-y-4">
  <div className="flex items-center space-x-2">
    <Switch id="disabled-off" disabled />
    <label htmlFor="disabled-off">Disabled (Off)</label>
  </div>
  <div className="flex items-center space-x-2">
    <Switch id="disabled-on" disabled checked />
    <label htmlFor="disabled-on">Disabled (On)</label>
  </div>
</div>`}
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Switch id="disabled-off" disabled />
                  <label htmlFor="disabled-off" className="text-sm">
                    Disabled (Off)
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="disabled-on" disabled checked />
                  <label htmlFor="disabled-on" className="text-sm">
                    Disabled (On)
                  </label>
                </div>
              </div>
            </ComponentPreview>
          </div>

          {/* Sound Customization */}
          <div>
            <h2 className="text-3xl font-bold mb-4">Sound Customization</h2>
            <p className="text-muted-foreground mb-8">
              Override default sounds for different contexts and user feedback.
            </p>

            <div className="space-y-6">
              <ComponentPreview
                title="Success Sound ON"
                description="Play success sound when enabled"
                code={`<div className="flex items-center space-x-2">
  <Switch id="success-sound" onSound="success" />
  <label htmlFor="success-sound">
    Enable Feature (Success Sound)
  </label>
</div>`}
              >
                <div className="flex items-center space-x-2">
                  <Switch id="success-sound" onSound="success" />
                  <label htmlFor="success-sound" className="text-sm">
                    Enable Feature (Success Sound)
                  </label>
                </div>
              </ComponentPreview>

              <ComponentPreview
                title="Whoosh Sound OFF"
                description="Play whoosh sound when disabled"
                code={`<div className="flex items-center space-x-2">
  <Switch id="whoosh-sound" offSound="whoosh" />
  <label htmlFor="whoosh-sound">
    Disable Feature (Whoosh Sound)
  </label>
</div>`}
              >
                <div className="flex items-center space-x-2">
                  <Switch id="whoosh-sound" offSound="whoosh" />
                  <label htmlFor="whoosh-sound" className="text-sm">
                    Disable Feature (Whoosh Sound)
                  </label>
                </div>
              </ComponentPreview>

              <ComponentPreview
                title="Silent Switch"
                description="Disable sound for specific switches"
                code={`<div className="flex items-center space-x-2">
  <Switch id="silent" soundEnabled={false} />
  <label htmlFor="silent">No Sound</label>
</div>`}
              >
                <div className="flex items-center space-x-2">
                  <Switch id="silent" soundEnabled={false} />
                  <label htmlFor="silent" className="text-sm">
                    No Sound
                  </label>
                </div>
              </ComponentPreview>
            </div>
          </div>

          {/* Settings Panel Example */}
          <div>
            <h2 className="text-3xl font-bold mb-4">Settings Panel Example</h2>
            <p className="text-muted-foreground mb-8">
              Real-world example showing switches in a settings interface.
            </p>

            <ComponentPreview
              code={`const [notifications, setNotifications] = useState(true)
const [marketing, setMarketing] = useState(false)
const [analytics, setAnalytics] = useState(true)

<div className="border rounded-lg divide-y">
  <div className="flex items-center justify-between p-4">
    <div className="space-y-0.5">
      <label className="text-sm font-medium">
        Push Notifications
      </label>
      <p className="text-sm text-muted-foreground">
        Receive notifications about your activity
      </p>
    </div>
    <Switch 
      checked={notifications} 
      onCheckedChange={setNotifications} 
    />
  </div>
  
  <div className="flex items-center justify-between p-4">
    <div className="space-y-0.5">
      <label className="text-sm font-medium">
        Marketing Emails
      </label>
      <p className="text-sm text-muted-foreground">
        Receive emails about new features
      </p>
    </div>
    <Switch 
      checked={marketing} 
      onCheckedChange={setMarketing} 
    />
  </div>
  
  <div className="flex items-center justify-between p-4">
    <div className="space-y-0.5">
      <label className="text-sm font-medium">
        Analytics
      </label>
      <p className="text-sm text-muted-foreground">
        Help us improve by sharing usage data
      </p>
    </div>
    <Switch 
      checked={analytics} 
      onCheckedChange={setAnalytics} 
    />
  </div>
</div>`}
            >
              <div className="border rounded-lg divide-y max-w-2xl">
                <div className="flex items-center justify-between p-4">
                  <div className="space-y-0.5">
                    <label className="text-sm font-medium">
                      Push Notifications
                    </label>
                    <p className="text-sm text-muted-foreground">
                      Receive notifications about your activity
                    </p>
                  </div>
                  <Switch
                    checked={notifications}
                    onCheckedChange={setNotifications}
                  />
                </div>

                <div className="flex items-center justify-between p-4">
                  <div className="space-y-0.5">
                    <label className="text-sm font-medium">
                      Marketing Emails
                    </label>
                    <p className="text-sm text-muted-foreground">
                      Receive emails about new features
                    </p>
                  </div>
                  <Switch checked={marketing} onCheckedChange={setMarketing} />
                </div>

                <div className="flex items-center justify-between p-4">
                  <div className="space-y-0.5">
                    <label className="text-sm font-medium">Analytics</label>
                    <p className="text-sm text-muted-foreground">
                      Help us improve by sharing usage data
                    </p>
                  </div>
                  <Switch checked={analytics} onCheckedChange={setAnalytics} />
                </div>
              </div>
            </ComponentPreview>
          </div>

          {/* Installation */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Installation</h2>
            <div className="rounded-lg border border-border/50 bg-card overflow-hidden">
              <div className="bg-muted/50 px-6 py-4 border-b border-border/50">
                <p className="text-sm font-medium">Terminal</p>
              </div>
              <div className="p-6">
                <code className="text-sm font-mono">
                  npx shadcn-ui@latest add switch
                </code>
              </div>
            </div>
          </div>

          {/* Usage */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Usage</h2>
            <div className="rounded-lg border border-border/50 bg-card overflow-hidden">
              <div className="bg-muted/50 px-6 py-4 border-b border-border/50">
                <p className="text-sm font-medium">example.tsx</p>
              </div>
              <div className="p-6">
                <pre className="text-sm font-mono overflow-x-auto">
                  <code>{`import { Switch } from "@/components/ui/switch"

export function Example() {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <label htmlFor="airplane-mode">
        Airplane Mode
      </label>
    </div>
  )
}`}</code>
                </pre>
              </div>
            </div>
          </div>

          {/* Props Table */}
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
                      <td className="px-6 py-4 text-sm font-mono">checked</td>
                      <td className="px-6 py-4 text-sm font-mono text-muted-foreground">
                        boolean
                      </td>
                      <td className="px-6 py-4 text-sm font-mono text-muted-foreground">
                        -
                      </td>
                      <td className="px-6 py-4 text-sm">
                        Controlled checked state
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-mono">
                        defaultChecked
                      </td>
                      <td className="px-6 py-4 text-sm font-mono text-muted-foreground">
                        boolean
                      </td>
                      <td className="px-6 py-4 text-sm font-mono text-muted-foreground">
                        false
                      </td>
                      <td className="px-6 py-4 text-sm">
                        Default checked state (uncontrolled)
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-mono">
                        onCheckedChange
                      </td>
                      <td className="px-6 py-4 text-sm font-mono text-muted-foreground">
                        function
                      </td>
                      <td className="px-6 py-4 text-sm font-mono text-muted-foreground">
                        -
                      </td>
                      <td className="px-6 py-4 text-sm">
                        Callback when state changes
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-mono">disabled</td>
                      <td className="px-6 py-4 text-sm font-mono text-muted-foreground">
                        boolean
                      </td>
                      <td className="px-6 py-4 text-sm font-mono text-muted-foreground">
                        false
                      </td>
                      <td className="px-6 py-4 text-sm">Disable the switch</td>
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
                      <td className="px-6 py-4 text-sm font-mono">onSound</td>
                      <td className="px-6 py-4 text-sm font-mono text-muted-foreground">
                        SoundName
                      </td>
                      <td className="px-6 py-4 text-sm font-mono text-muted-foreground">
                        click
                      </td>
                      <td className="px-6 py-4 text-sm">
                        Sound when toggled ON
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-mono">offSound</td>
                      <td className="px-6 py-4 text-sm font-mono text-muted-foreground">
                        SoundName
                      </td>
                      <td className="px-6 py-4 text-sm font-mono text-muted-foreground">
                        click
                      </td>
                      <td className="px-6 py-4 text-sm">
                        Sound when toggled OFF
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
                      <td className="px-6 py-4 text-sm">Sound on hover</td>
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
