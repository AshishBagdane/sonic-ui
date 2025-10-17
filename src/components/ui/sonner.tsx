"use client";

import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
} from "lucide-react";
import { useTheme } from "next-themes";
import { Toaster as Sonner, type ToasterProps } from "sonner";
import { useEffect, useRef } from "react";
import { useSound } from "@/components/sound-provider";

type SoundName = "click" | "hover" | "success" | "whoosh" | "button";

interface ToasterWithSoundProps extends ToasterProps {
  soundEnabled?: boolean;
  successSound?: SoundName;
  errorSound?: SoundName;
  infoSound?: SoundName;
  warningSound?: SoundName;
}

const Toaster = ({
  soundEnabled = true,
  successSound = "success",
  errorSound = "click",
  infoSound = "hover",
  warningSound = "whoosh",
  ...props
}: ToasterWithSoundProps) => {
  const { theme = "system" } = useTheme();
  const { playSound, enabled: globalSoundEnabled } = useSound();
  const shouldPlaySound = soundEnabled && globalSoundEnabled;
  const lastToastRef = useRef<string | number | null>(null);

  useEffect(() => {
    if (!shouldPlaySound) return;

    // Use MutationObserver to detect when toasts are added
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof HTMLElement) {
            // Check if it's a toast element
            if (node.hasAttribute("data-sonner-toast")) {
              const toastType = node.getAttribute("data-type");

              // Play sound based on toast type
              switch (toastType) {
                case "success":
                  playSound(successSound);
                  break;
                case "error":
                  playSound(errorSound);
                  break;
                case "info":
                  playSound(infoSound);
                  break;
                case "warning":
                  playSound(warningSound);
                  break;
                default:
                  playSound(infoSound);
              }
            }
          }
        });
      });
    });

    // Start observing the document body for toast additions
    const toastContainer = document.querySelector("[data-sonner-toaster]");
    if (toastContainer) {
      observer.observe(toastContainer, {
        childList: true,
        subtree: true,
      });
    }

    // Fallback: observe body if container isn't ready yet
    const bodyObserver = new MutationObserver(() => {
      const container = document.querySelector("[data-sonner-toaster]");
      if (container) {
        observer.observe(container, {
          childList: true,
          subtree: true,
        });
        bodyObserver.disconnect();
      }
    });

    bodyObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      bodyObserver.disconnect();
    };
  }, [
    shouldPlaySound,
    successSound,
    errorSound,
    infoSound,
    warningSound,
    playSound,
  ]);

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      icons={{
        success: <CircleCheckIcon className="size-4" />,
        info: <InfoIcon className="size-4" />,
        warning: <TriangleAlertIcon className="size-4" />,
        error: <OctagonXIcon className="size-4" />,
        loading: <Loader2Icon className="size-4 animate-spin" />,
      }}
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-card group-[.toaster]:text-card-foreground group-[.toaster]:border-border/50 group-[.toaster]:shadow-lg group-[.toaster]:backdrop-blur-xl",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
          success:
            "group-[.toaster]:bg-card group-[.toaster]:text-card-foreground group-[.toaster]:border-green-500/20",
          error:
            "group-[.toaster]:bg-card group-[.toaster]:text-card-foreground group-[.toaster]:border-destructive/20",
          warning:
            "group-[.toaster]:bg-card group-[.toaster]:text-card-foreground group-[.toaster]:border-yellow-500/20",
          info: "group-[.toaster]:bg-card group-[.toaster]:text-card-foreground group-[.toaster]:border-blue-500/20",
        },
      }}
      style={
        {
          "--normal-bg": "var(--card)",
          "--normal-text": "var(--card-foreground)",
          "--normal-border": "var(--border)",
          "--border-radius": "var(--radius-lg)",
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export { Toaster };
export type { ToasterWithSoundProps };
