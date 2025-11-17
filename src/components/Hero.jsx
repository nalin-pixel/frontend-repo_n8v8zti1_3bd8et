import React from 'react'
import Spline from '@splinetool/react-spline'
import PhysicsRope from './PhysicsRope'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative pt-28 pb-24 sm:pt-32 sm:pb-28 bg-gradient-to-b from-white via-white to-blue-50/40 dark:from-[#0b1020] dark:via-[#0b1020] dark:to-[#0b1020]/60 overflow-hidden">
      {/* Futuristic grid overlay */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="max-w-xl">
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-5xl font-semibold leading-tight"
            >
              Moderne Websites & KI-Automatisierung für dein Business.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-5 text-gray-600 dark:text-gray-300 text-base sm:text-lg"
            >
              Wir erstellen performante Websites, integrieren KI in deine Prozesse und automatisieren wiederkehrende Aufgaben, damit du mehr Zeit für dein Kerngeschäft hast.
            </motion.p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="#kontakt"
                className="inline-flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-5 py-3 text-sm font-medium shadow hover:shadow-lg transition-shadow"
              >
                Kostenlose Analyse anfragen
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="#leistungen"
                className="inline-flex items-center rounded-md border border-gray-300 dark:border-white/10 bg-white dark:bg-white/5 px-5 py-3 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/10"
              >
                Leistungen ansehen
              </motion.a>
            </div>
            <div className="mt-6 text-xs text-gray-500 dark:text-gray-400">Sitz in der Schweiz • Fokus auf KMU & Dienstleister</div>
          </div>

          <div className="relative h-[380px] sm:h-[520px] rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur">
            <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            {/* Physics rope + lamp on the right */}
            <div className="absolute top-2 right-4">
              <PhysicsRope />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
