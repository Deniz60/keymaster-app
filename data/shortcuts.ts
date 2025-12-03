import { Shortcut, AppInfo } from '@/types';
import { vscodeShortcuts } from './apps/vscode';
import { excelShortcuts } from './apps/excel';
import { wordShortcuts } from './apps/word';
import { powerpointShortcuts } from './apps/powerpoint';
import { terminalShortcuts } from './apps/terminal';
import { spssShortcuts } from './apps/spss';
import { visualstudioShortcuts } from './apps/visualstudio';
import { unityShortcuts } from './apps/unity';
import { unrealShortcuts } from './apps/unreal';
import { chromeShortcuts } from './apps/chrome';
import { figmaShortcuts } from './apps/figma';
import { photoshopShortcuts } from './apps/photoshop';

// App metadata
export const appInfo: Record<string, AppInfo> = {
  vscode: {
    id: 'vscode',
    name: 'VS Code',
    icon: 'Code2',
    color: '#007ACC',
  },
  excel: {
    id: 'excel',
    name: 'Excel',
    icon: 'Table',
    color: '#217346',
  },
  word: {
    id: 'word',
    name: 'Word',
    icon: 'FileText',
    color: '#2B579A',
  },
  powerpoint: {
    id: 'powerpoint',
    name: 'PowerPoint',
    icon: 'Presentation',
    color: '#D24726',
  },
  terminal: {
    id: 'terminal',
    name: 'Terminal/CMD',
    icon: 'Terminal',
    color: '#4D4D4D',
  },
  spss: {
    id: 'spss',
    name: 'SPSS',
    icon: 'BarChart3',
    color: '#CC0000',
  },
  visualstudio: {
    id: 'visualstudio',
    name: 'Visual Studio',
    icon: 'Code',
    color: '#5C2D91',
  },
  unity: {
    id: 'unity',
    name: 'Unity',
    icon: 'Gamepad2',
    color: '#000000',
  },
  unreal: {
    id: 'unreal',
    name: 'Unreal Engine',
    icon: 'Box',
    color: '#313131',
  },
  figma: {
    id: 'figma',
    name: 'Figma',
    icon: 'Figma',
    color: '#F24E1E',
  },
  chrome: {
    id: 'chrome',
    name: 'Chrome',
    icon: 'Chrome',
    color: '#4285F4',
  },
  photoshop: {
    id: 'photoshop',
    name: 'Photoshop',
    icon: 'Image',
    color: '#31A8FF',
  },
  slack: {
    id: 'slack',
    name: 'Slack',
    icon: 'MessageSquare',
    color: '#4A154B',
  },
};

// Combine all shortcuts from different apps
export const shortcuts: Shortcut[] = [
  ...vscodeShortcuts,
  ...excelShortcuts,
  ...wordShortcuts,
  ...powerpointShortcuts,
  ...terminalShortcuts,
  ...spssShortcuts,
  ...visualstudioShortcuts,
  ...unityShortcuts,
  ...unrealShortcuts,
  ...chromeShortcuts,
  ...figmaShortcuts,
  ...photoshopShortcuts,
];

// Get all unique categories from shortcuts
export const categories = Array.from(new Set(shortcuts.map((s) => s.category)));

// Get all unique apps from shortcuts (only apps that have shortcuts)
export const apps = Array.from(new Set(shortcuts.map((s) => s.app)));
