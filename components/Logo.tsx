'use client';

export function Logo() {
  return (
    <svg
      viewBox="0 0 160 160"
      className="h-10 w-10 shrink-0"
      role="img"
      aria-label="Find Your Future logo"
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#14b8a6" />
        </linearGradient>
      </defs>
      <path
        d="M42 30c14-14 34-15 48-4 10 8 15 22 14 36-7 1-16 2-25 2-14 0-25 5-35 14-10 11-17 25-22 40-4-12-4-26 1-39 6-15 13-25 19-49Z"
        fill="url(#logoGradient)"
        opacity="0.95"
      />
      <path
        d="M58 34c14-9 34-10 47-2 8 5 14 13 18 23-10 2-25 4-39 4-13 0-24-2-34-8 2-6 4-11 8-17Z"
        fill="#f8fafc"
        opacity="0.25"
      />
      <path
        d="M54 82c10-10 25-16 41-16 11 0 24 3 33 9l-10 16c-8-4-16-6-26-6-9 0-17 2-24 6l-14-9Z"
        fill="#0f172a"
        opacity="0.96"
      />
      <path
        d="M91 74c12 6 19 17 20 31 0 14-5 26-14 35-7-8-10-18-10-31 0-11 3-20 4-35Z"
        fill="url(#logoGradient)"
      />
      <path
        d="M65 113c10-5 20-7 30-7 10 0 19 2 27 7l-10 18c-6-3-12-4-18-4-7 0-14 2-22 5l-7-19Z"
        fill="url(#logoGradient)"
      />
      <circle cx="64" cy="68" r="8" fill="#f8fafc" opacity="0.95" />
      <circle cx="102" cy="69" r="7" fill="#f8fafc" opacity="0.92" />
    </svg>
  );
}
