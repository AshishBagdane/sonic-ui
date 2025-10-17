"use client";

import React from "react";
import {
  Bell,
  Sparkles,
  Volume2,
  Palette,
  CheckCircle,
  AlertCircle,
  Info,
  XCircle,
  Loader2,
  Zap,
} from "lucide-react";
import { CodeBlock, PropsTable, InfoBox, InteractiveDemo } from "./shared";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function ToastDocsSection() {
  return (
    <div id="toast" className="space-y-16 scroll-mt-20">
      {/* Hero Section */}
      <div className="space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-interactive/10 text-interactive text-sm font-medium">
          <Bell className="w-4 h-4" />
          <span>Component • Notification</span>
        </div>

        <div className="space-y-4">
          <h1 className="text-display font-bold tracking-tight">Toast</h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            A sound-reactive toast notification component with smooth
            animations, multiple variants, and Apple-inspired design. Built with
            Sonner for best-in-class notifications.
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
            <p className="text-2xl font-bold">4</p>
            <p className="text-xs text-muted-foreground">Per variant</p>
          </div>

          <div className="rounded-xl border border-border/50 bg-card/30 p-4">
            <div className="flex items-center gap-2 text-interactive mb-1">
              <Palette className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider">
                Types
              </span>
            </div>
            <p className="text-2xl font-bold">5</p>
            <p className="text-xs text-muted-foreground">Variants</p>
          </div>

          <div className="rounded-xl border border-border/50 bg-card/30 p-4">
            <div className="flex items-center gap-2 text-interactive mb-1">
              <Zap className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider">
                Animation
              </span>
            </div>
            <p className="text-2xl font-bold">Yes</p>
            <p className="text-xs text-muted-foreground">Slide in</p>
          </div>

          <div className="rounded-xl border border-border/50 bg-card/30 p-4">
            <div className="flex items-center gap-2 text-interactive mb-1">
              <Sparkles className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider">
                Stack
              </span>
            </div>
            <p className="text-2xl font-bold">Yes</p>
            <p className="text-xs text-muted-foreground">Multiple toasts</p>
          </div>
        </div>
      </div>

      {/* Interactive Demo */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-title-2 font-semibold">Interactive Demo</h2>
          <p className="text-muted-foreground">
            Click the buttons to trigger different toast notifications with
            sounds.
          </p>
        </div>

        <InteractiveDemo
          title="Toast Types"
          description="All available toast variants"
        >
          <div className="flex flex-wrap gap-3 justify-center">
            <Button
              variant="outline"
              onClick={() => toast("This is a default toast")}
            >
              <Bell className="w-4 h-4" />
              Default
            </Button>

            <Button
              variant="outline"
              onClick={() => toast.success("Changes saved successfully!")}
            >
              <CheckCircle className="w-4 h-4" />
              Success
            </Button>

            <Button
              variant="outline"
              onClick={() => toast.error("Failed to save changes")}
            >
              <XCircle className="w-4 h-4" />
              Error
            </Button>

            <Button
              variant="outline"
              onClick={() => toast.info("You have 3 unread messages")}
            >
              <Info className="w-4 h-4" />
              Info
            </Button>

            <Button
              variant="outline"
              onClick={() => toast.warning("Your session expires in 5 minutes")}
            >
              <AlertCircle className="w-4 h-4" />
              Warning
            </Button>
          </div>
        </InteractiveDemo>

        <InteractiveDemo
          title="With Description"
          description="Toasts with additional description"
        >
          <div className="flex flex-wrap gap-3 justify-center">
            <Button
              onClick={() =>
                toast.success("Event created", {
                  description:
                    "Your event has been scheduled for tomorrow at 10 AM",
                })
              }
            >
              Success with Description
            </Button>

            <Button
              variant="destructive"
              onClick={() =>
                toast.error("Upload failed", {
                  description:
                    "File size exceeds 10MB limit. Please try a smaller file.",
                })
              }
            >
              Error with Description
            </Button>
          </div>
        </InteractiveDemo>

        <InteractiveDemo
          title="With Actions"
          description="Toasts with action buttons"
        >
          <div className="flex flex-wrap gap-3 justify-center">
            <Button
              variant="outline"
              onClick={() =>
                toast("File uploaded", {
                  description: "document.pdf has been uploaded successfully",
                  action: {
                    label: "View",
                    onClick: () => console.log("View clicked"),
                  },
                })
              }
            >
              With Action Button
            </Button>

            <Button
              variant="outline"
              onClick={() =>
                toast("Friend request received", {
                  description: "John Doe wants to connect with you",
                  action: {
                    label: "Accept",
                    onClick: () => toast.success("Friend request accepted"),
                  },
                  cancel: {
                    label: "Decline",
                    onClick: () => toast("Request declined"),
                  },
                })
              }
            >
              With Accept/Decline
            </Button>
          </div>
        </InteractiveDemo>

        <InteractiveDemo
          title="Loading State"
          description="Toast with loading indicator"
        >
          <Button
            onClick={() => {
              const loadingToast = toast.loading("Uploading file...");

              // Simulate upload
              setTimeout(() => {
                toast.success("Upload complete!", {
                  id: loadingToast,
                });
              }, 3000);
            }}
          >
            <Loader2 className="w-4 h-4 animate-spin" />
            Trigger Loading
          </Button>
        </InteractiveDemo>

        <InteractiveDemo
          title="Promise Toast"
          description="Automatic state management for promises"
        >
          <Button
            onClick={() => {
              const myPromise = new Promise((resolve) =>
                setTimeout(() => resolve({ name: "Document" }), 2000)
              );

              toast.promise(myPromise, {
                loading: "Saving...",
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                success: (data: any) => `${data.name} saved successfully`,
                error: "Failed to save",
              });
            }}
          >
            Promise Toast
          </Button>
        </InteractiveDemo>

        <InteractiveDemo
          title="Custom Duration"
          description="Control how long toast stays visible"
        >
          <div className="flex flex-wrap gap-3 justify-center">
            <Button
              variant="outline"
              size="sm"
              onClick={() => toast("Quick message", { duration: 1000 })}
            >
              1 second
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={() => toast("Normal message", { duration: 4000 })}
            >
              4 seconds (default)
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={() => toast("Important message", { duration: 10000 })}
            >
              10 seconds
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={() => toast("Permanent message", { duration: Infinity })}
            >
              Infinite
            </Button>
          </div>
        </InteractiveDemo>

        <InteractiveDemo
          title="Multiple Toasts"
          description="Stack multiple notifications"
        >
          <Button
            onClick={() => {
              toast.success("First notification");
              setTimeout(() => toast.info("Second notification"), 500);
              setTimeout(() => toast.warning("Third notification"), 1000);
            }}
          >
            Show Multiple
          </Button>
        </InteractiveDemo>
      </section>

      {/* Installation */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-title-2 font-semibold">Installation</h2>
          <p className="text-muted-foreground">
            Setup toast notifications in your project.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-title-3 font-semibold">Install Dependencies</h3>

          <CodeBlock
            filename="terminal"
            language="bash"
            code={`npm install sonner`}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-title-3 font-semibold">Add Toaster to Layout</h3>

          <CodeBlock
            filename="app/layout.tsx"
            language="tsx"
            code={`import { Toaster } from "@/components/ui/sonner";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}`}
          />
        </div>

        <InfoBox type="info" title="Toaster Component">
          <p>
            The Toaster component is already configured with sound integration
            in your project at{" "}
            <code className="px-1.5 py-0.5 rounded bg-muted text-xs font-mono">
              components/ui/sonner.tsx
            </code>
            . It automatically plays sounds for different toast types.
          </p>
        </InfoBox>
      </section>

      {/* Usage Examples */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-title-2 font-semibold">Usage Examples</h2>
          <p className="text-muted-foreground">
            Common patterns and use cases for toast notifications.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-title-3 font-semibold">Basic Usage</h3>

          <CodeBlock
            filename="app/page.tsx"
            language="tsx"
            code={`"use client";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function Page() {
  return (
    <div>
      <Button onClick={() => toast('Hello World')}>
        Show Toast
      </Button>
    </div>
  );
}`}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-title-3 font-semibold">Different Types</h3>

          <CodeBlock
            filename="app/page.tsx"
            language="tsx"
            code={`import { toast } from "sonner";

// Success
toast.success('Changes saved successfully');

// Error
toast.error('Failed to save changes');

// Info
toast.info('New update available');

// Warning
toast.warning('Low storage space');

// Loading
toast.loading('Processing...');`}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-title-3 font-semibold">With Description</h3>

          <CodeBlock
            filename="app/page.tsx"
            language="tsx"
            code={`toast.success('Event created', {
  description: 'Your event has been scheduled for tomorrow at 10 AM'
});

toast.error('Upload failed', {
  description: 'File size exceeds the maximum limit of 10MB'
});`}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-title-3 font-semibold">With Actions</h3>

          <CodeBlock
            filename="app/page.tsx"
            language="tsx"
            code={`toast('File uploaded', {
  description: 'document.pdf has been uploaded',
  action: {
    label: 'View',
    onClick: () => window.open('/files/document.pdf')
  }
});

toast('Friend request', {
  description: 'John wants to connect',
  action: {
    label: 'Accept',
    onClick: () => acceptRequest()
  },
  cancel: {
    label: 'Decline',
    onClick: () => declineRequest()
  }
});`}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-title-3 font-semibold">Loading to Success</h3>

          <CodeBlock
            filename="components/upload-form.tsx"
            language="tsx"
            code={`"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export function UploadForm() {
  const handleUpload = async () => {
    const toastId = toast.loading('Uploading file...');
    
    try {
      await uploadFile();
      toast.success('Upload complete!', { id: toastId });
    } catch (error) {
      toast.error('Upload failed', { id: toastId });
    }
  };

  return (
    <Button onClick={handleUpload}>
      Upload
    </Button>
  );
}`}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-title-3 font-semibold">Promise Toast</h3>

          <CodeBlock
            filename="app/page.tsx"
            language="tsx"
            code={`import { toast } from "sonner";

async function saveData() {
  const promise = fetch('/api/save', {
    method: 'POST',
    body: JSON.stringify(data)
  });

  toast.promise(promise, {
    loading: 'Saving...',
    success: 'Data saved successfully',
    error: 'Failed to save data',
  });
}`}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-title-3 font-semibold">Custom Duration</h3>

          <CodeBlock
            filename="app/page.tsx"
            language="tsx"
            code={`// Show for 1 second
toast('Quick message', { duration: 1000 });

// Show for 10 seconds
toast('Important message', { duration: 10000 });

// Show until manually dismissed
toast('Permanent message', { duration: Infinity });`}
          />
        </div>
      </section>

      {/* API Reference */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-title-2 font-semibold">API Reference</h2>
          <p className="text-muted-foreground">
            Complete documentation for toast methods and options.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-title-3 font-semibold">Toast Methods</h3>
          <div className="rounded-xl border border-border/50 bg-card/30 p-6 space-y-3">
            <ul className="space-y-2 text-sm font-mono">
              <li>
                <code className="px-2 py-0.5 rounded bg-muted">
                  toast(message, options)
                </code>{" "}
                - Default toast
              </li>
              <li>
                <code className="px-2 py-0.5 rounded bg-muted">
                  toast.success(message, options)
                </code>{" "}
                - Success toast
              </li>
              <li>
                <code className="px-2 py-0.5 rounded bg-muted">
                  toast.error(message, options)
                </code>{" "}
                - Error toast
              </li>
              <li>
                <code className="px-2 py-0.5 rounded bg-muted">
                  toast.info(message, options)
                </code>{" "}
                - Info toast
              </li>
              <li>
                <code className="px-2 py-0.5 rounded bg-muted">
                  toast.warning(message, options)
                </code>{" "}
                - Warning toast
              </li>
              <li>
                <code className="px-2 py-0.5 rounded bg-muted">
                  toast.loading(message, options)
                </code>{" "}
                - Loading toast
              </li>
              <li>
                <code className="px-2 py-0.5 rounded bg-muted">
                  toast.promise(promise, options)
                </code>{" "}
                - Promise toast
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-title-3 font-semibold">Toast Options</h3>
          <PropsTable
            data={[
              {
                prop: "description",
                type: "string",
                description: "Additional description below the main message",
              },
              {
                prop: "duration",
                type: "number",
                default: "4000",
                description:
                  "Duration in milliseconds. Use Infinity to keep visible",
              },
              {
                prop: "id",
                type: "string | number",
                description: "Custom ID for updating existing toasts",
              },
              {
                prop: "action",
                type: "{ label: string, onClick: () => void }",
                description: "Action button configuration",
              },
              {
                prop: "cancel",
                type: "{ label: string, onClick: () => void }",
                description: "Cancel button configuration",
              },
              {
                prop: "onDismiss",
                type: "() => void",
                description: "Callback when toast is dismissed",
              },
              {
                prop: "onAutoClose",
                type: "() => void",
                description: "Callback when toast auto-closes",
              },
            ]}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-title-3 font-semibold">Toaster Props</h3>
          <PropsTable
            data={[
              {
                prop: "soundEnabled",
                type: "boolean",
                default: "true",
                description: "Enable or disable all toast sounds",
              },
              {
                prop: "successSound",
                type: "SoundName",
                default: '"success"',
                description: "Sound for success toasts",
              },
              {
                prop: "errorSound",
                type: "SoundName",
                default: '"click"',
                description: "Sound for error toasts",
              },
              {
                prop: "infoSound",
                type: "SoundName",
                default: '"hover"',
                description: "Sound for info toasts",
              },
              {
                prop: "warningSound",
                type: "SoundName",
                default: '"whoosh"',
                description: "Sound for warning toasts",
              },
              {
                prop: "position",
                type: '"top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right"',
                default: '"bottom-right"',
                description: "Toast position on screen",
              },
            ]}
          />
        </div>
      </section>

      {/* Sound Configuration */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-title-2 font-semibold">Sound Configuration</h2>
          <p className="text-muted-foreground">
            Customize toast sounds globally.
          </p>
        </div>

        <CodeBlock
          filename="app/layout.tsx"
          language="tsx"
          code={`import { Toaster } from "@/components/ui/sonner";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Toaster 
          soundEnabled={true}
          successSound="success"
          errorSound="click"
          infoSound="hover"
          warningSound="whoosh"
          position="bottom-right"
        />
      </body>
    </html>
  );
}`}
        />
      </section>

      {/* Best Practices */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-title-2 font-semibold">Best Practices</h2>
        </div>

        <div className="space-y-4">
          <InfoBox type="success" title="Do's">
            <ul className="space-y-2 text-sm">
              <li>✅ Use success toasts to confirm user actions</li>
              <li>
                ✅ Show error toasts for failed operations with clear messages
              </li>
              <li>✅ Keep messages concise (under 60 characters)</li>
              <li>
                ✅ Use appropriate toast types (success, error, info, warning)
              </li>
              <li>✅ Provide action buttons for important notifications</li>
              <li>✅ Use loading state for async operations</li>
            </ul>
          </InfoBox>

          <InfoBox type="warning" title="Don'ts">
            <ul className="space-y-2 text-sm">
              <li>❌ Don&apos;t show too many toasts at once</li>
              <li>
                ❌ Avoid using toasts for critical errors (use dialogs instead)
              </li>
              <li>❌ Don&apos;t make toast messages too long</li>
              <li>❌ Avoid permanent toasts for non-critical info</li>
              <li>❌ Don&apos;t use toasts for form validation errors</li>
            </ul>
          </InfoBox>
        </div>
      </section>

      {/* Use Cases */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-title-2 font-semibold">Common Use Cases</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-border/50 bg-card/30 p-6 space-y-3">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <h3 className="font-semibold">Form Submission</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Show success toast after form is submitted successfully.
            </p>
            <code className="text-xs block p-2 rounded bg-muted">
              toast.success(&apos;Form submitted&apos;)
            </code>
          </div>

          <div className="rounded-xl border border-border/50 bg-card/30 p-6 space-y-3">
            <div className="flex items-center gap-2">
              <XCircle className="w-5 h-5 text-red-500" />
              <h3 className="font-semibold">API Error</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Display error message when API call fails.
            </p>
            <code className="text-xs block p-2 rounded bg-muted">
              toast.error(&apos;Failed to load data&apos;)
            </code>
          </div>

          <div className="rounded-xl border border-border/50 bg-card/30 p-6 space-y-3">
            <div className="flex items-center gap-2">
              <Loader2 className="w-5 h-5 text-interactive animate-spin" />
              <h3 className="font-semibold">File Upload</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Show loading state during upload, then success/error.
            </p>
            <code className="text-xs block p-2 rounded bg-muted">
              toast.loading(&apos;Uploading...&apos;)
            </code>
          </div>

          <div className="rounded-xl border border-border/50 bg-card/30 p-6 space-y-3">
            <div className="flex items-center gap-2">
              <Info className="w-5 h-5 text-blue-500" />
              <h3 className="font-semibold">New Message</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Notify user of new messages or updates.
            </p>
            <code className="text-xs block p-2 rounded bg-muted">
              toast.info(&apos;3 new messages&apos;)
            </code>
          </div>
        </div>
      </section>
    </div>
  );
}
