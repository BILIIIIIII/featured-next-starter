"use client";

import { ThemeSwitcher } from "@/features/theme/components/ThemeSwitcher";
import { useMediaQuery } from "@/shared/hooks/use-media-query";

import { IconBarsThree, IconX } from "@intentui/icons";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/property", label: "Properties" },
  { href: "/about", label: "About" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    if (isDesktop) {
      setIsMenuOpen(false);
    }
  }, [isDesktop]);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-lg font-bold">
          Next Starter Kit
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeSwitcher />

          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-md md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <IconX /> : <IconBarsThree />}
            <span className="sr-only">Toggle menu</span>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full border-b bg-background p-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
