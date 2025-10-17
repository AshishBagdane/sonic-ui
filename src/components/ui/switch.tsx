"use client";

import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { useSound } from "@/components/sound-provider";

function cn(...inputs: (string | undefined | null | false)[]) {
  return inputs.filter(Boolean).join(" ");
}

type SoundName = "click" | "hover" | "success" | "whoosh" | "button";

export interface SwitchProps
  extends React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> {
  soundEnabled?: boolean;
  onSound?: SoundName;
  offSound?: SoundName;
  hoverSound?: SoundName;
}

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  SwitchProps
>(
  (
    {
      className,
      soundEnabled = true,
      onSound = "click",
      offSound = "click",
      hoverSound = "hover",
      onCheckedChange,
      onMouseEnter,
      disabled,
      ...props
    },
    ref
  ) => {
    const { playSound, enabled: globalSoundEnabled } = useSound();

    const shouldPlaySound = soundEnabled && globalSoundEnabled && !disabled;

    const handleCheckedChange = (checked: boolean) => {
      if (shouldPlaySound) {
        playSound(checked ? onSound : offSound);
      }
      onCheckedChange?.(checked);
    };

    const handleMouseEnter = (
      e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
      if (shouldPlaySound && hoverSound) {
        playSound(hoverSound);
      }
      onMouseEnter?.(e);
    };

    return (
      <SwitchPrimitives.Root
        ref={ref}
        className={cn(
          "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
          "data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
          "active:scale-95",
          className
        )}
        onCheckedChange={handleCheckedChange}
        onMouseEnter={handleMouseEnter}
        disabled={disabled}
        {...props}
      >
        <SwitchPrimitives.Thumb
          className={cn(
            "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform duration-200",
            "data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
          )}
        />
      </SwitchPrimitives.Root>
    );
  }
);

Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
