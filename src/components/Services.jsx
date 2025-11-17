import React from 'react'
import { Globe, Bot, Repeat } from 'lucide-react'

const services = [
  {
    id: 'web',
    icon: Globe,
    title: 'Website & Re-Design',
    bullets: [
      'Moderne Websites & Landingpages',
      'Performance & SEO-Basics',
      'Mehr Anfragen, besseres Branding'
    ],
    priceHint: 'ab 990 CHF'
  },
  {
    id: 'ai',
    icon: Bot,
    title: 'KI-Implementierung',
    bullets: [
      'Chatbots & FAQ-Automatisierung',
      'Terminbuchungs-Assistent',
      'Interne KI-Tools für Teams'
    ],
    priceHint: 'ab 1’490 CHF'
  },
  {
    id: 'automation',
    icon: Repeat,
    title: 'Business-Automatisierung',
    bullets: [
      'Angebote, Rechnungen, E-Mails',
      'Workflows & Integrationen',
      'Zeit sparen, Fehler reduzieren'
    ],
    priceHint: 'ab 1’990 CHF'
  }
]

export default function Services() {
  return (
    <section id="leistungen" className="py-20 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-semibold text-gray-900">Leistungen</h2>
          <p className="mt-3 text-gray-600">Websites, KI-Lösungen und Automatisierungen – alles aus einer Hand.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ id, icon: Icon, title, bullets, priceHint }) => (
            <div key={id} className="group relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-cyan-500/0 via-blue-500/0 to-indigo-500/0 group-hover:from-cyan-500/[0.06] group-hover:via-blue-500/[0.06] group-hover:to-indigo-500/[0.06] pointer-events-none" />
              <div className="relative flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 text-white flex items-center justify-center shadow">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              </div>
              <ul className="mt-4 space-y-2 text-gray-600 text-sm">
                {bullets.map((b, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-cyan-600">•</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 text-xs text-gray-500">{priceHint}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
