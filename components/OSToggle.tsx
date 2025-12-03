'use client';

import { Monitor, Apple } from 'lucide-react';
import { OSType } from '@/types';
import { cn } from '@/lib/utils';

interface OSToggleProps {
  os: OSType;
  onChange: (os: OSType) => void;
}

export function OSToggle({ os, onChange }: OSToggleProps) {
  return (
    <div className="os-toggle" role="radiogroup" aria-label="Operating System">
      <div
        className={cn(
          "absolute inset-y-0.5 sm:inset-y-1 rounded-full bg-white/20 transition-all duration-200",
          os === 'win' ? 'left-0.5 sm:left-1 w-[calc(50%-2px)] sm:w-[calc(50%-4px)]' : 'left-1/2 w-[calc(50%-2px)] sm:w-[calc(50%-4px)]'
        )}
      />
      <button
        type="button"
        onClick={() => onChange('win')}
        className={cn('os-toggle-option', os === 'win' && 'active')}
        role="radio"
        aria-checked={os === 'win'}
      >
        <Monitor className="w-4 h-4 sm:w-4 sm:h-4" />
      </button>
      <button
        type="button"
        onClick={() => onChange('mac')}
        className={cn('os-toggle-option', os === 'mac' && 'active')}
        role="radio"
        aria-checked={os === 'mac'}
      >
        <Apple className="w-4 h-4 sm:w-4 sm:h-4" />
      </button>
    </div>
  );
}
