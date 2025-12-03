'use client';

import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ToastProps {
  isVisible: boolean;
  message?: string;
}

export function Toast({ isVisible, message = 'Copied to clipboard!' }: ToastProps) {
  return (
    <div
      className={cn(
        'toast transition-all duration-200',
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95 pointer-events-none'
      )}
      role="alert"
      aria-live="polite"
    >
      <span className="flex items-center gap-2">
        <Check className="w-4 h-4" />
        {message}
      </span>
    </div>
  );
}
