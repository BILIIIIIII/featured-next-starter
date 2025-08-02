import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {
  LiquidGlassContainer,
  LiquidGlassPresets,
} from "@/shared/ui/LiquidGlass";
import { Providers } from "@/providers/providers";
import { Header } from "@/shared/widgets/Header";
import { Footer } from "@/shared/widgets/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next.js Feature-Based Starter Kit",
  description: "A clean starter kit with a feature-based architecture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen bg-white dark:bg-black`}
      >
        <Providers>
          <LiquidGlassContainer
            config={LiquidGlassPresets.header}
            position="sticky"
            positionProps={{ top: "2rem" }}
            className="mx-auto"
          >
            <Header />
          </LiquidGlassContainer>
          <main className="flex-grow">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
