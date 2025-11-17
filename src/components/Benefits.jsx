import React from 'react'
import { Layers, UserCheck, Settings2, Sparkles } from 'lucide-react'

const usps = [
  { icon: Layers, title: 'Tech & Design kombiniert', desc: 'Wir denken Branding, UX und Technik zusammen – für Ergebnisse, die funktionieren.' },
  { icon: UserCheck, title: 'Direkter Kontakt', desc: 'Transparente Kommunikation ohne Umwege. Schnelle Abstimmung, klare Entscheidungen.' },
  { icon: Settings2, title: 'Fokus auf KMU & Selbständige', desc: 'Lösungen, die sich rechnen – pragmatisch, effizient, skalierbar.' },
  { icon: Sparkles, title: 'Automatisierung statt nur Optik', desc: 'Wir optimieren Prozesse – nicht nur die Oberfläche.' },
]

export default function Benefits() {
  return (
    <section id="vorteile" className="py-20 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-semibold text-gray-900">Warum AIDevelo.ai</h2>
          <p className="mt-3 text-gray-600">Verlässlich, modern und messbar – mit Blick fürs Ganze.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {usps.map(({ icon: Icon, title, desc }, i) => (
            <div key={i} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 text-white flex items-center justify-center shadow">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
