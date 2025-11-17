import React from 'react'
import SectionShell from './SectionShell'

export default function Footer() {
  return (
    <footer className="py-10 bg-white dark:bg-transparent border-t border-gray-200 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500 dark:text-gray-400">
        <div>© {new Date().getFullYear()} AIDevelo.ai — Schweiz</div>
        <div className="flex items-center gap-4">
          <a href="#leistungen" className="hover:text-gray-700 dark:hover:text-gray-200">Leistungen</a>
          <a href="#preise" className="hover:text-gray-700 dark:hover:text-gray-200">Preise</a>
          <a href="#kontakt" className="hover:text-gray-700 dark:hover:text-gray-200">Kontakt</a>
        </div>
      </div>
    </footer>
  )
}
