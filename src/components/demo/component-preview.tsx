"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Copy, Code2, Eye } from "lucide-react";
import { useSound } from "@/components/sound-provider";
import { CodeBlock } from "@/components/demo/code-block";

interface ComponentPreviewProps {
  children: React.ReactNode;
  code: string;
  title?: string;
  description?: string;
  showCode?: boolean;
}

export function ComponentPreview({
  children,
  code,
  title,
  description,
  showCode = false,
}: ComponentPreviewProps) {
  const [isCodeVisible, setIsCodeVisible] = useState(showCode);
  const [isCopied, setIsCopied] = useState(false);
  const { playSound } = useSound();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setIsCopied(true);
      playSound("success");
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const toggleCode = () => {
    setIsCodeVisible(!isCodeVisible);
    playSound("click");
  };

  return (
    <div className="relative space-y-4">
      {/* Header */}
      {(title || description) && (
        <div className="space-y-2">
          {title && <h3 className="text-lg font-semibold">{title}</h3>}
          {description && (
            <p className="text-sm text-muted-foreground">{description}</p>
          )}
        </div>
      )}

      {/* Preview Container */}
      <div className="relative rounded-lg border border-border/50 bg-card overflow-hidden">
        {/* Preview Area */}
        <div className="relative p-12 flex items-center justify-center min-h-[200px] bg-gradient-to-b from-background to-secondary/10">
          {/* Grid Pattern Background */}
          <div
            className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]"
            style={{
              backgroundImage: `
                linear-gradient(to right, currentColor 1px, transparent 1px),
                linear-gradient(to bottom, currentColor 1px, transparent 1px)
              `,
              backgroundSize: "20px 20px",
            }}
          />

          {/* Component */}
          <div className="relative z-10">{children}</div>
        </div>

        {/* Action Bar */}
        <div className="flex items-center justify-between px-4 py-3 border-t border-border/50 bg-muted/30">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Eye className="w-3.5 h-3.5" />
            <span>Preview</span>
          </div>

          <div className="flex items-center gap-2">
            {/* Toggle Code Button */}
            <motion.button
              onClick={toggleCode}
              onMouseEnter={() => playSound("hover")}
              className={`flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                isCodeVisible
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>{isCodeVisible ? "Hide" : "Show"} Code</span>
            </motion.button>

            {/* Copy Button */}
            <motion.button
              onClick={handleCopy}
              onMouseEnter={() => playSound("hover")}
              className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isCopied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-green-500" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy</span>
                </>
              )}
            </motion.button>
          </div>
        </div>

        {/* Code Block */}
        <AnimatePresence>
          {isCodeVisible && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden border-t border-border/50"
            >
              <CodeBlock code={code} language="tsx" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
