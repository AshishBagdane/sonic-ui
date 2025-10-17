"use client";

import * as React from "react";
import { useSound } from "@/components/sound-provider";

function cn(...inputs: (string | undefined | null | false)[]) {
  return inputs.filter(Boolean).join(" ");
}

type SoundName = "click" | "hover" | "success" | "whoosh" | "button";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  soundEnabled?: boolean;
  hoverSound?: SoundName;
  clickSound?: SoundName;
  interactive?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      soundEnabled = true,
      hoverSound = "hover",
      clickSound,
      interactive = false,
      onMouseEnter,
      onClick,
      children,
      ...props
    },
    ref
  ) => {
    const { playSound, enabled: globalSoundEnabled } = useSound();
    const shouldPlaySound = soundEnabled && globalSoundEnabled;

    const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
      if (shouldPlaySound && hoverSound && interactive) {
        playSound(hoverSound);
      }
      onMouseEnter?.(e);
    };

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
      if (shouldPlaySound && clickSound) {
        playSound(clickSound);
      }
      onClick?.(e);
    };

    return (
      <div
        ref={ref}
        className={cn(
          "rounded-2xl border border-border/50 bg-card text-card-foreground shadow-sm transition-all duration-300",
          interactive &&
            "cursor-pointer hover:border-border hover:shadow-md hover:-translate-y-1",
          className
        )}
        onMouseEnter={handleMouseEnter}
        onClick={handleClick}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("font-semibold leading-none tracking-tight", className)}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
export type { CardProps };
