'use client';

import { Github, Twitter, Heart, Mail } from 'lucide-react';
import { Language } from '@/types';

interface FooterProps {
  language: Language;
  appName: string;
  shortcutCount: number;
}

const footerTranslations = {
  en: {
    builtWith: 'Built with',
    forDevelopers: 'for developers',
    shortcuts: 'Shortcuts',
    available: 'available',
    allRightsReserved: 'All rights reserved',
    madeBy: 'Made by',
    supportProject: 'Support this project',
    quickLinks: 'Quick Links',
    home: 'Home',
    about: 'About',
    contact: 'Contact',
    followUs: 'Follow Us',
    resources: 'Resources',
    documentation: 'Documentation',
    contribute: 'Contribute',
    reportBug: 'Report a Bug',
  },
  tr: {
    builtWith: 'Şununla yapıldı',
    forDevelopers: 'geliştiriciler için',
    shortcuts: 'Kısayol',
    available: 'mevcut',
    allRightsReserved: 'Tüm hakları saklıdır',
    madeBy: 'Yapımcı',
    supportProject: 'Bu projeyi destekle',
    quickLinks: 'Hızlı Linkler',
    home: 'Ana Sayfa',
    about: 'Hakkında',
    contact: 'İletişim',
    followUs: 'Bizi Takip Et',
    resources: 'Kaynaklar',
    documentation: 'Dökümantasyon',
    contribute: 'Katkıda Bulun',
    reportBug: 'Hata Bildir',
  },
};

export function Footer({ language, appName, shortcutCount }: FooterProps) {
  const t = footerTranslations[language];

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Mail, href: 'mailto:hello@keymaster.dev', label: 'Email' },
  ];

  return (
    <footer className="border-t border-white/10 mt-16 bg-[#0a0a0a]/80">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/favicon.png" 
                alt="KeyMaster Logo" 
                className="w-10 h-10 rounded-xl"
              />
              <h3 className="text-xl font-bold text-white">
                Key<span className="text-blue-400">Master</span>
              </h3>
            </div>
            <p className="text-zinc-400 text-sm mb-4 max-w-sm">
              {language === 'en' 
                ? 'The ultimate keyboard shortcuts cheatsheet for developers and power users. Master your productivity with our comprehensive guides.'
                : 'Geliştiriciler ve ileri düzey kullanıcılar için en kapsamlı klavye kısayolları rehberi. Kapsamlı rehberlerimizle verimliliğinizi artırın.'
              }
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 transition-all duration-150 hover:scale-110 hover:-translate-y-0.5 active:scale-95"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              {t.quickLinks}
            </h4>
            <ul className="space-y-2">
              {[t.home, t.about, t.documentation, t.contact].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-zinc-400 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              {t.resources}
            </h4>
            <ul className="space-y-2">
              {[t.contribute, t.reportBug, t.supportProject].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-zinc-400 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-zinc-500 text-sm">
              <span>© {new Date().getFullYear()} KeyMaster.</span>
              <span>{t.allRightsReserved}</span>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2 text-zinc-400">
                <span className="px-2 py-1 rounded-full bg-white/5 text-xs font-medium">
                  {appName}
                </span>
                <span>{shortcutCount} {t.shortcuts} {t.available}</span>
              </div>
            </div>

            {/* Built With */}
            <div className="flex items-center gap-1.5 text-sm text-zinc-500">
              <span>{t.builtWith}</span>
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
              <span>{t.forDevelopers}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
