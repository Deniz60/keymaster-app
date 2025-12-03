export type Language = 'en' | 'tr';

// SEO titles and descriptions for each app
export const seoData: Record<string, Record<Language, { title: string; description: string }>> = {
  vscode: {
    en: {
      title: 'KeyMaster',
      description: 'Complete VS Code keyboard shortcuts cheatsheet. Boost your coding productivity with Windows and macOS key bindings.',
    },
    tr: {
      title: 'KeyMaster',
      description: 'Kapsamlı VS Code klavye kısayolları rehberi. Windows ve macOS tuş kombinasyonlarıyla kodlama verimliliğinizi artırın.',
    },
  },
  excel: {
    en: {
      title: 'KeyMaster',
      description: 'Master Excel keyboard shortcuts. Complete cheatsheet for Windows and macOS to speed up your spreadsheet work.',
    },
    tr: {
      title: 'KeyMaster',
      description: 'Excel klavye kısayollarında uzmanlaşın. Windows ve macOS için kapsamlı rehber ile tablo işlemlerinizi hızlandırın.',
    },
  },
  word: {
    en: {
      title: 'KeyMaster',
      description: 'Master Word keyboard shortcuts. Complete cheatsheet for Windows and macOS to speed up your document work.',
    },
    tr: {
      title: 'KeyMaster',
      description: 'Word klavye kısayollarında uzmanlaşın. Windows ve macOS için kapsamlı rehber ile belge işlemlerinizi hızlandırın.',
    },
  },
  powerpoint: {
    en: {
      title: 'KeyMaster',
      description: 'Master PowerPoint keyboard shortcuts. Complete cheatsheet for Windows and macOS to create presentations faster.',
    },
    tr: {
      title: 'KeyMaster',
      description: 'PowerPoint klavye kısayollarında uzmanlaşın. Windows ve macOS için kapsamlı rehber ile sunumlarınızı hızlı oluşturun.',
    },
  },
  terminal: {
    en: {
      title: 'KeyMaster',
      description: 'Master command line with essential Terminal and CMD commands. PowerShell, Bash, and Git commands for Windows and macOS.',
    },
    tr: {
      title: 'KeyMaster',
      description: 'Temel Terminal ve CMD komutlarıyla komut satırında uzmanlaşın. Windows ve macOS için PowerShell, Bash ve Git komutları.',
    },
  },
  spss: {
    en: {
      title: 'KeyMaster',
      description: 'Master SPSS keyboard shortcuts for statistical analysis. Complete cheatsheet to speed up your data analysis workflow.',
    },
    tr: {
      title: 'KeyMaster',
      description: 'İstatistiksel analiz için SPSS klavye kısayollarında uzmanlaşın. Veri analizi iş akışınızı hızlandırın.',
    },
  },
  visualstudio: {
    en: {
      title: 'KeyMaster',
      description: 'Master Visual Studio keyboard shortcuts. Complete IDE cheatsheet for faster .NET and C++ development.',
    },
    tr: {
      title: 'KeyMaster',
      description: 'Visual Studio klavye kısayollarında uzmanlaşın. Daha hızlı .NET ve C++ geliştirme için kapsamlı IDE rehberi.',
    },
  },
  unity: {
    en: {
      title: 'KeyMaster',
      description: 'Master Unity Editor keyboard shortcuts. Speed up your game development workflow with essential hotkeys.',
    },
    tr: {
      title: 'KeyMaster',
      description: 'Unity Editor klavye kısayollarında uzmanlaşın. Temel kısayollarla oyun geliştirme iş akışınızı hızlandırın.',
    },
  },
  unreal: {
    en: {
      title: 'KeyMaster',
      description: 'Master Unreal Engine keyboard shortcuts. Essential hotkeys for viewport, blueprint, and level editing.',
    },
    tr: {
      title: 'KeyMaster',
      description: 'Unreal Engine klavye kısayollarında uzmanlaşın. Görünüm, blueprint ve seviye düzenleme için temel kısayollar.',
    },
  },
  figma: {
    en: {
      title: 'KeyMaster',
      description: 'Essential Figma keyboard shortcuts for designers. Speed up your design workflow with this comprehensive guide.',
    },
    tr: {
      title: 'KeyMaster',
      description: 'Tasarımcılar için temel Figma klavye kısayolları. Bu kapsamlı rehber ile tasarım iş akışınızı hızlandırın.',
    },
  },
  chrome: {
    en: {
      title: 'KeyMaster',
      description: 'Navigate Chrome like a pro with these keyboard shortcuts. Essential shortcuts for faster browsing.',
    },
    tr: {
      title: 'KeyMaster',
      description: 'Bu klavye kısayollarıyla Chrome\'da profesyonel gibi gezinin. Daha hızlı tarama için temel kısayollar.',
    },
  },
  photoshop: {
    en: {
      title: 'KeyMaster',
      description: 'Master Adobe Photoshop with essential keyboard shortcuts. Complete guide for photo editing and design.',
    },
    tr: {
      title: 'KeyMaster',
      description: 'Temel klavye kısayollarıyla Adobe Photoshop\'ta ustalaşın. Fotoğraf düzenleme ve tasarım için kapsamlı rehber.',
    },
  },
  slack: {
    en: {
      title: 'KeyMaster',
      description: 'Communicate faster with Slack keyboard shortcuts. Essential hotkeys for team collaboration.',
    },
    tr: {
      title: 'KeyMaster',
      description: 'Slack klavye kısayollarıyla daha hızlı iletişim kurun. Ekip işbirliği için temel kısayollar.',
    },
  },
};

