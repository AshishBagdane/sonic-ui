"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  MessageSquare,
  AlertTriangle,
  Info,
  CheckCircle2,
  Trash2,
  UserPlus,
  Settings,
  Mail,
} from "lucide-react";
import { useSound } from "@/components/sound-provider";
import { ComponentPreview } from "@/components/demo/component-preview";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

export default function DialogPage() {
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
              <div className="p-3 rounded-lg bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/20">
                <MessageSquare className="w-6 h-6 text-orange-500" />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                Dialog
              </h1>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
              Modal windows with whoosh open/close effects and smooth
              animations. Perfect for confirmations, forms, and important user
              interactions.
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
              code={`<Dialog>
  <DialogTrigger asChild>
    <Button>Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Welcome</DialogTitle>
      <DialogDescription>
        This is a basic dialog with smooth animations and sound effects.
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>`}
            >
              <Dialog>
                <DialogTrigger asChild>
                  <Button>Open Dialog</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Welcome</DialogTitle>
                    <DialogDescription>
                      This is a basic dialog with smooth animations and sound
                      effects.
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </ComponentPreview>
          </div>

          {/* With Actions */}
          <div>
            <h2 className="text-3xl font-bold mb-4">With Actions</h2>
            <p className="text-muted-foreground mb-8">
              Include footer actions for user confirmation or cancellation.
            </p>

            <ComponentPreview
              code={`<Dialog>
  <DialogTrigger asChild>
    <Button variant="destructive">
      <Trash2 />
      Delete Account
    </Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you absolutely sure?</DialogTitle>
      <DialogDescription>
        This action cannot be undone. This will permanently delete your
        account and remove your data from our servers.
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <DialogClose asChild>
        <Button variant="outline">Cancel</Button>
      </DialogClose>
      <Button variant="destructive">Delete Account</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`}
            >
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="destructive">
                    <Trash2 />
                    Delete Account
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription>
                      This action cannot be undone. This will permanently delete
                      your account and remove your data from our servers.
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button variant="outline">Cancel</Button>
                    </DialogClose>
                    <Button variant="destructive">Delete Account</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </ComponentPreview>
          </div>

          {/* With Form */}
          <div>
            <h2 className="text-3xl font-bold mb-4">With Form</h2>
            <p className="text-muted-foreground mb-8">
              Use dialogs to collect user input with forms.
            </p>

            <ComponentPreview
              code={`<Dialog>
  <DialogTrigger asChild>
    <Button>
      <UserPlus />
      Invite User
    </Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Invite Team Member</DialogTitle>
      <DialogDescription>
        Send an invitation to join your team workspace.
      </DialogDescription>
    </DialogHeader>
    <div className="space-y-4 py-4">
      <Input
        label="Email"
        type="email"
        placeholder="colleague@company.com"
        leftIcon={<Mail className="w-4 h-4" />}
      />
      <Input
        label="Role"
        placeholder="Developer"
      />
    </div>
    <DialogFooter>
      <DialogClose asChild>
        <Button variant="outline">Cancel</Button>
      </DialogClose>
      <Button>Send Invitation</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`}
            >
              <Dialog>
                <DialogTrigger asChild>
                  <Button>
                    <UserPlus />
                    Invite User
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Invite Team Member</DialogTitle>
                    <DialogDescription>
                      Send an invitation to join your team workspace.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <Input
                      label="Email"
                      type="email"
                      placeholder="colleague@company.com"
                      leftIcon={<Mail className="w-4 h-4" />}
                    />
                    <Input label="Role" placeholder="Developer" />
                  </div>
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button variant="outline">Cancel</Button>
                    </DialogClose>
                    <Button>Send Invitation</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </ComponentPreview>
          </div>

          {/* Different Contexts */}
          <div>
            <h2 className="text-3xl font-bold mb-4">Context Variations</h2>
            <p className="text-muted-foreground mb-8">
              Dialogs for different use cases and contexts.
            </p>

            <div className="space-y-6">
              {/* Info Dialog */}
              <ComponentPreview
                title="Information"
                description="Display important information to users"
                code={`<Dialog>
  <DialogTrigger asChild>
    <Button variant="secondary">
      <Info />
      Learn More
    </Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>About This Feature</DialogTitle>
      <DialogDescription>
        This feature helps you collaborate with your team more effectively
        by providing real-time updates and notifications.
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <DialogClose asChild>
        <Button>Got it</Button>
      </DialogClose>
    </DialogFooter>
  </DialogContent>
</Dialog>`}
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="secondary">
                      <Info />
                      Learn More
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>About This Feature</DialogTitle>
                      <DialogDescription>
                        This feature helps you collaborate with your team more
                        effectively by providing real-time updates and
                        notifications.
                      </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                      <DialogClose asChild>
                        <Button>Got it</Button>
                      </DialogClose>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </ComponentPreview>

              {/* Warning Dialog */}
              <ComponentPreview
                title="Warning"
                description="Alert users about potentially dangerous actions"
                code={`<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">
      <AlertTriangle />
      Clear Cache
    </Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Clear Browser Cache?</DialogTitle>
      <DialogDescription>
        This will remove all cached data. You may need to re-login to some services.
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <DialogClose asChild>
        <Button variant="outline">Cancel</Button>
      </DialogClose>
      <Button>Clear Cache</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`}
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline">
                      <AlertTriangle />
                      Clear Cache
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Clear Browser Cache?</DialogTitle>
                      <DialogDescription>
                        This will remove all cached data. You may need to
                        re-login to some services.
                      </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                      <DialogClose asChild>
                        <Button variant="outline">Cancel</Button>
                      </DialogClose>
                      <Button>Clear Cache</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </ComponentPreview>

              {/* Success Dialog */}
              <ComponentPreview
                title="Success"
                description="Confirm successful completion of actions"
                code={`<Dialog>
  <DialogTrigger asChild>
    <Button variant="secondary">
      <CheckCircle2 />
      Complete Setup
    </Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Setup Complete!</DialogTitle>
      <DialogDescription>
        Your account has been successfully configured. You can now start using all features.
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <DialogClose asChild>
        <Button>Get Started</Button>
      </DialogClose>
    </DialogFooter>
  </DialogContent>
</Dialog>`}
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="secondary">
                      <CheckCircle2 />
                      Complete Setup
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Setup Complete!</DialogTitle>
                      <DialogDescription>
                        Your account has been successfully configured. You can
                        now start using all features.
                      </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                      <DialogClose asChild>
                        <Button>Get Started</Button>
                      </DialogClose>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </ComponentPreview>
            </div>
          </div>

          {/* Sound Customization */}
          <div>
            <h2 className="text-3xl font-bold mb-4">Sound Customization</h2>
            <p className="text-muted-foreground mb-8">
              Override default sounds for open and close actions.
            </p>

            <div className="space-y-6">
              <ComponentPreview
                title="Custom Open Sound"
                description="Use a success sound when opening"
                code={`<Dialog openSound="success">
  <DialogTrigger asChild>
    <Button variant="secondary">Success Sound</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Custom Sound</DialogTitle>
      <DialogDescription>
        This dialog opens with a success sound effect.
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>`}
              >
                <Dialog openSound="success">
                  <DialogTrigger asChild>
                    <Button variant="secondary">Success Sound</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Custom Sound</DialogTitle>
                      <DialogDescription>
                        This dialog opens with a success sound effect.
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </ComponentPreview>

              <ComponentPreview
                title="Silent Dialog"
                description="Disable sound effects completely"
                code={`<Dialog soundEnabled={false}>
  <DialogTrigger asChild>
    <Button variant="outline">No Sound</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Silent Mode</DialogTitle>
      <DialogDescription>
        This dialog has no sound effects.
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>`}
              >
                <Dialog soundEnabled={false}>
                  <DialogTrigger asChild>
                    <Button variant="outline">No Sound</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Silent Mode</DialogTitle>
                      <DialogDescription>
                        This dialog has no sound effects.
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </ComponentPreview>
            </div>
          </div>

          {/* Without Close Button */}
          <div>
            <h2 className="text-3xl font-bold mb-4">Custom Close Behavior</h2>
            <p className="text-muted-foreground mb-8">
              Control close button visibility and behavior.
            </p>

            <ComponentPreview
              code={`<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">
      <Settings />
      Settings
    </Button>
  </DialogTrigger>
  <DialogContent showCloseButton={false}>
    <DialogHeader>
      <DialogTitle>Preferences</DialogTitle>
      <DialogDescription>
        Configure your application settings.
      </DialogDescription>
    </DialogHeader>
    <div className="py-4">
      <p className="text-sm text-muted-foreground">
        Settings content goes here...
      </p>
    </div>
    <DialogFooter>
      <DialogClose asChild>
        <Button variant="outline">Cancel</Button>
      </DialogClose>
      <Button>Save Changes</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`}
            >
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">
                    <Settings />
                    Settings
                  </Button>
                </DialogTrigger>
                <DialogContent showCloseButton={false}>
                  <DialogHeader>
                    <DialogTitle>Preferences</DialogTitle>
                    <DialogDescription>
                      Configure your application settings.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="py-4">
                    <p className="text-sm text-muted-foreground">
                      Settings content goes here...
                    </p>
                  </div>
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button variant="outline">Cancel</Button>
                    </DialogClose>
                    <Button>Save Changes</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
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
                  npx shadcn-ui@latest add dialog
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
                  <code>{`import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function Example() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Title</DialogTitle>
          <DialogDescription>
            Description text
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}`}</code>
                </pre>
              </div>
            </div>
          </div>

          {/* Props Documentation */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Props</h2>

            {/* Dialog Props */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4">Dialog</h3>
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
                          openSound
                        </td>
                        <td className="px-6 py-4 text-sm font-mono text-muted-foreground">
                          SoundName
                        </td>
                        <td className="px-6 py-4 text-sm font-mono text-muted-foreground">
                          whoosh
                        </td>
                        <td className="px-6 py-4 text-sm">
                          Sound to play when opening
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm font-mono">
                          closeSound
                        </td>
                        <td className="px-6 py-4 text-sm font-mono text-muted-foreground">
                          SoundName
                        </td>
                        <td className="px-6 py-4 text-sm font-mono text-muted-foreground">
                          click
                        </td>
                        <td className="px-6 py-4 text-sm">
                          Sound to play when closing
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* DialogContent Props */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4">DialogContent</h3>
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
                          showCloseButton
                        </td>
                        <td className="px-6 py-4 text-sm font-mono text-muted-foreground">
                          boolean
                        </td>
                        <td className="px-6 py-4 text-sm font-mono text-muted-foreground">
                          true
                        </td>
                        <td className="px-6 py-4 text-sm">
                          Show/hide the close button
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* DialogTrigger Props */}
            <div>
              <h3 className="text-xl font-semibold mb-4">DialogTrigger</h3>
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
                          Enable/disable hover sound
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
