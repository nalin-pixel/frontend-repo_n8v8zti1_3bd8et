import React from 'react'
import { Check } from 'lucide-react'
import SectionShell from './SectionShell'
import { motion } from 'framer-motion'

const plans = [
  {
    name: 'Starter Website',
    price: 'ab 990 CHF',
    features: [
      'Onepager oder kleine Website',
      'Responsive Design + SEO-Basics',
      'Kontakt-/Lead-Formular'
    ]
  },
  {
    name: 'Website + KI-Assistant',
    price: 'ab 1’990 CHF',
    features: [
      'Moderne Website inkl. Chatbot',
      'FAQ-Automatisierung',
      'Terminbuchungs-Assistent'
    ]
  },
  {
    name: 'Business Automation Setup',
    price: 'ab 2’990 CHF',
    features: [
      'Prozessanalyse & Mapping',
      'Automatisierte Angebote/Rechnungen',
      'CRM/Tools-Integration'
    ]
  }
]

export default function Pricing() {
  return (
    <SectionShell id="preise">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-2xl sm:text-4xl font-semibold">Pakete & Preise</h2>
        <p className="mt-3 text-gray-600 dark:text-gray-300">Transparente Beispiele – exakt passen wir dein Paket im Gespräch an.</p>
      </div>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {plans.map((p, i) => (
          <motion.div key={i} whileHover={{ y: -4 }} className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 p-6 shadow-sm">
            <h3 className="text-lg font-semibold">{p.name}</h3>
            <div className="mt-2 text-cyan-700 dark:text-cyan-300 font-medium">{p.price}</div>
            <ul className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-300">
              {p.features.map((f, j) => (
                <li key={j} className="flex gap-2 items-start">
                  <Check className="h-4 w-4 mt-0.5 text-cyan-600" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <a href="#kontakt" className="mt-6 inline-flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 text-sm font-medium shadow hover:shadow-md transition-all hover:scale-[1.02]">Anfragen</a>
          </motion.div>
        ))}
      </div>
    </SectionShell>
  )
}
