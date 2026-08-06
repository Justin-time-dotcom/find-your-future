import Link from 'next/link';
import { Logo } from './Logo';

/**
 * Navigation bar for the application.
 * Provides primary site navigation and branding.
 */
export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-3 text-lg font-semibold text-white">
          <Logo />
          <span>Find Your Future</span>
        </Link>
        <nav aria-label="Primary" className="flex items-center gap-4 text-sm font-medium text-slate-300">
          <Link href="#hero" scroll className="rounded-full px-3 py-2 transition hover:bg-white/10 hover:text-white">
            Home
          </Link>
          <Link href="#features" scroll className="rounded-full px-3 py-2 transition hover:bg-white/10 hover:text-white">
            Features
          </Link>
          <Link href="#cta" scroll className="rounded-full px-3 py-2 transition hover:bg-white/10 hover:text-white">
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  );
}
