import React from 'react'
import { Search, PenTool, Plug, Rocket } from 'lucide-react'
import SectionShell from './SectionShell'
import { motion } from 'framer-motion'

const steps = [
  { icon: Search, title: 'Analyse', desc: 'Wir prüfen Ziele, Zielgruppe und aktuelle Prozesse – klar und verständlich.' },
  { icon: PenTool, title: 'Konzept & Design', desc: 'Strukturiertes UX/UI, moderne Optik, sauberes Content-Gerüst.' },
  { icon: Plug, title: 'Umsetzung & Integration', desc: 'Website bauen, KI einbinden, Automationen verbinden – alles aus einer Hand.' },
  { icon: Rocket, title: 'Launch & Betreuung', desc: 'Go-Live, Monitoring und Weiterentwicklung nach Bedarf.' }
]

export default function Process() {
  return (
    <SectionShell id="prozess" alt>
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-2xl sm:text-4xl font-semibold">So arbeiten wir</h2>
        <p className="mt-3 text-gray-600 dark:text-gray-300">Vier Schritte zu weniger Aufwand und mehr Wirkung.</p>
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map(({ icon: Icon, title, desc }, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -4 }}
            className="relative rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 p-6 shadow-sm"
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
