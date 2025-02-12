"use client";

import { MoonStarIcon, SunIcon } from "lucide-react";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { HiDesktopComputer } from "react-icons/hi";
import { cn } from "~/lib/utils";
import { Button } from "../ui/button";

type Theme = "light" | "dark" | "system";

export default function ThemeToggler() {
  const [_, setTheme] = useState<Theme>("system");
  const [cookies, setCookies] = useCookies(["theme"]);

  function applyTheme(newTheme: Theme) {
    if (newTheme === "system") {
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (isDark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      document.documentElement.classList.add("system");
    } else {
      if (newTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }

  function handleThemeChange(newTheme: Theme) {
    setTheme(newTheme);
    setCookies("theme", newTheme);
    applyTheme(newTheme);

    if (newTheme !== "system") {
      document.documentElement.classList.remove("system");
    }
  }

  return (
    <div className="flex w-max items-center gap-1 rounded-full border p-1">
      <Button
        size="icon"
        variant="ghost"
        className={cn(
          "[.dark_&,.system_&]:bg-transparent size-8 rounded-full",
          {
            "bg-secondary dark:bg-transparent": cookies.theme == "light",
          },
        )}
        onClick={() => handleThemeChange("light")}
      >
        <SunIcon />
      </Button>

      <Button
        size="icon"
        variant="ghost"
        className="size-8 rounded-full [.system_&]:bg-secondary"
        onClick={() => handleThemeChange("system")}
      >
        <HiDesktopComputer />
      </Button>

      <Button
        size="icon"
        variant="ghost"
        className="size-8 rounded-full dark:bg-secondary"
        onClick={() => handleThemeChange("dark")}
      >
        <MoonStarIcon />
      </Button>
    </div>
  );
}