export const translations = {
  en: {
    // Header
    heroTitle: 'Master Your Shortcuts',
    heroDescription: 'Boost your productivity with the ultimate keyboard shortcuts cheatsheet. Click any card to copy the shortcut to your clipboard.',
    
    // App Selector
    selectApplication: 'Select Application',
    
    // Search
    searchPlaceholder: 'Search shortcuts by action, category, or key...',
    of: 'of',
    
    // Categories
    All: 'All',
    General: 'General',
    Editing: 'Editing',
    Navigation: 'Navigation',
    Terminal: 'Terminal',
    Search: 'Search',
    Debug: 'Debug',
    View: 'View',
    File: 'File',
    Formatting: 'Formatting',
    Selection: 'Selection',
    Formulas: 'Formulas',
    Text: 'Text',
    Data: 'Data',
    Windows: 'Windows',
    System: 'System',
    Output: 'Output',
    PowerShell: 'PowerShell',
    Git: 'Git',
    'Data View': 'Data View',
    Analysis: 'Analysis',
    Transform: 'Transform',
    'Variable View': 'Variable View',
    Build: 'Build',
    Refactor: 'Refactor',
    Test: 'Test',
    Play: 'Play',
    GameObject: 'GameObject',
    Blueprint: 'Blueprint',
    // Chrome categories
    Tabs: 'Tabs',
    Bookmarks: 'Bookmarks',
    History: 'History',
    Developer: 'Developer',
    // Figma categories
    Tools: 'Tools',
    Components: 'Components',
    Boolean: 'Boolean',
    Alignment: 'Alignment',
    // Photoshop categories
    Layers: 'Layers',
    Adjustments: 'Adjustments',
    Filter: 'Filter',
    
    // Empty State
    noShortcutsFound: 'No shortcuts found',
    tryAdjusting: 'Try adjusting your search or filter criteria.',
    
    // Toast
    copiedToClipboard: 'Copied to clipboard!',
    
    // Favorites
    favorites: 'Favorites',
    noFavoritesYet: 'No favorites yet',
    clickHeartToAdd: 'Click the heart icon on any shortcut to add it to your favorites.',
    
    // Print
    print: 'Print',
    printShortcuts: 'Print Shortcuts',
    
    // Quiz
    quiz: 'Quiz Mode',
    score: 'Score',
    question: 'Question',
    correct: 'Correct',
    wrong: 'Wrong',
    skipQuestion: 'Skip',
    nextQuestion: 'Next Question',
    finishQuiz: 'Finish',
    tryAgain: 'Try Again',
    quizComplete: 'Quiz Complete!',
    yourScore: 'Your Score',
    excellent: 'Excellent! You\'re a keyboard master! 🎉',
    good: 'Good job! Keep practicing! 💪',
    needsPractice: 'Keep practicing, you\'ll get there! 📚',
    
    // Footer
    builtForDevelopers: 'Built for developers.',
    shortcuts: 'Shortcuts',
    shortcutsAvailable: 'shortcuts available',
    
    // OS
    windows: 'Windows',
    macos: 'macOS',
  },
  tr: {
    // Header
    heroTitle: 'Kısayollarında Uzmanlaş',
    heroDescription: 'Klavye kısayolları rehberi ile verimliliğini artır. Kısayolu kopyalamak için kartlara tıkla.',
    
    // App Selector
    selectApplication: 'Uygulama Seç',
    
    // Search
    searchPlaceholder: 'İşlem, kategori veya tuşa göre ara...',
    of: '/',
    
    // Categories
    All: 'Tümü',
    General: 'Genel',
    Editing: 'Düzenleme',
    Navigation: 'Gezinme',
    Terminal: 'Terminal',
    Search: 'Arama',
    Debug: 'Hata Ayıklama',
    View: 'Görünüm',
    File: 'Dosya',
    Formatting: 'Biçimlendirme',
    Selection: 'Seçim',
    Formulas: 'Formüller',
    Text: 'Metin',
    Data: 'Veri',
    Windows: 'Pencereler',
    System: 'Sistem',
    Output: 'Çıktı',
    PowerShell: 'PowerShell',
    Git: 'Git',
    'Data View': 'Veri Görünümü',
    Analysis: 'Analiz',
    Transform: 'Dönüştürme',
    'Variable View': 'Değişken Görünümü',
    Build: 'Derleme',
    Refactor: 'Yeniden Düzenleme',
    Test: 'Test',
    Play: 'Oynat',
    GameObject: 'Oyun Nesnesi',
    Blueprint: 'Blueprint',
    // Chrome categories
    Tabs: 'Sekmeler',
    Bookmarks: 'Yer İmleri',
    History: 'Geçmiş',
    Developer: 'Geliştirici',
    // Figma categories
    Tools: 'Araçlar',
    Components: 'Bileşenler',
    Boolean: 'Boolean',
    Alignment: 'Hizalama',
    // Photoshop categories
    Layers: 'Katmanlar',
    Adjustments: 'Ayarlamalar',
    Filter: 'Filtre',
    
    // Empty State
    noShortcutsFound: 'Kısayol bulunamadı',
    tryAdjusting: 'Arama veya filtre kriterlerini değiştirmeyi dene.',
    
    // Toast
    copiedToClipboard: 'Panoya kopyalandı!',
    
    // Favorites
    favorites: 'Favoriler',
    noFavoritesYet: 'Henüz favori yok',
    clickHeartToAdd: 'Favorilere eklemek için herhangi bir kısayoldaki kalp ikonuna tıkla.',
    
    // Print
    print: 'Yazdır',
    printShortcuts: 'Kısayolları Yazdır',
    
    // Quiz
    quiz: 'Quiz Modu',
    score: 'Puan',
    question: 'Soru',
    correct: 'Doğru',
    wrong: 'Yanlış',
    skipQuestion: 'Atla',
    nextQuestion: 'Sonraki Soru',
    finishQuiz: 'Bitir',
    tryAgain: 'Tekrar Dene',
    quizComplete: 'Quiz Tamamlandı!',
    yourScore: 'Puanın',
    excellent: 'Mükemmel! Klavye ustasısın! 🎉',
    good: 'İyi iş! Pratik yapmaya devam et! 💪',
    needsPractice: 'Pratik yapmaya devam et, başaracaksın! 📚',
    
    // Footer
    builtForDevelopers: 'Geliştiriciler için yapıldı.',
    shortcuts: 'Kısayol',
    shortcutsAvailable: 'kısayol mevcut',
    
    // OS
    windows: 'Windows',
    macos: 'macOS',
  },
};

export type TranslationKey = keyof typeof translations.en;
