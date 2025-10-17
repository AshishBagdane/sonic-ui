"use client";

import React, { useState } from "react";
import {
  MessageSquare,
  Sparkles,
  Volume2,
  Palette,
  X,
  AlertTriangle,
  CheckCircle,
  Info,
  Trash2,
  Settings,
  Upload,
} from "lucide-react";
import { CodeBlock, PropsTable, InfoBox, InteractiveDemo } from "./shared";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function DialogDocsSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div id="dialog" className="space-y-16 scroll-mt-20">
      {/* Hero Section */}
      <div className="space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-interactive/10 text-interactive text-sm font-medium">
          <MessageSquare className="w-4 h-4" />
          <span>Component • Modal</span>
        </div>

        <div className="space-y-4">
          <h1 className="text-display font-bold tracking-tight">Dialog</h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            A sound-reactive dialog (modal) component with smooth animations,
            backdrop blur, and Apple-inspired design. Perfect for confirmations,
            forms, and important messages.
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
            <p className="text-xs text-muted-foreground">Open, Close, Hover</p>
          </div>

          <div className="rounded-xl border border-border/50 bg-card/30 p-4">
            <div className="flex items-center gap-2 text-interactive mb-1">
              <Palette className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider">
                Parts
              </span>
            </div>
            <p className="text-2xl font-bold">6</p>
            <p className="text-xs text-muted-foreground">Composable</p>
          </div>

          <div className="rounded-xl border border-border/50 bg-card/30 p-4">
            <div className="flex items-center gap-2 text-interactive mb-1">
              <X className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider">
                Backdrop
              </span>
            </div>
            <p className="text-2xl font-bold">Yes</p>
            <p className="text-xs text-muted-foreground">Blur effect</p>
          </div>

          <div className="rounded-xl border border-border/50 bg-card/30 p-4">
            <div className="flex items-center gap-2 text-interactive mb-1">
              <Sparkles className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider">
                Animation
              </span>
            </div>
            <p className="text-2xl font-bold">Yes</p>
            <p className="text-xs text-muted-foreground">Fade + Zoom</p>
          </div>
        </div>
      </div>

      {/* Interactive Demo */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-title-2 font-semibold">Interactive Demo</h2>
          <p className="text-muted-foreground">
            Try opening the dialogs to experience the animations and sound
            effects.
          </p>
        </div>

        <InteractiveDemo
          title="Basic Dialog"
          description="Simple dialog with content"
        >
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button>Open Dialog</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Dialog Title</DialogTitle>
                <DialogDescription>
                  This is a basic dialog with a title and description.
                </DialogDescription>
              </DialogHeader>
              <div className="py-4">
                <p className="text-sm text-muted-foreground">
                  Dialog content goes here. You can add any content you want.
                </p>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={() => setIsOpen(false)}>Confirm</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </InteractiveDemo>

        <InteractiveDemo
          title="Confirmation Dialog"
          description="Delete confirmation with warning"
        >
          <Dialog open={confirmOpen} onOpenChange={setConfirmOpen}>
            <DialogTrigger asChild>
              <Button variant="destructive">Delete Item</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center">
                    <AlertTriangle className="w-5 h-5 text-destructive" />
                  </div>
                  <DialogTitle>Are you sure?</DialogTitle>
                </div>
                <DialogDescription>
                  This action cannot be undone. This will permanently delete the
                  item from our servers.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button variant="outline" onClick={() => setConfirmOpen(false)}>
                  Cancel
                </Button>
                <Button
                  variant="destructive"
                  onClick={() => {
                    console.log("Deleted");
                    setConfirmOpen(false);
                  }}
                >
                  <Trash2 className="w-4 h-4" />
                  Delete
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </InteractiveDemo>

        <InteractiveDemo
          title="Form Dialog"
          description="Dialog with form inputs"
        >
          <Dialog open={formOpen} onOpenChange={setFormOpen}>
            <DialogTrigger asChild>
              <Button variant="outline">
                <Settings className="w-4 h-4" />
                Edit Profile
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Edit Profile</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when you&apos;re
                  done.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <Input
                  label="Name"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <Input
                  label="Email"
                  type="email"
                  placeholder="john@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setFormOpen(false)}>
                  Cancel
                </Button>
                <Button
                  onClick={() => {
                    console.log({ name, email });
                    setFormOpen(false);
                  }}
                >
                  Save Changes
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </InteractiveDemo>

        <InteractiveDemo
          title="Success Dialog"
          description="Confirmation message"
        >
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Show Success</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <div className="mx-auto w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                </div>
                <DialogTitle className="text-center">Success!</DialogTitle>
                <DialogDescription className="text-center">
                  Your changes have been saved successfully.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter className="sm:justify-center">
                <DialogClose asChild>
                  <Button className="w-full sm:w-auto">Continue</Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </InteractiveDemo>

        <InteractiveDemo
          title="Info Dialog"
          description="Informational message"
        >
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">
                <Info className="w-4 h-4" />
                Learn More
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>About This Feature</DialogTitle>
                <DialogDescription>
                  Here&apos;s everything you need to know about this feature.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold">What it does</h4>
                  <p className="text-sm text-muted-foreground">
                    This feature helps you manage your content more efficiently
                    with advanced tools and options.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold">How to use it</h4>
                  <p className="text-sm text-muted-foreground">
                    Simply click the button and follow the on-screen
                    instructions to get started.
                  </p>
                </div>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button>Got it</Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </InteractiveDemo>

        <InteractiveDemo
          title="Upload Dialog"
          description="File upload interface"
        >
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Upload className="w-4 h-4" />
                Upload File
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Upload File</DialogTitle>
                <DialogDescription>
                  Select a file to upload to your account.
                </DialogDescription>
              </DialogHeader>
              <div className="py-4">
                <div className="border-2 border-dashed border-border rounded-xl p-8 text-center hover:border-interactive transition-colors cursor-pointer">
                  <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                  <p className="text-sm font-medium mb-1">
                    Click to upload or drag and drop
                  </p>
                  <p className="text-xs text-muted-foreground">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button>Upload</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
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
            code={`npm install @radix-ui/react-dialog`}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-title-3 font-semibold">Copy Component Code</h3>

          <InfoBox type="info" title="Component Code">
            <p>
              The Dialog component code is available in your project files at{" "}
              <code className="px-1.5 py-0.5 rounded bg-muted text-xs font-mono">
                components/ui/dialog.tsx
              </code>
              . It includes sound integration and all composable parts.
            </p>
          </InfoBox>
        </div>
      </section>

      {/* Usage Examples */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-title-2 font-semibold">Usage Examples</h2>
          <p className="text-muted-foreground">
            Common patterns and use cases for the Dialog component.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-title-3 font-semibold">Basic Usage</h3>

          <CodeBlock
            filename="app/page.tsx"
            language="tsx"
            code={`import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Dialog Title</DialogTitle>
          <DialogDescription>
            Dialog description goes here.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}`}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-title-3 font-semibold">Controlled Dialog</h3>

          <CodeBlock
            filename="app/page.tsx"
            language="tsx"
            code={`"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function Page() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Open</Button>
      </DialogTrigger>
      <DialogContent>
        <p>Content here</p>
        <Button onClick={() => setOpen(false)}>Close</Button>
      </DialogContent>
    </Dialog>
  );
}`}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-title-3 font-semibold">Confirmation Dialog</h3>

          <CodeBlock
            filename="components/delete-confirmation.tsx"
            language="tsx"
            code={`"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

interface DeleteConfirmationProps {
  onConfirm: () => void;
  itemName: string;
}

export function DeleteConfirmation({ 
  onConfirm, 
  itemName 
}: DeleteConfirmationProps) {
  const [open, setOpen] = useState(false);

  const handleConfirm = () => {
    onConfirm();
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="destructive">Delete</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-destructive" />
            </div>
            <DialogTitle>Confirm Deletion</DialogTitle>
          </div>
          <DialogDescription>
            Are you sure you want to delete "{itemName}"? 
            This action cannot be undone.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button variant="destructive" onClick={handleConfirm}>
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}`}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-title-3 font-semibold">Form Dialog</h3>

          <CodeBlock
            filename="components/edit-form.tsx"
            language="tsx"
            code={`"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function EditForm() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email });
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Edit Profile</Button>
      </DialogTrigger>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Edit Profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <Input
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <Input
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button type="submit">Save</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}`}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-title-3 font-semibold">Custom Sounds</h3>

          <CodeBlock
            filename="app/page.tsx"
            language="tsx"
            code={`<Dialog 
  openSound="whoosh"
  closeSound="click"
>
  <DialogTrigger asChild>
    <Button>Open with Custom Sounds</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Custom Sounds</DialogTitle>
    </DialogHeader>
  </DialogContent>
</Dialog>`}
          />
        </div>
      </section>

      {/* API Reference */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-title-2 font-semibold">API Reference</h2>
          <p className="text-muted-foreground">
            Complete props documentation for the Dialog component.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-title-3 font-semibold">Dialog Props</h3>
          <PropsTable
            data={[
              {
                prop: "open",
                type: "boolean",
                description: "Controlled open state of the dialog",
              },
              {
                prop: "onOpenChange",
                type: "(open: boolean) => void",
                description: "Event handler called when open state changes",
              },
              {
                prop: "soundEnabled",
                type: "boolean",
                default: "true",
                description: "Enable or disable sound effects",
              },
              {
                prop: "openSound",
                type: "SoundName",
                default: '"whoosh"',
                description: "Sound to play when dialog opens",
              },
              {
                prop: "closeSound",
                type: "SoundName",
                default: '"click"',
                description: "Sound to play when dialog closes",
              },
            ]}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-title-3 font-semibold">Dialog Parts</h3>
          <div className="rounded-xl border border-border/50 bg-card/30 p-6 space-y-3">
            <ul className="space-y-2 text-sm">
              <li>
                <code className="px-2 py-0.5 rounded bg-muted font-mono">
                  Dialog
                </code>{" "}
                - Root component, manages state
              </li>
              <li>
                <code className="px-2 py-0.5 rounded bg-muted font-mono">
                  DialogTrigger
                </code>{" "}
                - Button that opens the dialog
              </li>
              <li>
                <code className="px-2 py-0.5 rounded bg-muted font-mono">
                  DialogContent
                </code>{" "}
                - Main dialog container
              </li>
              <li>
                <code className="px-2 py-0.5 rounded bg-muted font-mono">
                  DialogHeader
                </code>{" "}
                - Header section for title/description
              </li>
              <li>
                <code className="px-2 py-0.5 rounded bg-muted font-mono">
                  DialogTitle
                </code>{" "}
                - Dialog title
              </li>
              <li>
                <code className="px-2 py-0.5 rounded bg-muted font-mono">
                  DialogDescription
                </code>{" "}
                - Dialog description
              </li>
              <li>
                <code className="px-2 py-0.5 rounded bg-muted font-mono">
                  DialogFooter
                </code>{" "}
                - Footer for action buttons
              </li>
              <li>
                <code className="px-2 py-0.5 rounded bg-muted font-mono">
                  DialogClose
                </code>{" "}
                - Close button component
              </li>
            </ul>
          </div>
        </div>
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
                <Sparkles className="w-4 h-4 text-interactive" />
              </div>
              <h3 className="font-semibold">Smooth Animations</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Fade and zoom animations on open/close with backdrop blur for
              modern look.
            </p>
          </div>

          <div className="rounded-xl border border-border/50 bg-card/30 p-6 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-interactive/10 flex items-center justify-center">
                <Volume2 className="w-4 h-4 text-interactive" />
              </div>
              <h3 className="font-semibold">Sound Effects</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Plays different sounds on open and close for enhanced tactile
              feedback.
            </p>
          </div>

          <div className="rounded-xl border border-border/50 bg-card/30 p-6 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-interactive/10 flex items-center justify-center">
                <X className="w-4 h-4 text-interactive" />
              </div>
              <h3 className="font-semibold">Close on Escape</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Keyboard accessible - press Escape key to close the dialog.
            </p>
          </div>

          <div className="rounded-xl border border-border/50 bg-card/30 p-6 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-interactive/10 flex items-center justify-center">
                <MessageSquare className="w-4 h-4 text-interactive" />
              </div>
              <h3 className="font-semibold">Composable</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Build custom dialogs with flexible composable parts for any use
              case.
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
              <li>
                ✅ Use dialogs for important actions requiring user attention
              </li>
              <li>✅ Keep dialog content concise and focused</li>
              <li>✅ Provide clear action buttons (Cancel + Confirm)</li>
              <li>✅ Use destructive variant for delete confirmations</li>
              <li>✅ Close dialog after successful actions</li>
            </ul>
          </InfoBox>

          <InfoBox type="warning" title="Don'ts">
            <ul className="space-y-2 text-sm">
              <li>❌ Don&apos;t nest dialogs inside other dialogs</li>
              <li>❌ Avoid using dialogs for non-critical information</li>
              <li>❌ Don&apos;t make dialogs too large or full-screen</li>
              <li>❌ Avoid ambiguous button labels like &quot;OK&quot;</li>
              <li>❌ Don&apos;t disable backdrop click without good reason</li>
            </ul>
          </InfoBox>
        </div>
      </section>
    </div>
  );
}
