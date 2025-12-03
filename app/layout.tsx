import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-geist-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'KeyMaster',
  description:
    'Master keyboard shortcuts for VS Code, Figma, Excel and more. Interactive cheatsheet with Windows and macOS key bindings.',
  keywords: [
    'keyboard shortcuts',
    'VS Code shortcuts',
    'cheatsheet',
    'hotkeys',
    'productivity',
    'developer tools',
  ],
  authors: [{ name: 'KeyMaster' }],
  creator: 'KeyMaster',
  openGraph: {
    title: 'KeyMaster - Professional Keyboard Shortcuts Cheatsheet',
    description:
      'Master keyboard shortcuts for VS Code, Figma, Excel and more. Interactive cheatsheet with Windows and macOS key bindings.',
    type: 'website',
    locale: 'en_US',
    siteName: 'KeyMaster',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KeyMaster - Professional Keyboard Shortcuts Cheatsheet',
    description:
      'Master keyboard shortcuts for VS Code, Figma, Excel and more. Interactive cheatsheet with Windows and macOS key bindings.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        
        {/* PWA Meta Tags */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1a1a2e" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="KeyMaster" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <meta name="mobile-web-app-capable" content="yes" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'KeyMaster',
              applicationCategory: 'DeveloperApplication',
              operatingSystem: 'Web',
              description:
                'Professional keyboard shortcuts cheatsheet for VS Code, Figma, Excel and more applications.',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
              },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.9',
                ratingCount: '100',
              },
            }),
          }}
        />
        
        {/* Service Worker Registration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js').then(function(registration) {
                    console.log('ServiceWorker registration successful');
                  }, function(err) {
                    console.log('ServiceWorker registration failed: ', err);
                  });
                });
              }
            `,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased min-h-screen bg-[#0a0a0a]`}
      >
        <div className="noise-overlay" aria-hidden="true" />
        <div className="bg-gradient-animated fixed inset-0 -z-10" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
