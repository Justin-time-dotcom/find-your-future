/**
 * Site footer component.
 * Displays copyright and navigation hints.
 */
export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950/90 px-4 py-6 text-sm text-slate-400 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Find Your Future. All rights reserved.</p>
        <p>Built for global education guidance.</p>
      </div>
    </footer>
  );
}
