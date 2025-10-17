"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  MousePointerClick,
  ToggleLeft,
  MessageSquare,
  Bell,
  Type,
  Square,
  ArrowRight,
} from "lucide-react";
import { useSound } from "@/components/sound-provider";

import { LucideIcon } from "lucide-react";

type ComponentStatus = "ready" | "wip" | "planned";

const components = [
  {
    name: "Button",
    description:
      "Trigger actions with elegant sound feedback and smooth animations.",
    icon: MousePointerClick,
    href: "/components/button",
    status: "ready" as ComponentStatus,
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    name: "Input",
    description: "Text fields with focus sounds and validation feedback.",
    icon: Type,
    href: "/components/input",
    status: "ready" as ComponentStatus,
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    name: "Switch",
    description: "Toggle states with satisfying click sounds.",
    icon: ToggleLeft,
    href: "/components/switch",
    status: "ready" as ComponentStatus,
    gradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    name: "Dialog",
    description: "Modal windows with whoosh open/close effects.",
    icon: MessageSquare,
    href: "/components/dialog",
    status: "ready" as ComponentStatus,
    gradient: "from-orange-500/20 to-red-500/20",
  },
  {
    name: "Toast",
    description: "Notifications with success and error tones.",
    icon: Bell,
    href: "/components/toast",
    status: "ready" as ComponentStatus,
    gradient: "from-yellow-500/20 to-amber-500/20",
  },
  {
    name: "Card",
    description: "Content containers with hover reveal sounds.",
    icon: Square,
    href: "/components/card",
    status: "ready" as ComponentStatus,
    gradient: "from-indigo-500/20 to-violet-500/20",
  },
];

const statusConfig: Record<
  ComponentStatus,
  { label: string; color: string; bg: string }
> = {
  ready: { label: "Ready", color: "text-green-500", bg: "bg-green-500/10" },
  wip: {
    label: "In Progress",
    color: "text-yellow-500",
    bg: "bg-yellow-500/10",
  },
  planned: { label: "Planned", color: "text-muted-foreground", bg: "bg-muted" },
};

export default function ComponentsPage() {
  const { playSound } = useSound();

  return (
    <div className="relative w-full">
      {/* Hero Section */}
      <section className="w-full border-b border-border/40 bg-gradient-to-b from-background to-secondary/20">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 py-16 sm:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Components
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Beautifully crafted UI components with built-in sound effects and
              smooth animations. Each component is designed to feel alive and
              responsive.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Components Grid */}
      <section className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {components.map((component, index) => {
            const Icon = component.icon;
            const status = statusConfig[component.status];
            const isClickable = component.status === "ready";

            return (
              <motion.div
                key={component.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {isClickable ? (
                  <Link
                    href={component.href}
                    onMouseEnter={() => playSound("hover")}
                    onClick={() => playSound("click")}
                    className="block group"
                  >
                    <ComponentCard
                      component={component}
                      status={status}
                      Icon={Icon}
                      isClickable={isClickable}
                    />
                  </Link>
                ) : (
                  <div className="cursor-not-allowed">
                    <ComponentCard
                      component={component}
                      status={status}
                      Icon={Icon}
                      isClickable={isClickable}
                    />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full border-t border-border/40 bg-secondary/20">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-4">
              More Components Coming Soon
            </h2>
            <p className="text-muted-foreground mb-8">
              We&apos;re building a comprehensive library of sound-reactive
              components. Star us on GitHub to stay updated.
            </p>
            <motion.a
              href="https://github.com/AshishBagdane/sonic-ui"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              onMouseEnter={() => playSound("hover")}
              onClick={() => playSound("click")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View on GitHub
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function ComponentCard({
  component,
  status,
  Icon,
  isClickable,
}: {
  component: (typeof components)[0];
  status: typeof statusConfig.ready;
  Icon: LucideIcon;
  isClickable: boolean;
}) {
  return (
    <motion.div
      className={`relative h-full p-6 rounded-xl border border-border/50 bg-card overflow-hidden ${
        isClickable
          ? "hover:border-border transition-all duration-300"
          : "opacity-60"
      }`}
      whileHover={isClickable ? { y: -4 } : {}}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Gradient Background */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${
          component.gradient
        } opacity-0 ${
          isClickable ? "group-hover:opacity-100" : ""
        } transition-opacity duration-300`}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Icon & Status */}
        <div className="flex items-start justify-between mb-4">
          <div
            className={`p-3 rounded-lg bg-secondary ${
              isClickable ? "group-hover:bg-secondary/80" : ""
            } transition-colors`}
          >
            <Icon className="w-6 h-6" />
          </div>
          <span
            className={`text-xs font-medium px-2 py-1 rounded-full ${status.bg} ${status.color}`}
          >
            {status.label}
          </span>
        </div>

        {/* Title & Description */}
        <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
          {component.name}
          {isClickable && (
            <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
          )}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {component.description}
        </p>
      </div>

      {/* Hover Effect Line */}
      {isClickable && (
        <motion.div
          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-primary/50"
          initial={{ width: 0 }}
          whileHover={{ width: "100%" }}
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.div>
  );
}
