import { Keyboard } from 'lucide-react';

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        {/* Animated Logo */}
        <div className="relative mb-8">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 blur-2xl opacity-30 animate-pulse" />
          <div className="relative p-4 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 animate-bounce">
            <Keyboard className="w-10 h-10 text-white" />
          </div>
        </div>

        {/* Loading Text */}
        <h2 className="text-xl font-semibold text-white mb-2">Loading...</h2>
        <p className="text-zinc-400 text-sm">Preparing your shortcuts</p>

        {/* Loading Dots */}
        <div className="flex items-center justify-center gap-1 mt-6">
          <div className="w-2 h-2 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: '0ms' }} />
          <div className="w-2 h-2 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: '150ms' }} />
          <div className="w-2 h-2 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>

        {/* Skeleton Keys */}
        <div className="flex items-center justify-center gap-2 mt-8">
          <div className="w-16 h-8 rounded-lg bg-white/10 animate-pulse" />
          <span className="text-zinc-600">+</span>
          <div className="w-12 h-8 rounded-lg bg-white/10 animate-pulse" />
          <span className="text-zinc-600">+</span>
          <div className="w-10 h-8 rounded-lg bg-white/10 animate-pulse" />
        </div>
      </div>
    </div>
  );
}
