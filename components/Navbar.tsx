import Link from 'next/link';

/**
 * Navigation bar for the application.
 * Provides primary site navigation and branding.
 */
export function Navbar() {
  return (
    <header className="border-b border-slate-800 bg-slate-950/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="text-lg font-semibold text-white">
          Find Your Future
        </Link>
        <nav className="flex items-center gap-4 text-sm font-medium text-slate-300">
          <Link href="#" className="transition hover:text-white">
            Home
          </Link>
          <Link href="#" className="transition hover:text-white">
            Explore
          </Link>
          <Link href="#" className="transition hover:text-white">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
