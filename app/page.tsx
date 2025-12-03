'use client';

import { useCallback, useEffect, useState, useMemo } from 'react';
import { Keyboard, Github, Command, Heart, Printer, ChevronDown } from 'lucide-react';
import { ShortcutCard, SearchBar, OSToggle, CategoryFilter, Toast, AppSelector, LanguageToggle, Footer } from '@/components';
import { PrintModal } from '@/components/PrintModal';
import { useShortcuts } from '@/hooks/useShortcuts';
import { useFavorites } from '@/hooks/useFavorites';
import { appInfo } from '@/data/shortcuts';
import { translations, seoData } from '@/lib/translations';

export default function Home() {
  const {
    filteredShortcuts,
    search,
    setSearch,
    os,
    setOs,
    category,
    setCategory,
    categories,
    app,
    setApp,
    availableApps,
    totalCount,
    filteredCount,
    language,
    setLanguage,
  } = useShortcuts();

  const [showToast, setShowToast] = useState(false);
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [showPrintModal, setShowPrintModal] = useState(false);
  const [visibleCount, setVisibleCount] = useState(12); // Initial cards to show - reduced for mobile perf

  const { favorites, toggleFavorite, isFavorite, getFavoritesCount, isLoaded } = useFavorites();

  const t = translations[language];

  // Reset visible count when app or category changes
  useEffect(() => {
    setVisibleCount(12);
  }, [app, category, search]);

  // Dynamic SEO - Update title and meta description when app or language changes
  useEffect(() => {
    const seo = seoData[app]?.[language] || seoData.vscode[language];
    
    // Update document title
    document.title = seo.title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', seo.description);
    }
    
    // Update Open Graph title
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', seo.title);
    }
    
    // Update Open Graph description
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', seo.description);
    }
    
    // Update Twitter title
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', seo.title);
    }
    
    // Update Twitter description
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('content', seo.description);
    }
  }, [app, language]);

  const handleCopy = useCallback(() => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  }, []);

  const currentAppInfo = appInfo[app];

  // Filter shortcuts to show only favorites if enabled
  const displayedShortcuts = showFavoritesOnly
    ? filteredShortcuts.filter((shortcut) => isFavorite(shortcut.id))
    : filteredShortcuts;

  // Paginated shortcuts for better performance
  const visibleShortcuts = useMemo(() => {
    return displayedShortcuts.slice(0, visibleCount);
  }, [displayedShortcuts, visibleCount]);

  const hasMoreShortcuts = displayedShortcuts.length > visibleCount;
  const remainingCount = displayedShortcuts.length - visibleCount;

  const handleLoadMore = useCallback(() => {
    setVisibleCount((prev) => prev + 24);
  }, []);

  // Category labels for translation
  const categoryLabels: Record<string, string> = {
    All: t.All,
    General: t.General,
    Editing: t.Editing,
    Navigation: t.Navigation,
    Terminal: t.Terminal,
    Search: t.Search,
    Debug: t.Debug,
    View: t.View,
    File: t.File,
    Formatting: t.Formatting,
    Selection: t.Selection,
    Formulas: t.Formulas,
    Text: t.Text,
    Data: t.Data,
    Windows: t.Windows,
    System: t.System,
    Output: t.Output,
    PowerShell: t.PowerShell,
    Git: t.Git,
    'Data View': t['Data View'],
    Analysis: t.Analysis,
    Transform: t.Transform,
    'Variable View': t['Variable View'],
    Build: t.Build,
    Refactor: t.Refactor,
    Test: t.Test,
    Play: t.Play,
    GameObject: t.GameObject,
    Blueprint: t.Blueprint,
  };

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          {/* Desktop Header - tek satır */}
          <div className="hidden sm:flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <img 
                src="/favicon.png" 
                alt="KeyMaster Logo" 
                className="w-10 h-10 rounded-lg"
              />
              <h1 className="text-xl font-bold text-white">
                Key<span className="text-blue-400">Master</span>
              </h1>
            </div>

            {/* Right side controls */}
            <div className="flex items-center gap-3">
              <LanguageToggle language={language} onChange={setLanguage} />
              <OSToggle os={os} onChange={setOs} />
              <button
                onClick={() => setShowPrintModal(true)}
                className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label={t.print}
                title={t.print}
              >
                <Printer className="w-5 h-5" />
              </button>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors hidden md:flex"
                aria-label="View on GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Mobile Header */}
          <div className="sm:hidden py-3">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div className="flex items-center gap-2">
                <img 
                  src="/favicon.png" 
                  alt="KeyMaster" 
                  className="w-8 h-8 rounded-lg"
                />
                <span className="text-lg font-bold text-white">
                  Key<span className="text-blue-400">Master</span>
                </span>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-2">
                <LanguageToggle language={language} onChange={setLanguage} />
                <OSToggle os={os} onChange={setOs} />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <section className="text-center mb-8 sm:mb-12">
          <div>
            {/* Dynamic App Title */}
            <div className="mb-4">
              <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-white/10 text-sm font-medium text-blue-400">
                {currentAppInfo?.name || app}
              </span>
            </div>
            
            <div className="flex items-center justify-center gap-2 mb-4">
              <Command className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gradient">
                {seoData[app]?.[language]?.title.split(' | ')[0] || t.heroTitle}
              </h2>
            </div>
            <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto px-4">
              {seoData[app]?.[language]?.description || t.heroDescription}
            </p>
          </div>
        </section>

        {/* App Selector */}
        <section className="mb-8 sm:mb-10">
          <div>
            <h3 className="text-center text-xs sm:text-sm font-medium text-zinc-500 mb-3 sm:mb-4 uppercase tracking-wider">
              {t.selectApplication}
            </h3>
            <AppSelector
              apps={availableApps}
              activeApp={app}
              onChange={setApp}
            />
          </div>
        </section>

        {/* Search and Filters */}
        <section className="mb-6 sm:mb-8 space-y-4 sm:space-y-6">
          <div className="max-w-2xl mx-auto">
            <SearchBar
              value={search}
              onChange={setSearch}
              resultCount={filteredCount}
              totalCount={totalCount}
              placeholder={t.searchPlaceholder}
              ofText={t.of}
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <CategoryFilter
              categories={categories}
              activeCategory={category}
              onChange={setCategory}
              categoryLabels={categoryLabels}
            />
            
            {/* Favorites Toggle */}
            {isLoaded && (
              <button
                onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
                className={`
                  flex items-center gap-2 px-4 py-2 rounded-full border transition-all
                  ${showFavoritesOnly 
                    ? 'bg-red-500/20 border-red-500/50 text-red-400' 
                    : 'bg-white/5 border-white/10 text-zinc-400 hover:text-white hover:bg-white/10'
                  }
                `}
              >
                <Heart className={`w-4 h-4 ${showFavoritesOnly ? 'fill-red-500' : ''}`} />
                <span className="text-sm font-medium">
                  {t.favorites || 'Favorites'} ({isLoaded ? getFavoritesCount() : 0})
                </span>
              </button>
            )}
          </div>
        </section>

        {/* Shortcuts Grid */}
        <section aria-label="Keyboard shortcuts">
          {visibleShortcuts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {visibleShortcuts.map((shortcut, index) => (
                  <ShortcutCard
                    key={shortcut.id}
                    shortcut={shortcut}
                    os={os}
                    index={index}
                    onCopy={handleCopy}
                    language={language}
                    isFavorite={isLoaded ? isFavorite(shortcut.id) : false}
                    onToggleFavorite={toggleFavorite}
                  />
                ))}
              </div>
              
              {/* Load More Button */}
              {hasMoreShortcuts && (
                <div className="flex justify-center mt-8">
                  <button
                    onClick={handleLoadMore}
                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-zinc-300 hover:bg-white/10 hover:text-white transition-all"
                  >
                    <ChevronDown className="w-5 h-5" />
                    <span>
                      {language === 'tr' 
                        ? `${remainingCount} kısayol daha göster` 
                        : `Show ${remainingCount} more shortcuts`}
                    </span>
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-16">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 mb-4">
                <Keyboard className="w-8 h-8 text-zinc-500" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {t.noShortcutsFound}
              </h3>
              <p className="text-zinc-400">
                {t.tryAdjusting}
              </p>
            </div>
          )}
        </section>
      </main>

      {/* Footer */}
      <Footer 
        language={language} 
        appName={currentAppInfo?.name || app} 
        shortcutCount={totalCount} 
      />

      {/* Toast Notification */}
      <Toast isVisible={showToast} message={t.copiedToClipboard} />

      {/* Print Modal */}
      {showPrintModal && (
        <PrintModal
          isOpen={showPrintModal}
          onClose={() => setShowPrintModal(false)}
          shortcuts={displayedShortcuts}
          os={os}
          language={language}
          appName={currentAppInfo?.name || app}
        />
      )}
    </>
  );
}
