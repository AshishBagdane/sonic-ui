"use client";

import React, { useState } from "react";
import {
  ToggleLeft,
  Sparkles,
  Volume2,
  Palette,
  Zap,
  Moon,
  Sun,
  Bell,
  Wifi,
  Bluetooth,
} from "lucide-react";
import { CodeBlock, PropsTable, InfoBox, InteractiveDemo } from "./shared";
import { Switch } from "@/components/ui/switch";

export default function SwitchDocsSection() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [wifi, setWifi] = useState(true);
  const [bluetooth, setBluetooth] = useState(false);
  const [airplaneMode, setAirplaneMode] = useState(false);

  return (
    <div id="switch" className="space-y-16 scroll-mt-20">
      {/* Hero Section */}
      <div className="space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-interactive/10 text-interactive text-sm font-medium">
          <ToggleLeft className="w-4 h-4" />
          <span>Component • Toggle</span>
        </div>

        <div className="space-y-4">
          <h1 className="text-display font-bold tracking-tight">Switch</h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            A sound-reactive toggle switch component with smooth animations and
            Apple-inspired design. Perfect for boolean settings and preferences.
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
            <p className="text-xs text-muted-foreground">On, Off, Hover</p>
          </div>

          <div className="rounded-xl border border-border/50 bg-card/30 p-4">
            <div className="flex items-center gap-2 text-interactive mb-1">
              <Palette className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider">
                States
              </span>
            </div>
            <p className="text-2xl font-bold">2</p>
            <p className="text-xs text-muted-foreground">On, Off</p>
          </div>

          <div className="rounded-xl border border-border/50 bg-card/30 p-4">
            <div className="flex items-center gap-2 text-interactive mb-1">
              <Zap className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider">
                Animation
              </span>
            </div>
            <p className="text-2xl font-bold">Yes</p>
            <p className="text-xs text-muted-foreground">Smooth slide</p>
          </div>

          <div className="rounded-xl border border-border/50 bg-card/30 p-4">
            <div className="flex items-center gap-2 text-interactive mb-1">
              <Sparkles className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider">
                Accessible
              </span>
            </div>
            <p className="text-2xl font-bold">Yes</p>
            <p className="text-xs text-muted-foreground">ARIA labels</p>
          </div>
        </div>
      </div>

      {/* Interactive Demo */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-title-2 font-semibold">Interactive Demo</h2>
          <p className="text-muted-foreground">
            Try toggling the switches to experience the sound effects and
            animations.
          </p>
        </div>

        <InteractiveDemo
          title="Basic Switch"
          description="Simple on/off toggle"
        >
          <div className="flex items-center gap-3">
            <Switch
              checked={notifications}
              onCheckedChange={setNotifications}
            />
            <span className="text-sm font-medium">
              Notifications {notifications ? "Enabled" : "Disabled"}
            </span>
          </div>
        </InteractiveDemo>

        <InteractiveDemo
          title="Settings Panel"
          description="Multiple switches with labels and icons"
        >
          <div className="w-full max-w-md space-y-4">
            <div className="flex items-center justify-between p-4 rounded-lg border border-border/50 bg-card/30">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-interactive/10 flex items-center justify-center">
                  {darkMode ? (
                    <Moon className="w-4 h-4 text-interactive" />
                  ) : (
                    <Sun className="w-4 h-4 text-interactive" />
                  )}
                </div>
                <div>
                  <p className="text-sm font-medium">Dark Mode</p>
                  <p className="text-xs text-muted-foreground">
                    {darkMode ? "On" : "Off"}
                  </p>
                </div>
              </div>
              <Switch checked={darkMode} onCheckedChange={setDarkMode} />
            </div>

            <div className="flex items-center justify-between p-4 rounded-lg border border-border/50 bg-card/30">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-interactive/10 flex items-center justify-center">
                  <Bell className="w-4 h-4 text-interactive" />
                </div>
                <div>
                  <p className="text-sm font-medium">Notifications</p>
                  <p className="text-xs text-muted-foreground">
                    {notifications ? "Enabled" : "Disabled"}
                  </p>
                </div>
              </div>
              <Switch
                checked={notifications}
                onCheckedChange={setNotifications}
              />
            </div>

            <div className="flex items-center justify-between p-4 rounded-lg border border-border/50 bg-card/30">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-interactive/10 flex items-center justify-center">
                  <Wifi className="w-4 h-4 text-interactive" />
                </div>
                <div>
                  <p className="text-sm font-medium">Wi-Fi</p>
                  <p className="text-xs text-muted-foreground">
                    {wifi ? "Connected" : "Disconnected"}
                  </p>
                </div>
              </div>
              <Switch checked={wifi} onCheckedChange={setWifi} />
            </div>

            <div className="flex items-center justify-between p-4 rounded-lg border border-border/50 bg-card/30">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-interactive/10 flex items-center justify-center">
                  <Bluetooth className="w-4 h-4 text-interactive" />
                </div>
                <div>
                  <p className="text-sm font-medium">Bluetooth</p>
                  <p className="text-xs text-muted-foreground">
                    {bluetooth ? "On" : "Off"}
                  </p>
                </div>
              </div>
              <Switch checked={bluetooth} onCheckedChange={setBluetooth} />
            </div>
          </div>
        </InteractiveDemo>

        <InteractiveDemo
          title="Disabled State"
          description="Switch cannot be toggled"
        >
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Switch checked={true} disabled />
              <span className="text-sm text-muted-foreground">
                Disabled (On)
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Switch checked={false} disabled />
              <span className="text-sm text-muted-foreground">
                Disabled (Off)
              </span>
            </div>
          </div>
        </InteractiveDemo>

        <InteractiveDemo
          title="Custom Sounds"
          description="Override default sound effects"
        >
          <div className="flex items-center gap-3">
            <Switch
              checked={airplaneMode}
              onCheckedChange={setAirplaneMode}
              onSound="success"
              offSound="whoosh"
            />
            <span className="text-sm font-medium">
              Airplane Mode (Custom Sounds)
            </span>
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
            code={`npm install @radix-ui/react-switch`}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-title-3 font-semibold">Copy Component Code</h3>

          <CodeBlock
            filename="components/ui/switch.tsx"
            language="tsx"
            code={`"use client";

import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { useSound } from "@/components/sound-provider";

function cn(...inputs: (string | undefined | null | false)[]) {
  return inputs.filter(Boolean).join(" ");
}

type SoundName = "click" | "hover" | "success" | "whoosh" | "button";

export interface SwitchProps
  extends React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> {
  soundEnabled?: boolean;
  onSound?: SoundName;
  offSound?: SoundName;
  hoverSound?: SoundName;
}

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  SwitchProps
>(
  (
    {
      className,
      soundEnabled = true,
      onSound = "click",
      offSound = "click",
      hoverSound = "hover",
      onCheckedChange,
      onMouseEnter,
      disabled,
      ...props
    },
    ref
  ) => {
    const { playSound, enabled: globalSoundEnabled } = useSound();

    const shouldPlaySound = soundEnabled && globalSoundEnabled && !disabled;

    const handleCheckedChange = (checked: boolean) => {
      if (shouldPlaySound) {
        playSound(checked ? onSound : offSound);
      }
      onCheckedChange?.(checked);
    };

    const handleMouseEnter = (
      e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
      if (shouldPlaySound && hoverSound) {
        playSound(hoverSound);
      }
      onMouseEnter?.(e);
    };

    return (
      <SwitchPrimitives.Root
        ref={ref}
        className={cn(
          "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
          "data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
          "active:scale-95",
          className
        )}
        onCheckedChange={handleCheckedChange}
        onMouseEnter={handleMouseEnter}
        disabled={disabled}
        {...props}
      >
        <SwitchPrimitives.Thumb
          className={cn(
            "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform duration-200",
            "data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
          )}
        />
      </SwitchPrimitives.Root>
    );
  }
);

Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };`}
          />
        </div>
      </section>

      {/* Usage Examples */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-title-2 font-semibold">Usage Examples</h2>
          <p className="text-muted-foreground">
            Common patterns and use cases for the Switch component.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-title-3 font-semibold">Basic Usage</h3>

          <CodeBlock
            filename="app/page.tsx"
            language="tsx"
            code={`"use client";

import { useState } from "react";
import { Switch } from "@/components/ui/switch";

export default function Page() {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="flex items-center gap-2">
      <Switch checked={enabled} onCheckedChange={setEnabled} />
      <span>Toggle me</span>
    </div>
  );
}`}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-title-3 font-semibold">Settings Panel</h3>

          <CodeBlock
            filename="components/settings.tsx"
            language="tsx"
            code={`"use client";

import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Bell, Moon } from "lucide-react";

export function SettingsPanel() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Bell className="w-4 h-4" />
          <div>
            <p className="text-sm font-medium">Notifications</p>
            <p className="text-xs text-muted-foreground">
              Receive push notifications
            </p>
          </div>
        </div>
        <Switch 
          checked={notifications} 
          onCheckedChange={setNotifications} 
        />
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Moon className="w-4 h-4" />
          <div>
            <p className="text-sm font-medium">Dark Mode</p>
            <p className="text-xs text-muted-foreground">
              Use dark theme
            </p>
          </div>
        </div>
        <Switch 
          checked={darkMode} 
          onCheckedChange={setDarkMode} 
        />
      </div>
    </div>
  );
}`}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-title-3 font-semibold">With Custom Sounds</h3>

          <CodeBlock
            filename="app/page.tsx"
            language="tsx"
            code={`<Switch 
  checked={enabled}
  onCheckedChange={setEnabled}
  onSound="success"
  offSound="whoosh"
  hoverSound="hover"
/>

<Switch 
  checked={enabled}
  onCheckedChange={setEnabled}
  soundEnabled={false}
/>`}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-title-3 font-semibold">With Form</h3>

          <CodeBlock
            filename="components/form.tsx"
            language="tsx"
            code={`"use client";

import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";

export function PreferencesForm() {
  const [preferences, setPreferences] = useState({
    newsletter: true,
    marketing: false,
    updates: true,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Preferences:", preferences);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium">
            Newsletter Subscription
          </label>
          <Switch
            checked={preferences.newsletter}
            onCheckedChange={(checked) =>
              setPreferences({ ...preferences, newsletter: checked })
            }
          />
        </div>

        <div className="flex items-center justify-between">
          <label className="text-sm font-medium">
            Marketing Emails
          </label>
          <Switch
            checked={preferences.marketing}
            onCheckedChange={(checked) =>
              setPreferences({ ...preferences, marketing: checked })
            }
          />
        </div>

        <div className="flex items-center justify-between">
          <label className="text-sm font-medium">
            Product Updates
          </label>
          <Switch
            checked={preferences.updates}
            onCheckedChange={(checked) =>
              setPreferences({ ...preferences, updates: checked })
            }
          />
        </div>
      </div>

      <Button type="submit">Save Preferences</Button>
    </form>
  );
}`}
          />
        </div>
      </section>

      {/* API Reference */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-title-2 font-semibold">API Reference</h2>
          <p className="text-muted-foreground">
            Complete props documentation for the Switch component.
          </p>
        </div>

        <PropsTable
          data={[
            {
              prop: "checked",
              type: "boolean",
              description: "The controlled checked state of the switch",
            },
            {
              prop: "onCheckedChange",
              type: "(checked: boolean) => void",
              description:
                "Event handler called when the checked state changes",
            },
            {
              prop: "soundEnabled",
              type: "boolean",
              default: "true",
              description: "Enable or disable sound effects for this switch",
            },
            {
              prop: "onSound",
              type: "SoundName",
              default: '"click"',
              description:
                'Sound to play when switched on. Options: "click" | "hover" | "success" | "whoosh" | "button"',
            },
            {
              prop: "offSound",
              type: "SoundName",
              default: '"click"',
              description:
                'Sound to play when switched off. Options: "click" | "hover" | "success" | "whoosh" | "button"',
            },
            {
              prop: "hoverSound",
              type: "SoundName",
              default: '"hover"',
              description: "Sound to play on hover",
            },
            {
              prop: "disabled",
              type: "boolean",
              default: "false",
              description:
                "Disable the switch (also disables sounds and animations)",
            },
            {
              prop: "defaultChecked",
              type: "boolean",
              description: "The default checked state (uncontrolled)",
            },
          ]}
        />
      </section>

      {/* Animation Details */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-title-2 font-semibold">Animation Details</h2>
          <p className="text-muted-foreground">
            Understanding the motion behavior of the Switch component.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-border/50 bg-card/30 p-6 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-interactive/10 flex items-center justify-center">
                <Zap className="w-4 h-4 text-interactive" />
              </div>
              <h3 className="font-semibold">Thumb Animation</h3>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Smooth slide transition (200ms)</li>
              <li>• Translates 5 units (20px)</li>
              <li>• Shadow follows thumb</li>
              <li>• No jitter or stutter</li>
            </ul>
          </div>

          <div className="rounded-xl border border-border/50 bg-card/30 p-6 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-interactive/10 flex items-center justify-center">
                <Palette className="w-4 h-4 text-interactive" />
              </div>
              <h3 className="font-semibold">Color Transition</h3>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Background fades smoothly</li>
              <li>• Off: Input color (muted)</li>
              <li>• On: Primary color</li>
              <li>• Syncs with thumb movement</li>
            </ul>
          </div>
        </div>

        <InfoBox type="info" title="Accessibility">
          <p>
            The Switch component is built on Radix UI primitives with full
            keyboard support. Users can toggle with{" "}
            <kbd className="px-2 py-0.5 rounded bg-muted text-xs font-mono">
              Space
            </kbd>{" "}
            or{" "}
            <kbd className="px-2 py-0.5 rounded bg-muted text-xs font-mono">
              Enter
            </kbd>{" "}
            keys. Focus states are clearly indicated with ring outlines.
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
              <li>✅ Use for binary on/off settings</li>
              <li>✅ Provide clear labels next to switches</li>
              <li>✅ Group related switches together</li>
              <li>
                ✅ Show immediate feedback (don&apos;t require save button)
              </li>
              <li>✅ Use consistent switch placement in settings</li>
            </ul>
          </InfoBox>

          <InfoBox type="warning" title="Don'ts">
            <ul className="space-y-2 text-sm">
              <li>
                ❌ Don&apos;t use for multi-option selections (use radio
                buttons)
              </li>
              <li>❌ Avoid ambiguous labels like &quot;Toggle feature&quot;</li>
              <li>❌ Don&apos;t hide switches in nested menus</li>
              <li>❌ Avoid requiring confirmation for toggle changes</li>
            </ul>
          </InfoBox>
        </div>
      </section>
    </div>
  );
}
