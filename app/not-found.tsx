'use client';

import Link from 'next/link';
import { Home, Keyboard, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md animate-fadeIn">
        {/* 404 Animation */}
        <div className="relative mb-8">
          <div className="text-[150px] font-bold text-gradient opacity-20 select-none">
            404
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10">
              <Keyboard className="w-16 h-16 text-blue-400" />
            </div>
          </div>
        </div>

        {/* Message */}
        <h1 className="text-3xl font-bold text-white mb-4">
          Page Not Found
        </h1>
        <p className="text-zinc-400 mb-8">
          Oops! It looks like you pressed the wrong shortcut. 
          The page you&apos;re looking for doesn&apos;t exist.
        </p>

        {/* Keyboard Keys */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <kbd className="kbd-key text-lg">Ctrl</kbd>
          <span className="text-zinc-500">+</span>
          <kbd className="kbd-key text-lg">Home</kbd>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium hover:opacity-90 transition-opacity"
          >
            <Home className="w-4 h-4" />
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 text-white font-medium hover:bg-white/20 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
