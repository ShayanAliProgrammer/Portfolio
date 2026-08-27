"use client";

import { Laptop, Moon, Sun } from "lucide-react";
import { useState } from "react";

import { THEME_COOKIE, THEME_COOKIE_MAX_AGE, type Theme } from "@/lib/theme";

type ThemeToggleProps = {
  initialTheme: Theme;
};

const themeOptions: Array<{ value: Theme; label: string }> = [
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
  { value: "system", label: "System" },
];

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.remove("light", "dark", "system");
  root.classList.add(theme);
}

function ThemeIcon({ theme }: { theme: Theme }) {
  if (theme === "light") return <Sun size={14} aria-hidden="true" />;
  if (theme === "dark") return <Moon size={14} aria-hidden="true" />;
  return <Laptop size={14} aria-hidden="true" />;
}

export function ThemeToggle({ initialTheme }: ThemeToggleProps) {
  const [theme, setTheme] = useState<Theme>(initialTheme);

  function selectTheme(nextTheme: Theme) {
    setTheme(nextTheme);
    // Cookie persistence is intentional: the server reads this value in RootLayout.
    // eslint-disable-next-line react-hooks/immutability
    document.cookie = `${THEME_COOKIE}=${nextTheme}; Path=/; Max-Age=${THEME_COOKIE_MAX_AGE}; SameSite=Lax`;
    applyTheme(nextTheme);
  }

  return (
    <div
      className="border-line bg-surface/90 inline-flex items-center gap-0.5 rounded-full border p-1"
      role="group"
      aria-label="Color theme"
    >
      {themeOptions.map((option) => (
        <button
          key={option.value}
          type="button"
          onClick={() => selectTheme(option.value)}
          aria-label={`Use ${option.label.toLowerCase()} theme`}
          aria-pressed={theme === option.value}
          className={`inline-flex size-8 items-center justify-center rounded-full transition ${
            theme === option.value
              ? "bg-accent text-accent-foreground"
              : "text-muted hover:bg-surface-strong hover:text-foreground"
          }`}
        >
          <ThemeIcon theme={option.value} />
          <span className="sr-only">{option.label}</span>
        </button>
      ))}
    </div>
  );
}
