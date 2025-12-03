'use client';

import { useState, useEffect, useCallback } from 'react';

const FAVORITES_KEY = 'keymaster-favorites';

export function useFavorites() {
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [isLoaded, setIsLoaded] = useState(false);

  // Load favorites from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(FAVORITES_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        setFavorites(new Set(parsed));
      }
    } catch (error) {
      console.error('Error loading favorites:', error);
    }
    setIsLoaded(true);
  }, []);

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem(FAVORITES_KEY, JSON.stringify(Array.from(favorites)));
      } catch (error) {
        console.error('Error saving favorites:', error);
      }
    }
  }, [favorites, isLoaded]);

  const toggleFavorite = useCallback((shortcutId: string) => {
    setFavorites((prev) => {
      const next = new Set(prev);
      if (next.has(shortcutId)) {
        next.delete(shortcutId);
      } else {
        next.add(shortcutId);
      }
      return next;
    });
  }, []);

  const isFavorite = useCallback(
    (shortcutId: string) => {
      return favorites.has(shortcutId);
    },
    [favorites]
  );

  const clearFavorites = useCallback(() => {
    setFavorites(new Set());
  }, []);

  const getFavoritesCount = useCallback(() => {
    return favorites.size;
  }, [favorites]);

  return {
    favorites,
    toggleFavorite,
    isFavorite,
    clearFavorites,
    getFavoritesCount,
    isLoaded,
  };
}
