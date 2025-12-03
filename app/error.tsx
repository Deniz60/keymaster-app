'use client';

import { useEffect } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center animate-fadeIn">
        {/* Error Icon */}
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-500/10 border border-red-500/20 mb-6">
          <AlertTriangle className="w-10 h-10 text-red-500" />
        </div>

        {/* Error Title */}
        <h1 className="text-3xl font-bold text-white mb-3">
          Oops! Something went wrong
        </h1>

        {/* Error Description */}
        <p className="text-zinc-400 mb-8">
          {error.message || 'An unexpected error occurred. Please try again.'}
        </p>

        {/* Error Details (Development only) */}
        {process.env.NODE_ENV === 'development' && error.digest && (
          <div className="mb-6 p-4 rounded-lg bg-white/5 border border-white/10">
            <p className="text-xs text-zinc-500 font-mono">
              Error ID: {error.digest}
            </p>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={reset}
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium transition-all duration-150 hover:scale-105 active:scale-95"
          >
            <RefreshCw className="w-4 h-4" />
            Try Again
          </button>

          <a
            href="/"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium transition-all duration-150 hover:scale-105 active:scale-95"
          >
            <Home className="w-4 h-4" />
            Go Home
          </a>
        </div>

        {/* Additional Help */}
        <p className="text-sm text-zinc-500 mt-8">
          If the problem persists, please try refreshing the page or clearing your browser cache.
        </p>
      </div>
    </div>
  );
}
