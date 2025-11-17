import React from 'react'
import { Layers, UserCheck, Settings2, Sparkles } from 'lucide-react'
import SectionShell from './SectionShell'
import { motion } from 'framer-motion'

const usps = [
  { icon: Layers, title: 'Tech & Design kombiniert', desc: 'Wir denken Branding, UX und Technik zusammen – für Ergebnisse, die funktionieren.' },
  { icon: UserCheck, title: 'Direkter Kontakt', desc: 'Transparente Kommunikation ohne Umwege. Schnelle Abstimmung, klare Entscheidungen.' },
  { icon: Settings2, title: 'Fokus auf KMU & Selbständige', desc: 'Lösungen, die sich rechnen – pragmatisch, effizient, skalierbar.' },
  { icon: Sparkles, title: 'Automatisierung statt nur Optik', desc: 'Wir optimieren Prozesse – nicht nur die Oberfläche.' },
]

export default function Benefits() {
  return (
    <SectionShell id="vorteile">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-2xl sm:text-4xl font-semibold">Warum AIDevelo.ai</h2>
        <p className="mt-3 text-gray-600 dark:text-gray-300">Verlässlich, modern und messbar – mit Blick fürs Ganze.</p>
      </div>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {usps.map(({ icon: Icon, title, desc }, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -4 }}
            className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 p-6 shadow-sm"
          >
            <div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 text-white flex items-center justify-center shadow">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{desc}</p>
          </motion.div>
        ))}
      </div>
    </SectionShell>
  )
}
