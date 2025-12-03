'use client';

import { useState, useMemo, useCallback } from 'react';
import { Shortcut, OSType, CategoryType, AppType, Language, isLocalizedKeys } from '@/types';
import { shortcuts, categories, apps } from '@/data/shortcuts';

interface UseShortcutsReturn {
  filteredShortcuts: Shortcut[];
  search: string;
  setSearch: (search: string) => void;
  os: OSType;
  setOs: (os: OSType) => void;
  category: CategoryType | 'All';
  setCategory: (category: CategoryType | 'All') => void;
  categories: (CategoryType | 'All')[];
  app: AppType;
  setApp: (app: AppType) => void;
  availableApps: AppType[];
  totalCount: number;
  filteredCount: number;
  language: Language;
  setLanguage: (language: Language) => void;
}

export function useShortcuts(): UseShortcutsReturn {
  const [search, setSearch] = useState('');
  const [os, setOs] = useState<OSType>('win');
  const [category, setCategory] = useState<CategoryType | 'All'>('All');
  const [app, setApp] = useState<AppType>('vscode');
  const [language, setLanguage] = useState<Language>('en');

  // Get categories for the selected app
  const appCategories = useMemo(() => {
    const appShortcuts = shortcuts.filter((s: Shortcut) => s.app === app);
    const uniqueCategories = Array.from(new Set(appShortcuts.map((s: Shortcut) => s.category)));
    return ['All', ...uniqueCategories] as (CategoryType | 'All')[];
  }, [app]);

  const filteredShortcuts = useMemo(() => {
    return shortcuts.filter((shortcut: Shortcut) => {
      // Filter by app
      if (shortcut.app !== app) {
        return false;
      }

      // Filter by category
      if (category !== 'All' && shortcut.category !== category) {
        return false;
      }

      // Filter by search (search in both languages)
      if (search) {
        const searchLower = search.toLowerCase();
        const matchesActionEn = shortcut.action.en.toLowerCase().includes(searchLower);
        const matchesActionTr = shortcut.action.tr.toLowerCase().includes(searchLower);
        const matchesDescriptionEn = shortcut.description.en.toLowerCase().includes(searchLower);
        const matchesDescriptionTr = shortcut.description.tr.toLowerCase().includes(searchLower);
        const matchesCategory = shortcut.category.toLowerCase().includes(searchLower);
        
        // Handle both localized and non-localized keys
        const keys = isLocalizedKeys(shortcut.keys) 
          ? shortcut.keys[language][os] 
          : shortcut.keys[os];
        const matchesKeys = keys.some((key: string) =>
          key.toLowerCase().includes(searchLower)
        );

        if (!matchesActionEn && !matchesActionTr && !matchesDescriptionEn && !matchesDescriptionTr && !matchesCategory && !matchesKeys) {
          return false;
        }
      }

      return true;
    });
  }, [search, category, os, app, language]);

  // Count of shortcuts for current app
  const appShortcutsCount = useMemo(() => {
    return shortcuts.filter((s: Shortcut) => s.app === app).length;
  }, [app]);

  const handleSetSearch = useCallback((newSearch: string) => {
    setSearch(newSearch);
  }, []);

  const handleSetOs = useCallback((newOs: OSType) => {
    setOs(newOs);
  }, []);

  const handleSetCategory = useCallback((newCategory: CategoryType | 'All') => {
    setCategory(newCategory);
  }, []);

  const handleSetApp = useCallback((newApp: AppType) => {
    setApp(newApp);
    setCategory('All'); // Reset category when changing app
    setSearch(''); // Reset search when changing app
  }, []);

  const handleSetLanguage = useCallback((newLanguage: Language) => {
    setLanguage(newLanguage);
  }, []);

  return {
    filteredShortcuts,
    search,
    setSearch: handleSetSearch,
    os,
    setOs: handleSetOs,
    category,
    setCategory: handleSetCategory,
    categories: appCategories,
    app,
    setApp: handleSetApp,
    availableApps: apps as AppType[],
    totalCount: appShortcutsCount,
    filteredCount: filteredShortcuts.length,
    language,
    setLanguage: handleSetLanguage,
  };
}
