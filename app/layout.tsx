import type { Metadata } from 'next'

import './globals.css'

export const metadata: Metadata = {
  title: 'kw',
  description: 'Minimal essentials.',
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-white text-zinc-900 antialiased dark:bg-zinc-950 dark:text-zinc-50">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <header className="mb-16 flex items-baseline justify-between">
            <h1
              className="font-mono text-sm font-medium uppercase tracking-[0.3em]"
              translate="no"
            >
              kw
            </h1>
            <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">
              Spring 2026
            </span>
          </header>
          {children}
        </div>
      </body>
    </html>
  )
}
