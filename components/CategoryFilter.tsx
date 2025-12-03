'use client';

import { CategoryType } from '@/types';
import { cn } from '@/lib/utils';

interface CategoryFilterProps {
  categories: (CategoryType | 'All')[];
  activeCategory: CategoryType | 'All';
  onChange: (category: CategoryType | 'All') => void;
  categoryLabels?: Record<string, string>;
}

export function CategoryFilter({ 
  categories, 
  activeCategory, 
  onChange,
  categoryLabels = {}
}: CategoryFilterProps) {
  return (
    <nav aria-label="Category filter" className="flex flex-wrap gap-2 justify-center">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => onChange(category)}
          className={cn(
            'category-pill transition-transform duration-150 hover:scale-105 active:scale-95',
            activeCategory === category && 'active'
          )}
          aria-pressed={activeCategory === category}
        >
          {categoryLabels[category] || category}
        </button>
      ))}
    </nav>
  );
}
