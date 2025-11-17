import React from 'react'
import SectionReveal from './SectionReveal'

export default function SectionShell({ id, children, alt }) {
  return (
    <section id={id} className={alt ? 'py-20 sm:py-24 bg-gradient-to-b from-transparent to-blue-50/40 dark:to-white/[0.02]' : 'py-20 sm:py-24'}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          {children}
        </SectionReveal>
      </div>
    </section>
  )
}
