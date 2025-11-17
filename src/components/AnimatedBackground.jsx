import React, { useEffect, useRef } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'

// Interactive gradient + particles background
export default function AnimatedBackground() {
  const containerRef = useRef(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  useEffect(() => {
    const el = containerRef.current
    const onMove = (e) => {
      const rect = el.getBoundingClientRect()
      mouseX.set(e.clientX - rect.left)
      mouseY.set(e.clientY - rect.top)
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [mouseX, mouseY])

  const bgX = useTransform(mouseX, [0, typeof window !== 'undefined' ? window.innerWidth : 1], ['-10%', '10%'])
  const bgY = useTransform(mouseY, [0, typeof window !== 'undefined' ? window.innerHeight : 1], ['-10%', '10%'])

  return (
    <div ref={containerRef} className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Layered gradient fields with subtle parallax */}
      <motion.div
        aria-hidden
        style={{ x: bgX, y: bgY }}
        className="absolute -top-1/3 -left-1/3 h-[120vmax] w-[120vmax] rounded-full bg-[radial-gradient(circle_at_center,_rgba(56,189,248,0.08),_transparent_60%)] dark:bg-[radial-gradient(circle_at_center,_rgba(56,189,248,0.14),_transparent_60%)] blur-3xl"
      />
      <motion.div
        aria-hidden
        style={{ x: useTransform(bgX, v => `calc(${v} * -1)`), y: useTransform(bgY, v => `calc(${v} * -1)`) }}
        className="absolute -bottom-1/3 -right-1/3 h-[120vmax] w-[120vmax] rounded-full bg-[radial-gradient(circle_at_center,_rgba(99,102,241,0.08),_transparent_60%)] dark:bg-[radial-gradient(circle_at_center,_rgba(99,102,241,0.14),_transparent_60%)] blur-3xl"
      />

      {/* Floating particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 28 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-[2px] w-[2px] rounded-full bg-cyan-500/40 dark:bg-cyan-400/60 shadow-[0_0_10px_rgba(34,211,238,0.35)]"
            style={{
              top: `${(i * 37) % 100}%`,
              left: `${(i * 53) % 100}%`,
            }}
            animate={{
              y: [0, -10, 0],
              x: [0, 6, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 4 + (i % 5),
              repeat: Infinity,
              ease: 'easeInOut',
              delay: (i % 10) * 0.2,
            }}
          />
        ))}
      </div>

      {/* Subtle scanline/texture overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(transparent_0,_rgba(0,0,0,0.02)_2px,transparent_4px)] bg-[length:100%_6px] opacity-40 dark:opacity-25" />
    </div>
  )
}
