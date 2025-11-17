import React from 'react'
import SectionShell from './SectionShell'
import { motion } from 'framer-motion'

const items = [
  { name: 'Projekt Alpha', industry: 'Beratung', desc: 'Website-Relaunch mit Lead-Formular und schneller Performance.' },
  { name: 'Projekt Beta', industry: 'Gesundheit', desc: 'KI-FAQ-Assistent und Terminbuchung integriert.' },
  { name: 'Projekt Gamma', industry: 'Agentur', desc: 'Automatisierte Angebote & Rechnungen mit CRM-Integration.' },
]

export default function Portfolio() {
  return (
    <SectionShell id="portfolio" alt>
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-2xl sm:text-4xl font-semibold">Beispiele</h2>
        <p className="mt-3 text-gray-600 dark:text-gray-300">Platzhalter für kommende Cases – flexibel erweiterbar.</p>
      </div>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((p, i) => (
          <motion.div key={i} whileHover={{ y: -6 }} className="group rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 p-6 shadow-sm hover:shadow-md transition-all">
            <div className="aspect-video rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-white/5 dark:to-white/10 mb-4 relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_rgba(56,189,248,0.25),_transparent_40%)]"
                animate={{ backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
              />
            </div>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">{p.name}</h3>
              <span className="text-xs text-gray-500">{p.industry}</span>
            </div>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </SectionShell>
  )
}
