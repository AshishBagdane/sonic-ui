"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { motion, type HTMLMotionProps } from "framer-motion";
import { useSound } from "@/components/sound-provider";

function cn(...inputs: (string | undefined | null | false)[]) {
  return inputs.filter(Boolean).join(" ");
}

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3 text-xs",
        lg: "h-11 rounded-lg px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

type SoundName = "click" | "hover" | "success" | "whoosh" | "button";

export interface ButtonProps
  extends Omit<
      HTMLMotionProps<"button">,
      "onAnimationStart" | "onDrag" | "onDragEnd" | "onDragStart"
    >,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  soundEnabled?: boolean;
  clickSound?: SoundName;
  hoverSound?: SoundName;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      soundEnabled = true,
      clickSound = "click",
      hoverSound = "hover",
      onMouseEnter,
      onClick,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const { playSound, enabled: globalSoundEnabled } = useSound();

    const shouldPlaySound = soundEnabled && globalSoundEnabled && !disabled;

    const handleMouseEnter = (
      e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
      if (shouldPlaySound && hoverSound) {
        playSound(hoverSound);
      }
      onMouseEnter?.(e);
    };

    const handleClick = (
      e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
      if (shouldPlaySound && clickSound) {
        playSound(clickSound);
      }
      onClick?.(e);
    };

    // If using asChild, render without motion
    if (asChild) {
      return (
        <Slot
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          onMouseEnter={handleMouseEnter}
          onClick={handleClick}
          {...(props as React.HTMLAttributes<HTMLElement>)}
        >
          {children as React.ReactNode}
        </Slot>
      );
    }

    return (
      <motion.button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={disabled}
        onMouseEnter={handleMouseEnter}
        onClick={handleClick}
        whileHover={disabled ? undefined : { scale: 1.02 }}
        whileTap={disabled ? undefined : { scale: 0.98 }}
        transition={{
          type: "spring" as const,
          stiffness: 400,
          damping: 17,
        }}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
