import React from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative pt-28 pb-24 sm:pt-32 sm:pb-28 bg-gradient-to-b from-white via-white to-blue-50/40 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-gradient-to-tr from-indigo-500/10 via-cyan-500/10 to-blue-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="max-w-xl">
            <h1 className="text-3xl sm:text-5xl font-semibold leading-tight text-gray-900">
              Moderne Websites & KI-Automatisierung für dein Business.
            </h1>
            <p className="mt-5 text-gray-600 text-base sm:text-lg">
              Wir erstellen performante Websites, integrieren KI in deine Prozesse und automatisieren wiederkehrende Aufgaben, damit du mehr Zeit für dein Kerngeschäft hast.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#kontakt" className="inline-flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-5 py-3 text-sm font-medium shadow hover:shadow-md transition-shadow">
                Kostenlose Analyse anfragen
              </a>
              <a href="#leistungen" className="inline-flex items-center rounded-md border border-gray-300 bg-white px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50">
                Leistungen ansehen
              </a>
            </div>
            <div className="mt-6 text-xs text-gray-500">Sitz in der Schweiz • Fokus auf KMU & Dienstleister</div>
          </div>

          <div className="relative h-[380px] sm:h-[520px] rounded-2xl overflow-hidden border border-gray-200 bg-white/60 backdrop-blur">
            <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>
    </section>
  )
}
