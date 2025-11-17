import React from 'react'
import { Search, PenTool, Plug, Rocket } from 'lucide-react'

const steps = [
  {
    icon: Search,
    title: 'Analyse',
    desc: 'Wir prüfen Ziele, Zielgruppe und aktuelle Prozesse – klar und verständlich.'
  },
  {
    icon: PenTool,
    title: 'Konzept & Design',
    desc: 'Strukturiertes UX/UI, moderne Optik, sauberes Content-Gerüst.'
  },
  {
    icon: Plug,
    title: 'Umsetzung & Integration',
    desc: 'Website bauen, KI einbinden, Automationen verbinden – alles aus einer Hand.'
  },
  {
    icon: Rocket,
    title: 'Launch & Betreuung',
    desc: 'Go-Live, Monitoring und Weiterentwicklung nach Bedarf.'
  }
]

export default function Process() {
  return (
    <section id="prozess" className="py-20 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-semibold text-gray-900">So arbeiten wir</h2>
          <p className="mt-3 text-gray-600">Vier Schritte zu weniger Aufwand und mehr Wirkung.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <div key={i} className="relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
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
