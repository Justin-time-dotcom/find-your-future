import type { Metadata } from "next";
import type { ReactNode } from "react";
import "../styles/globals.css";

import { Footer } from "../components/Footer";
import { JourneyProvider } from "../components/JourneyContext";
import { Navbar } from "../components/Navbar";

export const metadata: Metadata = {
  title: {
    default: "Find Your Future",
    template: "%s | Find Your Future",
  },
  description:
    "Discover universities, scholarships, careers, and courses tailored to your qualifications.",
  keywords: [
    "universities",
    "scholarships",
    "careers",
    "education",
    "courses",
    "study abroad",
    "Find Your Future",
  ],
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-100">
        <div className="flex min-h-screen flex-col">
          <JourneyProvider>
            <Navbar />

            <main className="flex-1">
              <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                {children}
              </div>
            </main>

            <Footer />
          </JourneyProvider>
        </div>
      </body>
    </html>
  );
}