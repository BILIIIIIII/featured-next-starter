"use client";

import { Loader } from "./loader";
export function LoadingState() {
  return (
    <div className="flex flex-col justify-center items-center py-24 space-y-4">
      <Loader variant="spin" size="lg" intent="primary" />
      <p className="text-gray-600 dark:text-gray-300">Loading...</p>
    </div>
  );
}
