import React from 'react'

export default function Footer() {
  return (
    <footer className="py-10 bg-white border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
        <div>© {new Date().getFullYear()} AIDevelo.ai — Schweiz</div>
        <div className="flex items-center gap-4">
          <a href="#leistungen" className="hover:text-gray-700">Leistungen</a>
          <a href="#preise" className="hover:text-gray-700">Preise</a>
          <a href="#kontakt" className="hover:text-gray-700">Kontakt</a>
        </div>
      </div>
    </footer>
  )
}
