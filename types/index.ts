// App types for scalability - add new apps here
export type AppType = 'vscode' | 'figma' | 'excel' | 'chrome' | 'slack' | 'word' | 'powerpoint' | 'terminal' | 'spss' | 'visualstudio' | 'unity' | 'unreal' | 'photoshop';

// Operating system types
export type OSType = 'win' | 'mac';

// Language types
export type Language = 'en' | 'tr';
export type LanguageType = Language;

// Shortcut category types
export type CategoryType = 
  | 'General'
  | 'Editing'
  | 'Navigation'
  | 'Terminal'
  | 'Search'
  | 'Debug'
  | 'View'
  | 'File'
  | 'Formatting'
  | 'Selection'
  | 'Formulas'
  | 'Text'
  | 'Data'
  | 'Windows'
  | 'System'
  | 'Output'
  | 'PowerShell'
  | 'Git'
  | 'Data View'
  | 'Analysis'
  | 'Transform'
  | 'Variable View'
  | 'Build'
  | 'Refactor'
  | 'Test'
  | 'Play'
  | 'GameObject'
  | 'Blueprint'
  // Chrome categories
  | 'Tabs'
  | 'Bookmarks'
  | 'History'
  | 'Developer'
  // Figma categories
  | 'Tools'
  | 'Components'
  | 'Boolean'
  | 'Alignment'
  // Photoshop categories
  | 'Layers'
  | 'Adjustments'
  | 'Filter';

// Key bindings for different operating systems
export interface KeyBindings {
  win: string[];
  mac: string[];
}

// Localized key bindings (for apps like Excel that have different shortcuts per language)
export interface LocalizedKeyBindings {
  en: KeyBindings;
  tr: KeyBindings;
}

// Localized text for action and description
export interface LocalizedText {
  en: string;
  tr: string;
}

// Main shortcut interface
export interface Shortcut {
  id: string;
  app: AppType;
  action: LocalizedText;
  category: CategoryType;
  keys: KeyBindings | LocalizedKeyBindings; // Can be simple or localized
  description: LocalizedText;
}

// Helper to check if keys are localized
export function isLocalizedKeys(keys: KeyBindings | LocalizedKeyBindings): keys is LocalizedKeyBindings {
  // LocalizedKeyBindings has 'en' and 'tr' properties with KeyBindings inside
  // KeyBindings has 'win' and 'mac' properties directly
  if (!keys || typeof keys !== 'object') return false;
  
  // Check if it has 'win' directly (means it's KeyBindings, not localized)
  if ('win' in keys && Array.isArray(keys.win)) {
    return false;
  }
  
  // Check if it has 'en' with 'win' inside (means it's LocalizedKeyBindings)
  if ('en' in keys && keys.en && typeof keys.en === 'object' && 'win' in keys.en) {
    return true;
  }
  
  return false;
}

// App metadata for future scalability
export interface AppInfo {
  id: AppType;
  name: string;
  icon: string;
  color: string;
}

// Filter state interface
export interface FilterState {
  search: string;
  category: CategoryType | 'All';
  app: AppType | 'All';
  os: OSType;
}
