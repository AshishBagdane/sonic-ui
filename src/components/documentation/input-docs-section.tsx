"use client";

import React, { useState } from "react";
import {
  Type,
  Sparkles,
  Volume2,
  Palette,
  Eye,
  AlertCircle,
  CheckCircle2,
  Mail,
  Lock,
  User,
  Search,
} from "lucide-react";
import { CodeBlock, PropsTable, InfoBox, InteractiveDemo } from "./shared";
import { Input } from "@/components/ui/input";

export default function InputDocsSection() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div id="input" className="space-y-16 scroll-mt-20">
      {/* Hero Section */}
      <div className="space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-interactive/10 text-interactive text-sm font-medium">
          <Type className="w-4 h-4" />
          <span>Component • Form Input</span>
        </div>

        <div className="space-y-4">
          <h1 className="text-display font-bold tracking-tight">Input</h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            A sound-reactive input component with validation states, password
            visibility toggle, icons, and smooth animations. Perfect for forms
            with Apple-inspired design.
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
            <p className="text-xs text-muted-foreground">Focus, Blur</p>
          </div>

          <div className="rounded-xl border border-border/50 bg-card/30 p-4">
            <div className="flex items-center gap-2 text-interactive mb-1">
              <Palette className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider">
                Variants
              </span>
            </div>
            <p className="text-2xl font-bold">3</p>
            <p className="text-xs text-muted-foreground">
              Default, Ghost, Filled
            </p>
          </div>

          <div className="rounded-xl border border-border/50 bg-card/30 p-4">
            <div className="flex items-center gap-2 text-interactive mb-1">
              <Eye className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider">
                Password
              </span>
            </div>
            <p className="text-2xl font-bold">Yes</p>
            <p className="text-xs text-muted-foreground">Toggle visibility</p>
          </div>

          <div className="rounded-xl border border-border/50 bg-card/30 p-4">
            <div className="flex items-center gap-2 text-interactive mb-1">
              <CheckCircle2 className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider">
                Validation
              </span>
            </div>
            <p className="text-2xl font-bold">Yes</p>
            <p className="text-xs text-muted-foreground">Error & Success</p>
          </div>
        </div>
      </div>

      {/* Interactive Demo */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-title-2 font-semibold">Interactive Demo</h2>
          <p className="text-muted-foreground">
            Try focusing and typing in the inputs to experience the sound
            effects and animations.
          </p>
        </div>

        <InteractiveDemo
          title="Basic Input"
          description="Default input with label"
        >
          <div className="w-full max-w-md">
            <Input
              label="Email Address"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </InteractiveDemo>

        <InteractiveDemo
          title="With Icons"
          description="Left and right icon support"
        >
          <div className="w-full max-w-md space-y-4">
            <Input
              label="Username"
              placeholder="Enter username"
              leftIcon={<User className="w-4 h-4" />}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              label="Search"
              placeholder="Search..."
              leftIcon={<Search className="w-4 h-4" />}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </InteractiveDemo>

        <InteractiveDemo
          title="Password Input"
          description="Built-in toggle for password visibility"
        >
          <div className="w-full max-w-md">
            <Input
              label="Password"
              type="password"
              placeholder="Enter your password"
              leftIcon={<Lock className="w-4 h-4" />}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </InteractiveDemo>

        <InteractiveDemo
          title="Validation States"
          description="Error and success states with messages"
        >
          <div className="w-full max-w-md space-y-4">
            <Input
              label="Email"
              type="email"
              placeholder="you@example.com"
              error="Please enter a valid email address"
              leftIcon={<Mail className="w-4 h-4" />}
            />
            <Input
              label="Username"
              placeholder="johndoe"
              success={true}
              leftIcon={<User className="w-4 h-4" />}
            />
          </div>
        </InteractiveDemo>

        <InteractiveDemo title="Variants" description="Different visual styles">
          <div className="w-full max-w-md space-y-4">
            <Input
              label="Default"
              placeholder="Default variant"
              variant="default"
            />
            <Input label="Ghost" placeholder="Ghost variant" variant="ghost" />
            <Input
              label="Filled"
              placeholder="Filled variant"
              variant="filled"
            />
          </div>
        </InteractiveDemo>

        <InteractiveDemo
          title="Disabled State"
          description="Sounds and interactions are disabled"
        >
          <div className="w-full max-w-md space-y-4">
            <Input
              label="Disabled Input"
              placeholder="Cannot edit"
              disabled
              value="Disabled value"
            />
            <Input
              label="Disabled with Icon"
              placeholder="Cannot edit"
              disabled
              leftIcon={<Lock className="w-4 h-4" />}
            />
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
            code={`npm install lucide-react`}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-title-3 font-semibold">Copy Component Code</h3>

          <CodeBlock
            filename="components/ui/input.tsx"
            language="tsx"
            code={`"use client";

import * as React from "react";
import { useSound } from "@/components/sound-provider";
import { Eye, EyeOff, AlertCircle, CheckCircle2 } from "lucide-react";

function cn(...inputs: (string | undefined | null | false)[]) {
  return inputs.filter(Boolean).join(" ");
}

type SoundName = "click" | "hover" | "success" | "whoosh" | "button";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  soundEnabled?: boolean;
  focusSound?: SoundName;
  blurSound?: SoundName;
  error?: string;
  success?: boolean;
  label?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  variant?: "default" | "ghost" | "filled";
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type = "text",
      soundEnabled = true,
      focusSound = "hover",
      blurSound = "click",
      error,
      success,
      label,
      leftIcon,
      rightIcon,
      variant = "default",
      disabled,
      onFocus,
      onBlur,
      id,
      ...props
    },
    ref
  ) => {
    const { playSound, enabled: globalSoundEnabled } = useSound();
    const [isFocused, setIsFocused] = React.useState(false);
    const [showPassword, setShowPassword] = React.useState(false);
    const [shouldShake, setShouldShake] = React.useState(false);

    const shouldPlaySound = soundEnabled && globalSoundEnabled && !disabled;
    const isPassword = type === "password";
    const inputType = isPassword && showPassword ? "text" : type;
    const inputId = id || label?.toLowerCase().replace(/\\s+/g, "-");

    React.useEffect(() => {
      if (error) {
        setShouldShake(true);
        const timer = setTimeout(() => setShouldShake(false), 500);
        return () => clearTimeout(timer);
      }
    }, [error]);

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      if (shouldPlaySound && focusSound) {
        playSound(focusSound);
      }
      onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      if (shouldPlaySound && blurSound) {
        playSound(blurSound);
      }
      onBlur?.(e);
    };

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
      if (shouldPlaySound) {
        playSound("click");
      }
    };

    const baseStyles = cn(
      "flex h-11 w-full rounded-lg px-3 py-2 text-sm",
      "transition-all duration-200",
      "file:border-0 file:bg-transparent file:text-sm file:font-medium",
      "placeholder:text-muted-foreground",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      "disabled:cursor-not-allowed disabled:opacity-50",
      leftIcon ? "pl-10" : "",
      rightIcon || isPassword ? "pr-10" : ""
    );

    const variantStyles = {
      default: "border border-input bg-background",
      ghost: "border-0 bg-transparent hover:bg-accent",
      filled: "border-0 bg-secondary",
    };

    const stateStyles = cn(
      error && "border-destructive focus-visible:ring-destructive",
      success && "border-green-500 focus-visible:ring-green-500",
      shouldShake && "animate-shake"
    );

    return (
      <div className="w-full space-y-2">
        {label && (
          <label
            htmlFor={inputId}
            className={cn(
              "text-sm font-medium transition-all duration-200",
              error ? "text-destructive" : "text-foreground",
              disabled && "opacity-50",
              isFocused && "translate-y-[-2px]"
            )}
          >
            {label}
          </label>
        )}

        <div className="relative">
          {leftIcon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none">
              {leftIcon}
            </div>
          )}

          <input
            ref={ref}
            id={inputId}
            type={inputType}
            className={cn(
              baseStyles,
              variantStyles[variant],
              stateStyles,
              className
            )}
            disabled={disabled}
            onFocus={handleFocus}
            onBlur={handleBlur}
            {...props}
          />

          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
            {error && (
              <AlertCircle className="w-4 h-4 text-destructive animate-fade-in" />
            )}
            {success && !error && (
              <CheckCircle2 className="w-4 h-4 text-green-500 animate-fade-in" />
            )}

            {isPassword && (
              <button
                type="button"
                onClick={togglePasswordVisibility}
                onMouseEnter={() => shouldPlaySound && playSound("hover")}
                className="text-muted-foreground hover:text-foreground transition-all duration-200 hover:scale-110 active:scale-95"
                tabIndex={-1}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            )}

            {rightIcon && !isPassword && (
              <div className="text-muted-foreground pointer-events-none">
                {rightIcon}
              </div>
            )}
          </div>
        </div>

        {error && (
          <p className="text-sm text-destructive animate-fade-in">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };`}
          />
        </div>

        <InfoBox type="info" title="Animation Support">
          <p>
            Add these keyframes to your{" "}
            <code className="px-1.5 py-0.5 rounded bg-muted text-xs font-mono">
              globals.css
            </code>{" "}
            for the shake animation:
          </p>
          <CodeBlock
            filename="globals.css"
            language="css"
            code={`@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-4px); }
  75% { transform: translateX(4px); }
}

.animate-shake {
  animation: shake 0.3s ease-in-out;
}`}
          />
        </InfoBox>
      </section>

      {/* Usage Examples */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-title-2 font-semibold">Usage Examples</h2>
          <p className="text-muted-foreground">
            Common patterns and use cases for the Input component.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-title-3 font-semibold">Basic Usage</h3>

          <CodeBlock
            filename="app/page.tsx"
            language="tsx"
            code={`import { Input } from "@/components/ui/input";

export default function Page() {
  return (
    <Input 
      label="Email" 
      placeholder="you@example.com" 
    />
  );
}`}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-title-3 font-semibold">With Icons</h3>

          <CodeBlock
            filename="app/page.tsx"
            language="tsx"
            code={`import { Input } from "@/components/ui/input";
import { Mail, Lock, User } from "lucide-react";

<Input 
  label="Email" 
  leftIcon={<Mail className="w-4 h-4" />}
  placeholder="you@example.com"
/>

<Input 
  label="Password" 
  type="password"
  leftIcon={<Lock className="w-4 h-4" />}
  placeholder="••••••••"
/>`}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-title-3 font-semibold">With Validation</h3>

          <CodeBlock
            filename="app/page.tsx"
            language="tsx"
            code={`// Error state
<Input 
  label="Email" 
  error="Please enter a valid email address"
  placeholder="you@example.com"
/>

// Success state
<Input 
  label="Username" 
  success={true}
  placeholder="johndoe"
/>`}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-title-3 font-semibold">Form Integration</h3>

          <CodeBlock
            filename="components/login-form.tsx"
            language="tsx"
            code={`"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, Lock } from "lucide-react";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!email.includes("@")) {
      setEmailError("Please enter a valid email");
      return;
    }
    
    // Submit logic
    console.log({ email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        label="Email"
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          setEmailError("");
        }}
        error={emailError}
        leftIcon={<Mail className="w-4 h-4" />}
        placeholder="you@example.com"
      />
      
      <Input
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        leftIcon={<Lock className="w-4 h-4" />}
        placeholder="Enter password"
      />
      
      <Button type="submit" className="w-full">
        Sign In
      </Button>
    </form>
  );
}`}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-title-3 font-semibold">Disable Sounds</h3>

          <CodeBlock
            filename="app/page.tsx"
            language="tsx"
            code={`<Input 
  label="Silent Input"
  soundEnabled={false}
  placeholder="No sounds"
/>`}
          />
        </div>
      </section>

      {/* API Reference */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-title-2 font-semibold">API Reference</h2>
          <p className="text-muted-foreground">
            Complete props documentation for the Input component.
          </p>
        </div>

        <PropsTable
          data={[
            {
              prop: "label",
              type: "string",
              description: "Label text displayed above the input",
            },
            {
              prop: "variant",
              type: '"default" | "ghost" | "filled"',
              default: '"default"',
              description: "Visual style variant of the input",
            },
            {
              prop: "error",
              type: "string",
              description:
                "Error message to display below input (also changes border color)",
            },
            {
              prop: "success",
              type: "boolean",
              default: "false",
              description:
                "Show success state with green border and check icon",
            },
            {
              prop: "leftIcon",
              type: "React.ReactNode",
              description: "Icon to display on the left side of input",
            },
            {
              prop: "rightIcon",
              type: "React.ReactNode",
              description:
                "Icon to display on the right side (not available for password inputs)",
            },
            {
              prop: "soundEnabled",
              type: "boolean",
              default: "true",
              description: "Enable or disable sound effects for this input",
            },
            {
              prop: "focusSound",
              type: "SoundName",
              default: '"hover"',
              description: "Sound to play on focus event",
            },
            {
              prop: "blurSound",
              type: "SoundName",
              default: '"click"',
              description: "Sound to play on blur event",
            },
            {
              prop: "type",
              type: "string",
              default: '"text"',
              description:
                "HTML input type (password inputs get automatic toggle)",
            },
            {
              prop: "disabled",
              type: "boolean",
              default: "false",
              description: "Disable the input (also disables sounds)",
            },
          ]}
        />
      </section>

      {/* Features */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-title-2 font-semibold">Key Features</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-border/50 bg-card/30 p-6 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-interactive/10 flex items-center justify-center">
                <Eye className="w-4 h-4 text-interactive" />
              </div>
              <h3 className="font-semibold">Password Toggle</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Automatic eye icon for password inputs. Click to toggle visibility
              between password and text.
            </p>
          </div>

          <div className="rounded-xl border border-border/50 bg-card/30 p-6 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-interactive/10 flex items-center justify-center">
                <AlertCircle className="w-4 h-4 text-interactive" />
              </div>
              <h3 className="font-semibold">Shake Animation</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Input shakes when error prop changes, providing visual feedback
              without being disruptive.
            </p>
          </div>

          <div className="rounded-xl border border-border/50 bg-card/30 p-6 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-interactive/10 flex items-center justify-center">
                <Volume2 className="w-4 h-4 text-interactive" />
              </div>
              <h3 className="font-semibold">Focus Sounds</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Plays subtle sounds on focus and blur events to enhance tactile
              feedback.
            </p>
          </div>

          <div className="rounded-xl border border-border/50 bg-card/30 p-6 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-interactive/10 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-interactive" />
              </div>
              <h3 className="font-semibold">Label Animation</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Label subtly moves up when input is focused, adding polish to the
              interaction.
            </p>
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
              <li>✅ Always provide clear labels for accessibility</li>
              <li>
                ✅ Use leftIcon to indicate input purpose (email, search, etc.)
              </li>
              <li>✅ Show validation errors immediately and clearly</li>
              <li>
                ✅ Use success state sparingly for important confirmations
              </li>
              <li>✅ Make placeholder text descriptive but concise</li>
            </ul>
          </InfoBox>

          <InfoBox type="warning" title="Don'ts">
            <ul className="space-y-2 text-sm">
              <li>❌ Don&apos;t use placeholder as a replacement for label</li>
              <li>❌ Avoid showing errors before user has finished typing</li>
              <li>
                ❌ Don&apos;t use rightIcon with password type (conflicts with
                toggle)
              </li>
              <li>❌ Avoid overly long error messages</li>
            </ul>
          </InfoBox>
        </div>
      </section>
    </div>
  );
}
