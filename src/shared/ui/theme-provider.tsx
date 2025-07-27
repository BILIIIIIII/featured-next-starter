"use client";

import {
  ThemeProvider as NextThemesProvider,
  ThemeProviderProps,
  useTheme,
} from "next-themes";

function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

export { ThemeProvider, useTheme };
