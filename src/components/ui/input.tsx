"use client";

import * as React from "react";
import { useSound } from "@/components/sound-provider";
import { Eye, EyeOff, AlertCircle, CheckCircle2 } from "lucide-react";

function cn(...inputs: (string | undefined | null | false)[]) {
  return inputs.filter(Boolean).join(" ");
}

type SoundName = "click" | "hover" | "success" | "whoosh" | "button";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  soundEnabled?: boolean;
  focusSound?: SoundName;
  blurSound?: SoundName;
  error?: string;
  success?: boolean;
  label?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  variant?: "default" | "ghost" | "filled";
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type = "text",
      soundEnabled = true,
      focusSound = "hover",
      blurSound = "click",
      error,
      success,
      label,
      leftIcon,
      rightIcon,
      variant = "default",
      disabled,
      onFocus,
      onBlur,
      id,
      ...props
    },
    ref
  ) => {
    const { playSound, enabled: globalSoundEnabled } = useSound();
    const [isFocused, setIsFocused] = React.useState(false);
    const [showPassword, setShowPassword] = React.useState(false);
    const [shouldShake, setShouldShake] = React.useState(false);

    const shouldPlaySound = soundEnabled && globalSoundEnabled && !disabled;
    const isPassword = type === "password";
    const inputType = isPassword && showPassword ? "text" : type;
    const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");

    // Trigger shake animation when error changes
    React.useEffect(() => {
      if (error) {
        setShouldShake(true);
        const timer = setTimeout(() => setShouldShake(false), 500);
        return () => clearTimeout(timer);
      }
    }, [error]);

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      if (shouldPlaySound && focusSound) {
        playSound(focusSound);
      }
      onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      if (shouldPlaySound && blurSound) {
        playSound(blurSound);
      }
      onBlur?.(e);
    };

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
      if (shouldPlaySound) {
        playSound("click");
      }
    };

    const baseStyles = cn(
      "flex h-11 w-full rounded-lg px-3 py-2 text-sm",
      "transition-all duration-200",
      "file:border-0 file:bg-transparent file:text-sm file:font-medium",
      "placeholder:text-muted-foreground",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      "disabled:cursor-not-allowed disabled:opacity-50",
      leftIcon ? "pl-10" : "",
      rightIcon || isPassword ? "pr-10" : ""
    );

    const variantStyles = {
      default: "border border-input bg-background",
      ghost: "border-0 bg-transparent hover:bg-accent",
      filled: "border-0 bg-secondary",
    };

    const stateStyles = cn(
      error && "border-destructive focus-visible:ring-destructive",
      success && "border-green-500 focus-visible:ring-green-500",
      shouldShake && "animate-shake"
    );

    return (
      <div className="w-full space-y-2">
        {/* Label */}
        {label && (
          <label
            htmlFor={inputId}
            className={cn(
              "text-sm font-medium transition-all duration-200",
              error ? "text-destructive" : "text-foreground",
              disabled && "opacity-50",
              isFocused && "translate-y-[-2px]"
            )}
          >
            {label}
          </label>
        )}

        {/* Input Container */}
        <div className="relative">
          {/* Left Icon */}
          {leftIcon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none">
              {leftIcon}
            </div>
          )}

          {/* Input Field */}
          <input
            ref={ref}
            id={inputId}
            type={inputType}
            className={cn(
              baseStyles,
              variantStyles[variant],
              stateStyles,
              className
            )}
            disabled={disabled}
            onFocus={handleFocus}
            onBlur={handleBlur}
            {...props}
          />

          {/* Right Icons */}
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
            {/* Validation Icons */}
            {error && (
              <AlertCircle className="w-4 h-4 text-destructive animate-fade-in" />
            )}
            {success && !error && (
              <CheckCircle2 className="w-4 h-4 text-green-500 animate-fade-in" />
            )}

            {/* Password Toggle */}
            {isPassword && (
              <button
                type="button"
                onClick={togglePasswordVisibility}
                onMouseEnter={() => shouldPlaySound && playSound("hover")}
                className="text-muted-foreground hover:text-foreground transition-all duration-200 hover:scale-110 active:scale-95"
                tabIndex={-1}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            )}

            {/* Custom Right Icon */}
            {rightIcon && !isPassword && (
              <div className="text-muted-foreground pointer-events-none">
                {rightIcon}
              </div>
            )}
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <p className="text-sm text-destructive animate-fade-in">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
