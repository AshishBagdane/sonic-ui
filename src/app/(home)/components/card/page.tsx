"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  Square,
  Bell,
  Calendar,
  CreditCard,
  User,
  Settings,
  TrendingUp,
  Star,
  Heart,
  Share2,
  MessageSquare,
  Eye,
} from "lucide-react";
import { useSound } from "@/components/sound-provider";
import { ComponentPreview } from "@/components/demo/component-preview";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

export default function CardPage() {
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
              <div className="p-3 rounded-lg bg-gradient-to-br from-indigo-500/20 to-violet-500/20 border border-indigo-500/20">
                <Square className="w-6 h-6 text-indigo-500" />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                Card
              </h1>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
              Content containers with hover reveal sounds. Display information
              in organized, visually appealing cards with smooth animations and
              subtle audio feedback.
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
              code={`<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description goes here.</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content goes here.</p>
  </CardContent>
</Card>`}
            >
              <Card className="w-full max-w-md">
                <CardHeader>
                  <CardTitle>Card Title</CardTitle>
                  <CardDescription>Card description goes here.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Card content goes here.</p>
                </CardContent>
              </Card>
            </ComponentPreview>
          </div>

          {/* Interactive Cards */}
          <div>
            <h2 className="text-3xl font-bold mb-4">Interactive Cards</h2>
            <p className="text-muted-foreground mb-8">
              Cards that respond to hover with sound effects and animations.
            </p>

            <ComponentPreview
              code={`<Card interactive hoverSound="hover">
  <CardHeader>
    <CardTitle>Hover Me</CardTitle>
    <CardDescription>
      This card plays a sound on hover
    </CardDescription>
  </CardHeader>
  <CardContent>
    <p>Interactive cards enhance user experience with subtle feedback.</p>
  </CardContent>
</Card>`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card interactive hoverSound="hover">
                  <CardHeader>
                    <CardTitle>Hover Me</CardTitle>
                    <CardDescription>
                      This card plays a sound on hover
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Interactive cards enhance user experience with subtle
                      feedback.
                    </p>
                  </CardContent>
                </Card>

                <Card interactive hoverSound="whoosh" clickSound="click">
                  <CardHeader>
                    <CardTitle>Click & Hover</CardTitle>
                    <CardDescription>
                      Plays sounds on both hover and click
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Try clicking this card for an additional sound effect!
                    </p>
                  </CardContent>
                </Card>
              </div>
            </ComponentPreview>
          </div>

          {/* With Footer */}
          <div>
            <h2 className="text-3xl font-bold mb-4">With Footer</h2>
            <p className="text-muted-foreground mb-8">
              Add action buttons or additional information in the footer.
            </p>

            <ComponentPreview
              code={`<Card>
  <CardHeader>
    <CardTitle>Notifications</CardTitle>
    <CardDescription>You have 3 unread messages.</CardDescription>
  </CardHeader>
  <CardContent>
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <Bell className="w-5 h-5 text-muted-foreground" />
        <div className="flex-1">
          <p className="text-sm font-medium">New comment</p>
          <p className="text-xs text-muted-foreground">2 minutes ago</p>
        </div>
      </div>
    </div>
  </CardContent>
  <CardFooter>
    <Button className="w-full">Mark all as read</Button>
  </CardFooter>
</Card>`}
            >
              <Card className="w-full max-w-md">
                <CardHeader>
                  <CardTitle>Notifications</CardTitle>
                  <CardDescription>You have 3 unread messages.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <Bell className="w-5 h-5 text-muted-foreground" />
                      <div className="flex-1">
                        <p className="text-sm font-medium">New comment</p>
                        <p className="text-xs text-muted-foreground">
                          2 minutes ago
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Calendar className="w-5 h-5 text-muted-foreground" />
                      <div className="flex-1">
                        <p className="text-sm font-medium">Event reminder</p>
                        <p className="text-xs text-muted-foreground">
                          1 hour ago
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <User className="w-5 h-5 text-muted-foreground" />
                      <div className="flex-1">
                        <p className="text-sm font-medium">New follower</p>
                        <p className="text-xs text-muted-foreground">
                          3 hours ago
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Mark all as read</Button>
                </CardFooter>
              </Card>
            </ComponentPreview>
          </div>

          {/* Card Grid */}
          <div>
            <h2 className="text-3xl font-bold mb-4">Card Grid</h2>
            <p className="text-muted-foreground mb-8">
              Display multiple cards in a responsive grid layout.
            </p>

            <ComponentPreview
              code={`<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {/* Cards */}
</div>`}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card interactive>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">Total Users</CardTitle>
                      <User className="w-5 h-5 text-muted-foreground" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">12,543</div>
                    <p className="text-xs text-muted-foreground mt-2">
                      <span className="text-green-500">+12.5%</span> from last
                      month
                    </p>
                  </CardContent>
                </Card>

                <Card interactive>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">Revenue</CardTitle>
                      <TrendingUp className="w-5 h-5 text-muted-foreground" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">$45,231</div>
                    <p className="text-xs text-muted-foreground mt-2">
                      <span className="text-green-500">+8.2%</span> from last
                      month
                    </p>
                  </CardContent>
                </Card>

                <Card interactive>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">Active Now</CardTitle>
                      <Bell className="w-5 h-5 text-muted-foreground" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">573</div>
                    <p className="text-xs text-muted-foreground mt-2">
                      <span className="text-green-500">+201</span> since last
                      hour
                    </p>
                  </CardContent>
                </Card>
              </div>
            </ComponentPreview>
          </div>

          {/* Profile Card */}
          <div>
            <h2 className="text-3xl font-bold mb-4">Profile Card</h2>
            <p className="text-muted-foreground mb-8">
              Display user profile information in a card.
            </p>

            <ComponentPreview
              code={`<Card>
  <CardHeader>
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-white font-semibold">
        JD
      </div>
      <div>
        <CardTitle>John Doe</CardTitle>
        <CardDescription>@johndoe</CardDescription>
      </div>
    </div>
  </CardHeader>
  <CardContent>
    <p className="text-sm text-muted-foreground">
      Full-stack developer passionate about creating beautiful user experiences.
    </p>
    <div className="flex gap-4 mt-4">
      <div>
        <div className="text-xl font-bold">1.2K</div>
        <div className="text-xs text-muted-foreground">Followers</div>
      </div>
      <div>
        <div className="text-xl font-bold">543</div>
        <div className="text-xs text-muted-foreground">Following</div>
      </div>
    </div>
  </CardContent>
  <CardFooter className="gap-2">
    <Button className="flex-1">Follow</Button>
    <Button variant="outline" className="flex-1">Message</Button>
  </CardFooter>
</Card>`}
            >
              <Card className="w-full max-w-md">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-white font-semibold">
                      JD
                    </div>
                    <div>
                      <CardTitle>John Doe</CardTitle>
                      <CardDescription>@johndoe</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Full-stack developer passionate about creating beautiful
                    user experiences.
                  </p>
                  <div className="flex gap-4 mt-4">
                    <div>
                      <div className="text-xl font-bold">1.2K</div>
                      <div className="text-xs text-muted-foreground">
                        Followers
                      </div>
                    </div>
                    <div>
                      <div className="text-xl font-bold">543</div>
                      <div className="text-xs text-muted-foreground">
                        Following
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="gap-2">
                  <Button className="flex-1">Follow</Button>
                  <Button variant="outline" className="flex-1">
                    Message
                  </Button>
                </CardFooter>
              </Card>
            </ComponentPreview>
          </div>

          {/* Product Card */}
          <div>
            <h2 className="text-3xl font-bold mb-4">Product Card</h2>
            <p className="text-muted-foreground mb-8">
              Showcase products or items with images and actions.
            </p>

            <ComponentPreview
              code={`<Card interactive>
  <div className="aspect-video bg-gradient-to-br from-indigo-500/20 to-violet-500/20 rounded-t-2xl" />
  <CardHeader>
    <CardTitle>Premium Headphones</CardTitle>
    <CardDescription>High-quality wireless audio</CardDescription>
  </CardHeader>
  <CardContent>
    <div className="flex items-center justify-between">
      <span className="text-2xl font-bold">$299</span>
      <div className="flex items-center gap-1 text-sm text-muted-foreground">
        <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
        <span className="font-medium">4.8</span>
        <span>(124)</span>
      </div>
    </div>
  </CardContent>
  <CardFooter>
    <Button className="w-full">Add to Cart</Button>
  </CardFooter>
</Card>`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card interactive>
                  <div className="aspect-video bg-gradient-to-br from-indigo-500/20 to-violet-500/20 rounded-t-2xl flex items-center justify-center">
                    <Settings className="w-12 h-12 text-indigo-500" />
                  </div>
                  <CardHeader>
                    <CardTitle>Premium Headphones</CardTitle>
                    <CardDescription>
                      High-quality wireless audio
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold">$299</span>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                        <span className="font-medium">4.8</span>
                        <span>(124)</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Add to Cart</Button>
                  </CardFooter>
                </Card>

                <Card interactive>
                  <div className="aspect-video bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-t-2xl flex items-center justify-center">
                    <CreditCard className="w-12 h-12 text-green-500" />
                  </div>
                  <CardHeader>
                    <CardTitle>Wireless Keyboard</CardTitle>
                    <CardDescription>Mechanical RGB backlight</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold">$159</span>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                        <span className="font-medium">4.9</span>
                        <span>(89)</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Add to Cart</Button>
                  </CardFooter>
                </Card>

                <Card interactive>
                  <div className="aspect-video bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-t-2xl flex items-center justify-center">
                    <Square className="w-12 h-12 text-orange-500" />
                  </div>
                  <CardHeader>
                    <CardTitle>Smart Watch</CardTitle>
                    <CardDescription>Fitness tracking & more</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold">$399</span>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                        <span className="font-medium">4.7</span>
                        <span>(203)</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Add to Cart</Button>
                  </CardFooter>
                </Card>
              </div>
            </ComponentPreview>
          </div>

          {/* Social Card */}
          <div>
            <h2 className="text-3xl font-bold mb-4">Social Card</h2>
            <p className="text-muted-foreground mb-8">
              Create social media-style posts and updates.
            </p>

            <ComponentPreview
              code={`<Card>
  <CardHeader>
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500" />
      <div className="flex-1">
        <CardTitle className="text-base">Sarah Johnson</CardTitle>
        <CardDescription>2 hours ago</CardDescription>
      </div>
    </div>
  </CardHeader>
  <CardContent>
    <p className="text-sm mb-4">
      Just launched my new portfolio website! Check it out and let me know what you think 🚀
    </p>
    <div className="flex items-center gap-6 text-sm text-muted-foreground">
      <button className="flex items-center gap-1.5 hover:text-foreground transition-colors">
        <Heart className="w-4 h-4" />
        <span>234</span>
      </button>
      <button className="flex items-center gap-1.5 hover:text-foreground transition-colors">
        <MessageSquare className="w-4 h-4" />
        <span>45</span>
      </button>
      <button className="flex items-center gap-1.5 hover:text-foreground transition-colors">
        <Share2 className="w-4 h-4" />
        <span>12</span>
      </button>
    </div>
  </CardContent>
</Card>`}
            >
              <Card className="w-full max-w-md">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500" />
                    <div className="flex-1">
                      <CardTitle className="text-base">Sarah Johnson</CardTitle>
                      <CardDescription>2 hours ago</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-4">
                    Just launched my new portfolio website! Check it out and let
                    me know what you think 🚀
                  </p>
                  <div className="flex items-center gap-6 text-sm text-muted-foreground">
                    <button
                      className="flex items-center gap-1.5 hover:text-foreground transition-colors"
                      onClick={() => playSound("click")}
                      onMouseEnter={() => playSound("hover")}
                    >
                      <Heart className="w-4 h-4" />
                      <span>234</span>
                    </button>
                    <button
                      className="flex items-center gap-1.5 hover:text-foreground transition-colors"
                      onClick={() => playSound("click")}
                      onMouseEnter={() => playSound("hover")}
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>45</span>
                    </button>
                    <button
                      className="flex items-center gap-1.5 hover:text-foreground transition-colors"
                      onClick={() => playSound("click")}
                      onMouseEnter={() => playSound("hover")}
                    >
                      <Share2 className="w-4 h-4" />
                      <span>12</span>
                    </button>
                  </div>
                </CardContent>
              </Card>
            </ComponentPreview>
          </div>

          {/* Sound Customization */}
          <div>
            <h2 className="text-3xl font-bold mb-4">Sound Customization</h2>
            <p className="text-muted-foreground mb-8">
              Override default sounds or disable sound for specific cards.
            </p>

            <div className="space-y-6">
              <ComponentPreview
                title="Custom Hover Sound"
                description="Use a different sound for hover"
                code={`<Card interactive hoverSound="success">
  <CardHeader>
    <CardTitle>Success Sound</CardTitle>
    <CardDescription>Plays success sound on hover</CardDescription>
  </CardHeader>
</Card>`}
              >
                <Card interactive hoverSound="success" className="max-w-md">
                  <CardHeader>
                    <CardTitle>Success Sound</CardTitle>
                    <CardDescription>
                      Plays success sound on hover
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Hover over this card to hear a success sound.
                    </p>
                  </CardContent>
                </Card>
              </ComponentPreview>

              <ComponentPreview
                title="Silent Card"
                description="Disable sound effects completely"
                code={`<Card interactive soundEnabled={false}>
  <CardHeader>
    <CardTitle>No Sound</CardTitle>
    <CardDescription>This card has no sound effects</CardDescription>
  </CardHeader>
</Card>`}
              >
                <Card interactive soundEnabled={false} className="max-w-md">
                  <CardHeader>
                    <CardTitle>No Sound</CardTitle>
                    <CardDescription>
                      This card has no sound effects
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      This card is completely silent with no audio feedback.
                    </p>
                  </CardContent>
                </Card>
              </ComponentPreview>
            </div>
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
                  npx shadcn-ui@latest add card
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
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function Example() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>
          Card description
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card content</p>
      </CardContent>
      <CardFooter>
        <Button>Action</Button>
      </CardFooter>
    </Card>
  )
}`}</code>
                </pre>
              </div>
            </div>
          </div>

          {/* Props Documentation */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Props</h2>

            {/* Card Props */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4">Card</h3>
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
                          interactive
                        </td>
                        <td className="px-6 py-4 text-sm font-mono text-muted-foreground">
                          boolean
                        </td>
                        <td className="px-6 py-4 text-sm font-mono text-muted-foreground">
                          false
                        </td>
                        <td className="px-6 py-4 text-sm">
                          Enable hover effects and animations
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
                        <td className="px-6 py-4 text-sm font-mono">
                          clickSound
                        </td>
                        <td className="px-6 py-4 text-sm font-mono text-muted-foreground">
                          SoundName
                        </td>
                        <td className="px-6 py-4 text-sm font-mono text-muted-foreground">
                          -
                        </td>
                        <td className="px-6 py-4 text-sm">
                          Sound to play on click (optional)
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Subcomponents */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Subcomponents</h3>
              <div className="rounded-lg border border-border/50 bg-card overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border/50 bg-muted/50">
                        <th className="px-6 py-4 text-left text-sm font-medium">
                          Component
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-medium">
                          Description
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border/50">
                      <tr>
                        <td className="px-6 py-4 text-sm font-mono">
                          CardHeader
                        </td>
                        <td className="px-6 py-4 text-sm">
                          Container for card title and description
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm font-mono">
                          CardTitle
                        </td>
                        <td className="px-6 py-4 text-sm">
                          Main title text of the card
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm font-mono">
                          CardDescription
                        </td>
                        <td className="px-6 py-4 text-sm">
                          Subtitle or description text
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm font-mono">
                          CardContent
                        </td>
                        <td className="px-6 py-4 text-sm">
                          Main content area of the card
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm font-mono">
                          CardFooter
                        </td>
                        <td className="px-6 py-4 text-sm">
                          Footer area for actions or additional info
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
