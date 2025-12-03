'use client';

import { Languages } from 'lucide-react';
import { Language } from '@/lib/translations';
import { cn } from '@/lib/utils';

interface LanguageToggleProps {
  language: Language;
  onChange: (lang: Language) => void;
}

export function LanguageToggle({ language, onChange }: LanguageToggleProps) {
  return (
    <button
      type="button"
      onClick={() => onChange(language === 'en' ? 'tr' : 'en')}
      className={cn(
        'flex items-center justify-center gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg',
        'bg-white/5 border border-white/10',
        'hover:bg-white/10 hover:border-white/20',
        'transition-all duration-200 hover:scale-105 active:scale-95',
        'text-xs sm:text-sm font-medium text-zinc-400 hover:text-white',
        'min-w-[40px] sm:min-w-0'
      )}
      title={language === 'en' ? 'Türkçe\'ye çevir' : 'Switch to English'}
    >
      <Languages className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
      <span className="uppercase">{language === 'en' ? 'TR' : 'EN'}</span>
    </button>
  );
}
