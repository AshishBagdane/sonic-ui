import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SoundProvider } from "@/components/sound-provider";
import { HeaderSection } from "@/components/header-section";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "sonic-ui - Sound-Reactive Component Library",
  description:
    "A sound-reactive component library for React — visually elegant, built on shadcn/ui, with motion and audio feedback.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SoundProvider>
            <div className="relative min-h-screen w-full flex flex-col">
              {/* Header */}
              <HeaderSection />

              {/* Main Content */}
              <main className="flex-1">{children}</main>

              {/* Footer */}
              <footer className="w-full border-t border-border/40 bg-background/50 backdrop-blur-sm">
                <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 py-8">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>Built with</span>
                      <span className="text-foreground font-medium">
                        shadcn/ui
                      </span>
                      <span>+</span>
                      <span className="text-foreground font-medium">
                        Framer Motion
                      </span>
                    </div>
                    <div className="flex items-center gap-6 text-sm text-muted-foreground">
                      <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-interactive"
                      >
                        GitHub
                      </a>
                      <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-interactive"
                      >
                        Twitter
                      </a>
                      <a
                        href="https://discord.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-interactive"
                      >
                        Discord
                      </a>
                    </div>
                  </div>
                </div>
              </footer>
            </div>
          </SoundProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
