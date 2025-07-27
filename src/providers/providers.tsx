"use client";

import { Toast } from "@/shared/ui/toast";
import { useRouter } from "next/navigation";
import { RouterProvider } from "react-aria-components";
import ReactQueryProvider from "./reactQuery-provider";
import { ThemeProvider } from "@/providers/theme-provider";

declare module "react-aria-components" {
  interface RouterConfig {
    routerOptions: NonNullable<
      Parameters<ReturnType<typeof useRouter>["push"]>[1]
    >;
  }
}

export function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  return (
    <RouterProvider navigate={router.push}>
      <ReactQueryProvider>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Toast />
        </ThemeProvider>
      </ReactQueryProvider>
    </RouterProvider>
  );
}
