"use client";

import { toast as sonnerToast, type ExternalToast } from "sonner";
import { useEffect } from "react";

type SoundName = "click" | "hover" | "success" | "whoosh" | "button";

// Extend Sonner's ExternalToast with our sound property
interface ToastOptions extends ExternalToast {
  sound?: SoundName;
}

export const toast = {
  success: (message: string, options?: ToastOptions) => {
    return sonnerToast.success(message, options);
  },

  error: (message: string, options?: ToastOptions) => {
    return sonnerToast.error(message, options);
  },

  info: (message: string, options?: ToastOptions) => {
    return sonnerToast.info(message, options);
  },

  warning: (message: string, options?: ToastOptions) => {
    return sonnerToast.warning(message, options);
  },

  message: (message: string, options?: ToastOptions) => {
    return sonnerToast(message, options);
  },

  promise: sonnerToast.promise,
  loading: sonnerToast.loading,
  dismiss: sonnerToast.dismiss,
};
