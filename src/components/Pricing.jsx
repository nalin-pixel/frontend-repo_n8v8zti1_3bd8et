import React from 'react'
import { Check } from 'lucide-react'

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
    <section id="preise" className="py-20 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-semibold text-gray-900">Pakete & Preise</h2>
          <p className="mt-3 text-gray-600">Transparente Beispiele – exakt passen wir dein Paket im Gespräch an.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <div key={i} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">{p.name}</h3>
              <div className="mt-2 text-cyan-700 font-medium">{p.price}</div>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                {p.features.map((f, j) => (
                  <li key={j} className="flex gap-2 items-start">
                    <Check className="h-4 w-4 mt-0.5 text-cyan-600" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#kontakt" className="mt-6 inline-flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 text-sm font-medium shadow hover:shadow-md transition-shadow">Anfragen</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
