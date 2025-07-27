"use client";

import { IconCircleExclamation, IconRefresh } from "@intentui/icons";
import { Button } from "./button"; // Asumsi button ada di shared/ui

interface ErrorStateProps {
  title: string;
  message: string;
  onRetry: () => void;
}

export function ErrorState({ title, message, onRetry }: ErrorStateProps) {
  return (
    <div className="flex flex-col justify-center items-center min-h-64 px-4 text-center">
      <div className="bg-red-50 border border-red-200 rounded-lg p-8 max-w-md w-full">
        <div className="flex justify-center mb-4">
          <div className="bg-red-100 rounded-full p-3">
            <IconCircleExclamation className="w-8 h-8 text-red-600" />
          </div>
        </div>
        <h2 className="text-xl font-semibold text-red-800 mb-2">{title}</h2>
        <p className="text-red-700 mb-6 text-sm">{message}</p>
        <Button onClick={onRetry} className="w-full sm:w-auto" size="sm">
          <IconRefresh className="w-4 h-4 mr-2" />
          Try Again
        </Button>
      </div>
    </div>
  );
}
