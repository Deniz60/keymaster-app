'use client';

import { Code2, Table, Figma, Chrome, MessageSquare, FileText, Presentation, Terminal, BarChart3, Code, Gamepad2, Box, Image } from 'lucide-react';
import { AppType } from '@/types';
import { appInfo } from '@/data/shortcuts';
import { cn } from '@/lib/utils';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Code2,
  Table,
  Figma,
  Chrome,
  MessageSquare,
  FileText,
  Presentation,
  Terminal,
  BarChart3,
  Code,
  Gamepad2,
  Box,
  Image,
};

interface AppSelectorProps {
  apps: AppType[];
  activeApp: AppType;
  onChange: (app: AppType) => void;
}

export function AppSelector({ apps, activeApp, onChange }: AppSelectorProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
      {apps.map((appId) => {
        const app = appInfo[appId];
        if (!app) return null;
        
        const IconComponent = iconMap[app.icon] || Code2;
        const isActive = activeApp === appId;

        return (
          <button
            key={appId}
            type="button"
            onClick={() => onChange(appId)}
            className={cn(
              'relative flex flex-col items-center gap-1.5 sm:gap-2 px-3 sm:px-6 py-2.5 sm:py-4 rounded-xl sm:rounded-2xl',
              'border transition-all duration-200',
              isActive
                ? 'bg-white/10 border-white/30 shadow-lg scale-105'
                : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 hover:scale-102 active:scale-98'
            )}
            style={{
              boxShadow: isActive
                ? `0 0 20px ${app.color}25`
                : 'none',
            }}
          >
            {/* Icon */}
            <div
              className={cn(
                'relative z-10 p-2 sm:p-3 rounded-lg sm:rounded-xl transition-all duration-200',
                isActive ? 'bg-white/20' : 'bg-white/10'
              )}
              style={{
                backgroundColor: isActive ? `${app.color}30` : undefined,
              }}
            >
              <IconComponent
                className={cn(
                  'w-5 h-5 sm:w-8 sm:h-8 transition-colors',
                  isActive ? 'text-white' : 'text-zinc-400'
                )}
              />
            </div>

            {/* App Name */}
            <span
              className={cn(
                'relative z-10 text-xs sm:text-sm font-medium transition-colors',
                isActive ? 'text-white' : 'text-zinc-400'
              )}
            >
              {app.name}
            </span>

            {/* Active indicator */}
            {isActive && (
              <div
                className="absolute -bottom-0.5 sm:-bottom-1 left-1/2 -translate-x-1/2 w-6 sm:w-8 h-0.5 sm:h-1 rounded-full"
                style={{ backgroundColor: app.color }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
}
