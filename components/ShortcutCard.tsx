'use client';

import { memo, useState, useCallback } from 'react';
import { Copy, Check, Heart } from 'lucide-react';
import { Shortcut, OSType, Language, isLocalizedKeys } from '@/types';
import { copyToClipboard, formatKeysForClipboard, cn } from '@/lib/utils';

interface ShortcutCardProps {
  shortcut: Shortcut;
  os: OSType;
  index: number;
  onCopy: () => void;
  language: Language;
  isFavorite?: boolean;
  onToggleFavorite?: (id: string) => void;
}

export const ShortcutCard = memo(function ShortcutCard({ shortcut, os, index, onCopy, language, isFavorite = false, onToggleFavorite }: ShortcutCardProps) {
  const [isCopied, setIsCopied] = useState(false);
  
  // Get keys based on whether they're localized or not
  const keys = isLocalizedKeys(shortcut.keys) 
    ? shortcut.keys[language][os] 
    : shortcut.keys[os];
  
  const action = shortcut.action[language];
  const description = shortcut.description[language];

  const handleCopy = useCallback(async () => {
    const text = formatKeysForClipboard(keys);
    const success = await copyToClipboard(text);
    if (success) {
      setIsCopied(true);
      onCopy();
      setTimeout(() => setIsCopied(false), 2000);
    }
  }, [keys, onCopy]);

  return (
    <article
      onClick={handleCopy}
      className={cn(
        'glass-card cursor-pointer p-4 sm:p-5 group',
        'focus:outline-none focus:ring-2 focus:ring-white/20',
        'transition-transform duration-150 hover:scale-[1.01] active:scale-[0.99]'
      )}
      tabIndex={0}
      role="button"
      aria-label={`Copy ${action} shortcut: ${keys.join(' + ')}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleCopy();
        }
      }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1 min-w-0">
          <h3 className="text-sm sm:text-base font-semibold text-white mb-1 group-hover:text-white/90 truncate">
            {action}
          </h3>
          <span className="inline-block px-2 py-0.5 text-xs font-medium rounded-full bg-white/10 text-zinc-400">
            {shortcut.category}
          </span>
        </div>
        <div className="flex items-center gap-2 ml-2">
          {onToggleFavorite && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggleFavorite(shortcut.id);
              }}
              className="text-zinc-400 hover:text-red-400 transition-colors p-1"
              aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
            >
              <Heart
                className={cn(
                  'w-4 h-4 transition-all',
                  isFavorite && 'fill-red-500 text-red-500'
                )}
              />
            </button>
          )}
          <div className={cn(
            'transition-opacity',
            isCopied ? 'opacity-100' : 'opacity-50 group-hover:opacity-80'
          )}>
            {isCopied ? (
              <Check className="w-4 h-4 text-emerald-400" />
            ) : (
              <Copy className="w-4 h-4 text-zinc-400" />
            )}
          </div>
        </div>
      </div>

      {/* Key Combination */}
      <div className="flex flex-wrap gap-1.5 mb-3">
        {keys.map((key, keyIndex) => (
          <kbd key={keyIndex} className="kbd-key text-xs sm:text-sm">
            {key}
          </kbd>
        ))}
      </div>

      {/* Description */}
      <p className="text-xs sm:text-sm text-zinc-400 line-clamp-2">{description}</p>
    </article>
  );
});
