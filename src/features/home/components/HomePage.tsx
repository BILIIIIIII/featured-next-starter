"use client";

import Link from "next/link";
import { Button } from "@/shared/ui/button";

export function HomePage() {
  return (
    <div className="container  mx-auto flex flex-col items-center justify-center text-center py-20">
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
        Welcome to the Starter Kit
      </h1>
      <p className="mt-4 max-w-xl text-lg text-gray-600 dark:text-gray-300">
        This is a clean foundation for your next project, built with Next.js and
        a feature-based architecture.
      </p>
      <div className="mt-8 flex gap-4">
        <Link href="/property">
          <Button>View Properties Example</Button>
        </Link>
        <a
          href="https://github.com/BILIIIIIII/featured-next-starter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button intent="outline">View on GitHub</Button>
        </a>
      </div>
      <p className="mt-12 text-gray-500">
        Get started by editing{" "}
        <code className="font-mono bg-gray-100 dark:bg-gray-800 p-1 rounded">
          src/app/page.tsx
        </code>
      </p>
    </div>
  );
}
