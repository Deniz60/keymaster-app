'use client';

import { Search, Command } from 'lucide-react';
import { useRef, useEffect } from 'react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  resultCount: number;
  totalCount: number;
  placeholder?: string;
  ofText?: string;
}

export function SearchBar({ 
  value, 
  onChange, 
  resultCount, 
  totalCount,
  placeholder = "Search shortcuts by action, category, or key...",
  ofText = "of"
}: SearchBarProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  // Ctrl+K / Cmd+K keyboard shortcut to focus search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
      }
      // Escape to blur
      if (e.key === 'Escape' && document.activeElement === inputRef.current) {
        inputRef.current?.blur();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="relative group">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
      <input
        ref={inputRef}
        type="search"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="search-input pr-24"
        aria-label="Search keyboard shortcuts"
      />
      <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-3">
        <div className="hidden sm:flex items-center gap-1 text-xs text-zinc-600 opacity-0 group-focus-within:opacity-100 transition-opacity">
          <kbd className="px-1.5 py-0.5 rounded bg-zinc-800 border border-zinc-700 text-zinc-400 text-[10px]">
            <Command className="w-2.5 h-2.5 inline" />
          </kbd>
          <kbd className="px-1.5 py-0.5 rounded bg-zinc-800 border border-zinc-700 text-zinc-400 text-[10px]">
            K
          </kbd>
        </div>
        <div className="text-xs text-zinc-500">
          {resultCount} {ofText} {totalCount}
        </div>
      </div>
    </div>
  );
}
