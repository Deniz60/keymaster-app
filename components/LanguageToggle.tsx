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
        'flex items-center justify-center px-2 py-1 sm:px-3 sm:py-2 rounded-lg',
        'bg-white/5 border border-white/10',
        'hover:bg-white/10 hover:border-white/20',
        'transition-all duration-200',
        'text-xs sm:text-sm font-medium text-zinc-400 hover:text-white'
      )}
      title={language === 'en' ? 'Türkçe\'ye çevir' : 'Switch to English'}
    >
      <span className="uppercase font-semibold">{language === 'en' ? 'TR' : 'EN'}</span>
    </button>
  );
}
