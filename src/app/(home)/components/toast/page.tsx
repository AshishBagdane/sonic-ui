"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  Bell,
  CheckCircle2,
  AlertTriangle,
  Info,
  XCircle,
  Loader2,
  Mail,
  Download,
  Trash2,
  UserPlus,
} from "lucide-react";
import { useSound } from "@/components/sound-provider";
import { ComponentPreview } from "@/components/demo/component-preview";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

export default function ToastPage() {
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
              <div className="p-3 rounded-lg bg-gradient-to-br from-yellow-500/20 to-amber-500/20 border border-yellow-500/20">
                <Bell className="w-6 h-6 text-yellow-500" />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                Toast
              </h1>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
              Notifications with success and error tones. Provide instant
              feedback to users with elegant, non-intrusive notifications.
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
            <ComponentPreview
              code={`import { toast } from "@/hooks/use-toast"

<Button onClick={() => toast.message("Hello World!")}>
  Show Toast
</Button>`}
            >
              <Button onClick={() => toast.message("Hello World!")}>
                Show Toast
              </Button>
            </ComponentPreview>
          </div>

          {/* Toast Types */}
          <div>
            <h2 className="text-3xl font-bold mb-4">Toast Types</h2>
            <p className="text-muted-foreground mb-8">
              Different notification types with corresponding sounds and colors.
            </p>

            <div className="space-y-6">
              <ComponentPreview
                title="Success"
                description="Confirm successful operations with a pleasant sound"
                code={`toast.success("Successfully saved!")`}
              >
                <Button
                  variant="default"
                  onClick={() => toast.success("Successfully saved!")}
                >
                  <CheckCircle2 />
                  Success Toast
                </Button>
              </ComponentPreview>

              <ComponentPreview
                title="Error"
                description="Alert users to errors with a distinct sound"
                code={`toast.error("Something went wrong!")`}
              >
                <Button
                  variant="destructive"
                  onClick={() => toast.error("Something went wrong!")}
                >
                  <XCircle />
                  Error Toast
                </Button>
              </ComponentPreview>

              <ComponentPreview
                title="Warning"
                description="Warn users about important information"
                code={`toast.warning("Please review your changes")`}
              >
                <Button
                  variant="outline"
                  onClick={() => toast.warning("Please review your changes")}
                >
                  <AlertTriangle />
                  Warning Toast
                </Button>
              </ComponentPreview>

              <ComponentPreview
                title="Info"
                description="Share informational messages"
                code={`toast.info("New updates available")`}
              >
                <Button
                  variant="secondary"
                  onClick={() => toast.info("New updates available")}
                >
                  <Info />
                  Info Toast
                </Button>
              </ComponentPreview>
            </div>
          </div>

          {/* With Description */}
          <div>
            <h2 className="text-3xl font-bold mb-4">With Description</h2>
            <p className="text-muted-foreground mb-8">
              Add additional context with a description line.
            </p>

            <ComponentPreview
              code={`toast.success("Email sent!", {
  description: "Your message has been delivered successfully.",
})`}
            >
              <Button
                onClick={() =>
                  toast.success("Email sent!", {
                    description:
                      "Your message has been delivered successfully.",
                  })
                }
              >
                <Mail />
                Send Email
              </Button>
            </ComponentPreview>
          </div>

          {/* With Actions */}
          <div>
            <h2 className="text-3xl font-bold mb-4">With Actions</h2>
            <p className="text-muted-foreground mb-8">
              Include action buttons for user interaction.
            </p>

            <ComponentPreview
              code={`toast.message("File deleted", {
  description: "project-final-v2.zip has been removed.",
  action: {
    label: "Undo",
    onClick: () => console.log("Undo clicked"),
  },
})`}
            >
              <Button
                variant="destructive"
                onClick={() =>
                  toast.message("File deleted", {
                    description: "project-final-v2.zip has been removed.",
                    action: {
                      label: "Undo",
                      onClick: () => console.log("Undo clicked"),
                    },
                  })
                }
              >
                <Trash2 />
                Delete File
              </Button>
            </ComponentPreview>
          </div>

          {/* Promise Toast */}
          <div>
            <h2 className="text-3xl font-bold mb-4">Promise Toast</h2>
            <p className="text-muted-foreground mb-8">
              Automatically update toast based on promise state.
            </p>

            <ComponentPreview
              code={`const promise = new Promise((resolve) => 
  setTimeout(resolve, 2000)
);

toast.promise(promise, {
  loading: "Creating user...",
  success: "User created successfully!",
  error: "Failed to create user",
})`}
            >
              <Button
                onClick={() => {
                  const promise = new Promise((resolve) =>
                    setTimeout(resolve, 2000)
                  );

                  toast.promise(promise, {
                    loading: "Creating user...",
                    success: "User created successfully!",
                    error: "Failed to create user",
                  });
                }}
              >
                <UserPlus />
                Create User
              </Button>
            </ComponentPreview>
          </div>

          {/* Loading Toast */}
          <div>
            <h2 className="text-3xl font-bold mb-4">Loading Toast</h2>
            <p className="text-muted-foreground mb-8">
              Display a loading state for ongoing operations.
            </p>

            <ComponentPreview
              code={`const id = toast.loading("Processing...");

// Later...
toast.success("Done!", { id });`}
            >
              <Button
                variant="secondary"
                onClick={() => {
                  const toastId = toast.loading("Processing payment...");

                  setTimeout(() => {
                    toast.dismiss(toastId);
                    toast.success("Payment processed!");
                  }, 2000);
                }}
              >
                <Loader2 className="animate-spin" />
                Process Payment
              </Button>
            </ComponentPreview>
          </div>

          {/* Installation Section */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Installation</h2>
            <div className="space-y-4">
              <div className="rounded-lg border border-border/50 bg-card overflow-hidden">
                <div className="bg-muted/50 px-6 py-4 border-b border-border/50">
                  <p className="text-sm font-medium">Install Sonner</p>
                </div>
                <div className="p-6">
                  <code className="text-sm font-mono">npm install sonner</code>
                </div>
              </div>

              <div className="rounded-lg border border-border/50 bg-card overflow-hidden">
                <div className="bg-muted/50 px-6 py-4 border-b border-border/50">
                  <p className="text-sm font-medium">Add Toaster to Layout</p>
                </div>
                <div className="p-6">
                  <pre className="text-sm font-mono overflow-x-auto">
                    <code>{`import { Toaster } from "@/components/ui/sonner"

export default function RootLayout() {
  return (
    <html>
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  )
}`}</code>
                  </pre>
                </div>
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
                  <code>{`import { toast } from "@/hooks/use-toast"

export function Example() {
  return (
    <Button
      onClick={() =>
        toast.success("Event created!", {
          description: "Friday, February 10 at 5:30 PM",
        })
      }
    >
      Create Event
    </Button>
  )
}`}</code>
                </pre>
              </div>
            </div>
          </div>

          {/* API Documentation */}
          <div>
            <h2 className="text-3xl font-bold mb-8">API Reference</h2>

            {/* Toast Methods */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4">Toast Methods</h3>
              <div className="rounded-lg border border-border/50 bg-card overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border/50 bg-muted/50">
                        <th className="px-6 py-4 text-left text-sm font-medium">
                          Method
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-medium">
                          Description
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border/50">
                      <tr>
                        <td className="px-6 py-4 text-sm font-mono">
                          toast.success()
                        </td>
                        <td className="px-6 py-4 text-sm">
                          Display a success notification
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm font-mono">
                          toast.error()
                        </td>
                        <td className="px-6 py-4 text-sm">
                          Display an error notification
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm font-mono">
                          toast.info()
                        </td>
                        <td className="px-6 py-4 text-sm">
                          Display an info notification
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm font-mono">
                          toast.warning()
                        </td>
                        <td className="px-6 py-4 text-sm">
                          Display a warning notification
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm font-mono">
                          toast.message()
                        </td>
                        <td className="px-6 py-4 text-sm">
                          Display a default notification
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm font-mono">
                          toast.promise()
                        </td>
                        <td className="px-6 py-4 text-sm">
                          Display a notification tied to a promise
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm font-mono">
                          toast.loading()
                        </td>
                        <td className="px-6 py-4 text-sm">
                          Display a loading notification
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm font-mono">
                          toast.dismiss()
                        </td>
                        <td className="px-6 py-4 text-sm">
                          Dismiss a notification
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Toast Options */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4">Toast Options</h3>
              <div className="rounded-lg border border-border/50 bg-card overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border/50 bg-muted/50">
                        <th className="px-6 py-4 text-left text-sm font-medium">
                          Option
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-medium">
                          Type
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-medium">
                          Description
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border/50">
                      <tr>
                        <td className="px-6 py-4 text-sm font-mono">
                          description
                        </td>
                        <td className="px-6 py-4 text-sm font-mono text-muted-foreground">
                          string
                        </td>
                        <td className="px-6 py-4 text-sm">
                          Additional description text
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm font-mono">action</td>
                        <td className="px-6 py-4 text-sm font-mono text-muted-foreground">
                          object
                        </td>
                        <td className="px-6 py-4 text-sm">
                          Action button with label and onClick
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm font-mono">cancel</td>
                        <td className="px-6 py-4 text-sm font-mono text-muted-foreground">
                          object
                        </td>
                        <td className="px-6 py-4 text-sm">
                          Cancel button with label and onClick
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm font-mono">
                          duration
                        </td>
                        <td className="px-6 py-4 text-sm font-mono text-muted-foreground">
                          number
                        </td>
                        <td className="px-6 py-4 text-sm">
                          Duration in milliseconds (default: 4000)
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Toaster Props */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Toaster Props</h3>
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
                          successSound
                        </td>
                        <td className="px-6 py-4 text-sm font-mono text-muted-foreground">
                          SoundName
                        </td>
                        <td className="px-6 py-4 text-sm font-mono text-muted-foreground">
                          success
                        </td>
                        <td className="px-6 py-4 text-sm">
                          Sound for success toasts
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm font-mono">
                          errorSound
                        </td>
                        <td className="px-6 py-4 text-sm font-mono text-muted-foreground">
                          SoundName
                        </td>
                        <td className="px-6 py-4 text-sm font-mono text-muted-foreground">
                          click
                        </td>
                        <td className="px-6 py-4 text-sm">
                          Sound for error toasts
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm font-mono">
                          infoSound
                        </td>
                        <td className="px-6 py-4 text-sm font-mono text-muted-foreground">
                          SoundName
                        </td>
                        <td className="px-6 py-4 text-sm font-mono text-muted-foreground">
                          hover
                        </td>
                        <td className="px-6 py-4 text-sm">
                          Sound for info toasts
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm font-mono">
                          warningSound
                        </td>
                        <td className="px-6 py-4 text-sm font-mono text-muted-foreground">
                          SoundName
                        </td>
                        <td className="px-6 py-4 text-sm font-mono text-muted-foreground">
                          whoosh
                        </td>
                        <td className="px-6 py-4 text-sm">
                          Sound for warning toasts
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
