"use client";

import { useTheme } from "next-themes";
import { Button } from "@/shared/ui/button";
import { IconMoon, IconSun } from "@intentui/icons";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Button
      intent="outline"
      size="sm"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? <IconMoon /> : <IconSun />}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
