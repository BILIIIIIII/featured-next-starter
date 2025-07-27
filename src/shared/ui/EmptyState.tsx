"use client";

import { IconRefresh } from "@intentui/icons";
import { Button } from "./button";

interface EmptyStateProps {
  icon: React.ReactNode;
  title: string;
  message: string;
  onRetry?: () => void;
}

export function EmptyState({ icon, title, message, onRetry }: EmptyStateProps) {
  return (
    <div className="flex flex-col justify-center items-center h-64 space-y-4 text-center">
      <div className="text-gray-400 text-6xl">{icon}</div>
      <div>
        <h2 className="text-xl font-semibold text-gray-700 mb-1">{title}</h2>
        <p className="text-gray-500 max-w-xs">{message}</p>
        {onRetry && (
          <Button onClick={onRetry} intent="outline" className="mt-6">
            <IconRefresh className="w-4 h-4 mr-2" />
            Refresh
          </Button>
        )}
      </div>
    </div>
  );
}
