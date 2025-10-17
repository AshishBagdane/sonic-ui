"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { XIcon } from "lucide-react";
import { useSound } from "@/components/sound-provider";

function cn(...inputs: (string | undefined | null | false)[]) {
  return inputs.filter(Boolean).join(" ");
}

type SoundName = "click" | "hover" | "success" | "whoosh" | "button";

interface DialogProps
  extends React.ComponentProps<typeof DialogPrimitive.Root> {
  soundEnabled?: boolean;
  openSound?: SoundName;
  closeSound?: SoundName;
}

function Dialog({
  soundEnabled = true,
  openSound = "whoosh",
  closeSound = "click",
  onOpenChange,
  ...props
}: DialogProps) {
  const { playSound, enabled: globalSoundEnabled } = useSound();
  const shouldPlaySound = soundEnabled && globalSoundEnabled;

  const handleOpenChange = (open: boolean) => {
    if (shouldPlaySound) {
      playSound(open ? openSound : closeSound);
    }
    onOpenChange?.(open);
  };

  return (
    <DialogPrimitive.Root
      data-slot="dialog"
      onOpenChange={handleOpenChange}
      {...props}
    />
  );
}

interface DialogTriggerProps
  extends React.ComponentProps<typeof DialogPrimitive.Trigger> {
  soundEnabled?: boolean;
  hoverSound?: SoundName;
}

function DialogTrigger({
  soundEnabled = true,
  hoverSound = "hover",
  onMouseEnter,
  ...props
}: DialogTriggerProps) {
  const { playSound, enabled: globalSoundEnabled } = useSound();
  const shouldPlaySound = soundEnabled && globalSoundEnabled;

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (shouldPlaySound && hoverSound) {
      playSound(hoverSound);
    }
    onMouseEnter?.(e);
  };

  return (
    <DialogPrimitive.Trigger
      data-slot="dialog-trigger"
      onMouseEnter={handleMouseEnter}
      {...props}
    />
  );
}

function DialogPortal({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Portal>) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />;
}

interface DialogCloseProps
  extends React.ComponentProps<typeof DialogPrimitive.Close> {
  soundEnabled?: boolean;
  clickSound?: SoundName;
  hoverSound?: SoundName;
}

function DialogClose({
  soundEnabled = true,
  clickSound = "click",
  hoverSound = "hover",
  onClick,
  onMouseEnter,
  ...props
}: DialogCloseProps) {
  const { playSound, enabled: globalSoundEnabled } = useSound();
  const shouldPlaySound = soundEnabled && globalSoundEnabled;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (shouldPlaySound && clickSound) {
      playSound(clickSound);
    }
    onClick?.(e);
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (shouldPlaySound && hoverSound) {
      playSound(hoverSound);
    }
    onMouseEnter?.(e);
  };

  return (
    <DialogPrimitive.Close
      data-slot="dialog-close"
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      {...props}
    />
  );
}

function DialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      data-slot="dialog-overlay"
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm",
        className
      )}
      {...props}
    />
  );
}

function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content> & {
  showCloseButton?: boolean;
}) {
  return (
    <DialogPortal data-slot="dialog-portal">
      <DialogOverlay />
      <DialogPrimitive.Content
        data-slot="dialog-content"
        className={cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out",
          "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
          "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
          "data-[state=closed]:slide-out-to-top-[2%] data-[state=open]:slide-in-from-top-[2%]",
          "fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)]",
          "translate-x-[-50%] translate-y-[-50%] gap-4 rounded-2xl border border-border/50",
          "p-6 shadow-lg duration-300 sm:max-w-lg",
          "backdrop-blur-xl bg-card",
          className
        )}
        {...props}
      >
        {children}
        {showCloseButton && (
          <DialogClose
            className={cn(
              "absolute top-4 right-4 rounded-lg p-2",
              "opacity-70 transition-all duration-200",
              "hover:opacity-100 hover:bg-accent",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
              "disabled:pointer-events-none",
              "active:scale-95"
            )}
          >
            <XIcon className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogClose>
        )}
      </DialogPrimitive.Content>
    </DialogPortal>
  );
}

function DialogHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-header"
      className={cn("flex flex-col gap-2 text-center sm:text-left", className)}
      {...props}
    />
  );
}

function DialogFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      )}
      {...props}
    />
  );
}

function DialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn(
        "text-xl leading-none font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  );
}

function DialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn("text-muted-foreground text-sm leading-relaxed", className)}
      {...props}
    />
  );
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
};
