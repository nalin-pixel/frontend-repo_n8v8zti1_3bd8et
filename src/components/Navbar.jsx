import React from 'react'
import ThemeToggle from './ThemeToggle'

const navItems = [
  { id: 'leistungen', label: 'Leistungen' },
  { id: 'prozess', label: 'Prozess' },
  { id: 'vorteile', label: 'Warum wir' },
  { id: 'portfolio', label: 'Beispiele' },
  { id: 'preise', label: 'Pakete & Preise' },
  { id: 'kontakt', label: 'Kontakt' },
]

function scrollToId(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/70 dark:bg-[#0b1020]/50 border-b border-gray-200/60 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-cyan-500 via-blue-500 to-indigo-500 animate-pulse-soft" />
          <span className="font-semibold">AIDevelo.ai</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navItems.map((n) => (
            <button
              key={n.id}
              onClick={() => scrollToId(n.id)}
              className="hover:text-gray-900 dark:hover:text-white transition-colors relative group"
            >
              <span>{n.label}</span>
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all" />
            </button>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => scrollToId('kontakt')}
            className="hidden sm:inline-flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 text-sm font-medium shadow hover:shadow-md transition-all hover:scale-[1.02]"
          >
            Kostenlose Analyse
          </button>
        </div>
      </div>
    </header>
  )
}
