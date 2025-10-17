"use client";

import { useEffect, useState } from "react";

interface CodeBlockProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
}

export function CodeBlock({
  code,
  language = "tsx",
  showLineNumbers = false,
}: CodeBlockProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="relative bg-muted/50">
        <div className="p-6">
          <pre className="text-sm font-mono overflow-x-auto">
            <code>{code}</code>
          </pre>
        </div>
      </div>
    );
  }

  // Split code into lines for rendering
  const lines = code.split("\n");

  return (
    <div className="relative bg-muted/50">
      {/* Language Badge */}
      <div className="absolute top-3 right-3 px-2 py-1 text-[10px] font-medium uppercase tracking-wider bg-background/50 backdrop-blur-sm rounded border border-border/50 text-muted-foreground">
        {language}
      </div>

      {/* Code Content */}
      <div className="p-6 overflow-x-auto">
        <pre className="text-sm font-mono">
          <code>
            {showLineNumbers ? (
              <table className="w-full border-collapse">
                <tbody>
                  {lines.map((line, i) => (
                    <tr key={i}>
                      <td
                        className="pr-4 text-right text-muted-foreground/50 select-none"
                        style={{ width: "1%" }}
                      >
                        {i + 1}
                      </td>
                      <td>
                        <span className="text-foreground">{line}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <span className="text-foreground">{code}</span>
            )}
          </code>
        </pre>
      </div>
    </div>
  );
}
