"use client";

import { motion } from "framer-motion";
import { Volume2, Sparkles, Zap } from "lucide-react";

const features = [
  {
    icon: Volume2,
    title: "Default Sounds",
    description: "Carefully crafted audio feedback for every interaction.",
  },
  {
    icon: Sparkles,
    title: "Motion + Sound",
    description: "Elegant animations paired with audio cues.",
  },
  {
    icon: Zap,
    title: "Fully Customizable",
    description: "Override sounds globally or per-component.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="w-full border-t border-border/40">
      <div className="container-story py-32 sm:py-40">
        <div className="mx-auto max-w-6xl">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-24 animate-slide-up"
          >
            <h2 className="text-title-1 mb-6 tracking-tight">Why sonic-ui?</h2>
            <p className="text-body text-muted-foreground max-w-2xl mx-auto">
              Add personality to your interfaces without complex sound design
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="card-interactive text-center p-8 glow-interactive-hover"
                >
                  {/* Icon */}
                  <div className="flex items-center justify-center mb-6">
                    <div className="p-4 rounded-2xl bg-interactive-glow">
                      <Icon
                        className="h-8 w-8 text-interactive"
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-title-3 mb-3 tracking-tight">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-body text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
