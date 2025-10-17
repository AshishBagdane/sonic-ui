"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  Mail,
  Lock,
  Search,
  User,
  CreditCard,
  Phone,
} from "lucide-react";
import { useSound } from "@/components/sound-provider";
import { ComponentPreview } from "@/components/demo/component-preview";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function InputPage() {
  const { playSound } = useSound();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [emailSuccess, setEmailSuccess] = useState(false);

  const validateEmail = (value: string) => {
    if (!value) {
      setEmailError("");
      setEmailSuccess(false);
      return;
    }
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    if (isValid) {
      setEmailError("");
      setEmailSuccess(true);
    } else {
      setEmailError("Please enter a valid email address");
      setEmailSuccess(false);
    }
  };

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
              <div className="p-3 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/20">
                <Mail className="w-6 h-6 text-purple-500" />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                Input
              </h1>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
              Text fields with focus sounds, validation feedback, and smooth
              animations. Built for an elegant user input experience.
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
            <ComponentPreview code={`<Input placeholder="Enter text..." />`}>
              <Input placeholder="Enter text..." />
            </ComponentPreview>
          </div>

          {/* With Label */}
          <div>
            <h2 className="text-3xl font-bold mb-4">With Label</h2>
            <p className="text-muted-foreground mb-8">
              Add labels that animate on focus for better context.
            </p>

            <ComponentPreview
              code={`<Input 
  label="Email Address" 
  type="email"
  placeholder="you@example.com" 
/>`}
            >
              <Input
                label="Email Address"
                type="email"
                placeholder="you@example.com"
              />
            </ComponentPreview>
          </div>

          {/* Variants */}
          <div>
            <h2 className="text-3xl font-bold mb-4">Variants</h2>
            <p className="text-muted-foreground mb-8">
              Different visual styles for different contexts.
            </p>

            <div className="space-y-6">
              <ComponentPreview
                title="Default"
                description="Standard input with border"
                code={`<Input 
  variant="default" 
  placeholder="Default variant" 
/>`}
              >
                <Input variant="default" placeholder="Default variant" />
              </ComponentPreview>

              <ComponentPreview
                title="Ghost"
                description="Minimal input with no border"
                code={`<Input 
  variant="ghost" 
  placeholder="Ghost variant" 
/>`}
              >
                <Input variant="ghost" placeholder="Ghost variant" />
              </ComponentPreview>

              <ComponentPreview
                title="Filled"
                description="Input with solid background"
                code={`<Input 
  variant="filled" 
  placeholder="Filled variant" 
/>`}
              >
                <Input variant="filled" placeholder="Filled variant" />
              </ComponentPreview>
            </div>
          </div>

          {/* With Icons */}
          <div>
            <h2 className="text-3xl font-bold mb-4">With Icons</h2>
            <p className="text-muted-foreground mb-8">
              Add left or right icons for better visual context.
            </p>

            <div className="space-y-6">
              <ComponentPreview
                title="Left Icon"
                code={`<Input 
  leftIcon={<Mail className="w-4 h-4" />}
  placeholder="Email address"
/>`}
              >
                <Input
                  leftIcon={<Mail className="w-4 h-4" />}
                  placeholder="Email address"
                />
              </ComponentPreview>

              <ComponentPreview
                title="Right Icon"
                code={`<Input 
  rightIcon={<Search className="w-4 h-4" />}
  placeholder="Search..."
/>`}
              >
                <Input
                  rightIcon={<Search className="w-4 h-4" />}
                  placeholder="Search..."
                />
              </ComponentPreview>

              <ComponentPreview
                title="With Label and Icon"
                code={`<Input 
  label="Username"
  leftIcon={<User className="w-4 h-4" />}
  placeholder="Enter username"
/>`}
              >
                <Input
                  label="Username"
                  leftIcon={<User className="w-4 h-4" />}
                  placeholder="Enter username"
                />
              </ComponentPreview>
            </div>
          </div>

          {/* Password Input */}
          <div>
            <h2 className="text-3xl font-bold mb-4">Password Input</h2>
            <p className="text-muted-foreground mb-8">
              Password fields with built-in show/hide toggle.
            </p>

            <ComponentPreview
              code={`<Input 
  label="Password"
  type="password"
  placeholder="Enter password"
  leftIcon={<Lock className="w-4 h-4" />}
/>`}
            >
              <Input
                label="Password"
                type="password"
                placeholder="Enter password"
                leftIcon={<Lock className="w-4 h-4" />}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </ComponentPreview>
          </div>

          {/* Validation States */}
          <div>
            <h2 className="text-3xl font-bold mb-4">Validation States</h2>
            <p className="text-muted-foreground mb-8">
              Visual feedback for validation with error messages and success
              states.
            </p>

            <div className="space-y-6">
              <ComponentPreview
                title="Error State"
                description="Shows error message with shake animation"
                code={`<Input 
  label="Email"
  type="email"
  error="Please enter a valid email address"
  leftIcon={<Mail className="w-4 h-4" />}
/>`}
              >
                <Input
                  label="Email"
                  type="email"
                  error="Please enter a valid email address"
                  leftIcon={<Mail className="w-4 h-4" />}
                />
              </ComponentPreview>

              <ComponentPreview
                title="Success State"
                description="Shows success indicator"
                code={`<Input 
  label="Email"
  type="email"
  success
  defaultValue="john@example.com"
  leftIcon={<Mail className="w-4 h-4" />}
/>`}
              >
                <Input
                  label="Email"
                  type="email"
                  success
                  defaultValue="john@example.com"
                  leftIcon={<Mail className="w-4 h-4" />}
                />
              </ComponentPreview>

              <ComponentPreview
                title="Live Validation"
                description="Try typing an email to see live validation"
                code={`const [email, setEmail] = useState("");
const [error, setError] = useState("");
const [success, setSuccess] = useState(false);

<Input 
  label="Email"
  type="email"
  value={email}
  onChange={(e) => {
    setEmail(e.target.value);
    validateEmail(e.target.value);
  }}
  error={error}
  success={success}
  leftIcon={<Mail className="w-4 h-4" />}
  placeholder="Try typing an email..."
/>`}
              >
                <Input
                  label="Email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    validateEmail(e.target.value);
                  }}
                  error={emailError}
                  success={emailSuccess}
                  leftIcon={<Mail className="w-4 h-4" />}
                  placeholder="Try typing an email..."
                />
              </ComponentPreview>
            </div>
          </div>

          {/* Sound Customization */}
          <div>
            <h2 className="text-3xl font-bold mb-4">Sound Customization</h2>
            <p className="text-muted-foreground mb-8">
              Override default sounds or disable sound for specific inputs.
            </p>

            <div className="space-y-6">
              <ComponentPreview
                title="Custom Focus Sound"
                description="Use a different sound on focus"
                code={`<Input 
  focusSound="whoosh"
  placeholder="Custom focus sound"
/>`}
              >
                <Input focusSound="whoosh" placeholder="Custom focus sound" />
              </ComponentPreview>

              <ComponentPreview
                title="Custom Blur Sound"
                description="Change the blur sound effect"
                code={`<Input 
  blurSound="success"
  placeholder="Custom blur sound"
/>`}
              >
                <Input blurSound="success" placeholder="Custom blur sound" />
              </ComponentPreview>

              <ComponentPreview
                title="Silent Input"
                description="Disable sound for specific inputs"
                code={`<Input 
  soundEnabled={false}
  placeholder="No sound effects"
/>`}
              >
                <Input soundEnabled={false} placeholder="No sound effects" />
              </ComponentPreview>
            </div>
          </div>

          {/* Disabled State */}
          <div>
            <h2 className="text-3xl font-bold mb-4">Disabled</h2>
            <p className="text-muted-foreground mb-8">
              Disabled inputs have no animations or sound effects.
            </p>

            <ComponentPreview
              code={`<div className="space-y-4">
  <Input 
    label="Disabled Input"
    disabled 
    placeholder="Cannot type here" 
  />
  <Input 
    label="Disabled with Value"
    disabled 
    value="Read-only value" 
  />
</div>`}
            >
              <div className="space-y-4">
                <Input
                  label="Disabled Input"
                  disabled
                  placeholder="Cannot type here"
                />
                <Input
                  label="Disabled with Value"
                  disabled
                  value="Read-only value"
                />
              </div>
            </ComponentPreview>
          </div>

          {/* Form Example */}
          <div>
            <h2 className="text-3xl font-bold mb-4">Form Example</h2>
            <p className="text-muted-foreground mb-8">
              Complete form with various input types.
            </p>

            <ComponentPreview
              code={`<div className="space-y-4 max-w-md">
  <Input 
    label="Full Name"
    leftIcon={<User className="w-4 h-4" />}
    placeholder="John Doe"
  />
  <Input 
    label="Email"
    type="email"
    leftIcon={<Mail className="w-4 h-4" />}
    placeholder="john@example.com"
  />
  <Input 
    label="Phone"
    type="tel"
    leftIcon={<Phone className="w-4 h-4" />}
    placeholder="+1 (555) 000-0000"
  />
  <Input 
    label="Credit Card"
    leftIcon={<CreditCard className="w-4 h-4" />}
    placeholder="1234 5678 9012 3456"
  />
  <Input 
    label="Password"
    type="password"
    leftIcon={<Lock className="w-4 h-4" />}
    placeholder="Enter secure password"
  />
</div>`}
            >
              <div className="space-y-4 max-w-md">
                <Input
                  label="Full Name"
                  leftIcon={<User className="w-4 h-4" />}
                  placeholder="John Doe"
                />
                <Input
                  label="Email"
                  type="email"
                  leftIcon={<Mail className="w-4 h-4" />}
                  placeholder="john@example.com"
                />
                <Input
                  label="Phone"
                  type="tel"
                  leftIcon={<Phone className="w-4 h-4" />}
                  placeholder="+1 (555) 000-0000"
                />
                <Input
                  label="Credit Card"
                  leftIcon={<CreditCard className="w-4 h-4" />}
                  placeholder="1234 5678 9012 3456"
                />
                <Input
                  label="Password"
                  type="password"
                  leftIcon={<Lock className="w-4 h-4" />}
                  placeholder="Enter secure password"
                />
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
                  npx shadcn-ui@latest add input
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
                  <code>{`import { Input } from "@/components/ui/input"

export function Example() {
  return (
    <Input 
      label="Email"
      type="email"
      placeholder="you@example.com"
    />
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
                        focusSound
                      </td>
                      <td className="px-6 py-4 text-sm font-mono text-muted-foreground">
                        SoundName
                      </td>
                      <td className="px-6 py-4 text-sm font-mono text-muted-foreground">
                        hover
                      </td>
                      <td className="px-6 py-4 text-sm">
                        Sound to play on focus
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-mono">blurSound</td>
                      <td className="px-6 py-4 text-sm font-mono text-muted-foreground">
                        SoundName
                      </td>
                      <td className="px-6 py-4 text-sm font-mono text-muted-foreground">
                        click
                      </td>
                      <td className="px-6 py-4 text-sm">
                        Sound to play on blur
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-mono">error</td>
                      <td className="px-6 py-4 text-sm font-mono text-muted-foreground">
                        string
                      </td>
                      <td className="px-6 py-4 text-sm font-mono text-muted-foreground">
                        -
                      </td>
                      <td className="px-6 py-4 text-sm">
                        Error message to display
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-mono">success</td>
                      <td className="px-6 py-4 text-sm font-mono text-muted-foreground">
                        boolean
                      </td>
                      <td className="px-6 py-4 text-sm font-mono text-muted-foreground">
                        false
                      </td>
                      <td className="px-6 py-4 text-sm">Show success state</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-mono">label</td>
                      <td className="px-6 py-4 text-sm font-mono text-muted-foreground">
                        string
                      </td>
                      <td className="px-6 py-4 text-sm font-mono text-muted-foreground">
                        -
                      </td>
                      <td className="px-6 py-4 text-sm">Label text</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-mono">leftIcon</td>
                      <td className="px-6 py-4 text-sm font-mono text-muted-foreground">
                        ReactNode
                      </td>
                      <td className="px-6 py-4 text-sm font-mono text-muted-foreground">
                        -
                      </td>
                      <td className="px-6 py-4 text-sm">
                        Icon on the left side
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-mono">rightIcon</td>
                      <td className="px-6 py-4 text-sm font-mono text-muted-foreground">
                        ReactNode
                      </td>
                      <td className="px-6 py-4 text-sm font-mono text-muted-foreground">
                        -
                      </td>
                      <td className="px-6 py-4 text-sm">
                        Icon on the right side
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
