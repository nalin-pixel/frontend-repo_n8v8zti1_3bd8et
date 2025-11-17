import React from 'react'

const items = [
  { name: 'Projekt Alpha', industry: 'Beratung', desc: 'Website-Relaunch mit Lead-Formular und schneller Performance.' },
  { name: 'Projekt Beta', industry: 'Gesundheit', desc: 'KI-FAQ-Assistent und Terminbuchung integriert.' },
  { name: 'Projekt Gamma', industry: 'Agentur', desc: 'Automatisierte Angebote & Rechnungen mit CRM-Integration.' },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-semibold text-gray-900">Beispiele</h2>
          <p className="mt-3 text-gray-600">Platzhalter für kommende Cases – flexibel erweiterbar.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p, i) => (
            <div key={i} className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-video rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 mb-4" />
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">{p.name}</h3>
                <span className="text-xs text-gray-500">{p.industry}</span>
              </div>
              <p className="mt-2 text-sm text-gray-600">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
