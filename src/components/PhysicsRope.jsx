import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

// Simple mass-spring rope approximation for a hanging lamp
export default function PhysicsRope({ className = '' }) {
  const ref = useRef(null)
  const angleRef = useRef(0)
  const velRef = useRef(0)
  const rafRef = useRef(0)

  useEffect(() => {
    const g = 9.81 // gravity
    const L = 1.2 // length in meters (arbitrary scale)
    const damping = 0.02 // air resistance

    const step = () => {
      // small-angle pendulum: theta'' + (g/L) sin(theta) + damping*theta' = 0
      const theta = angleRef.current
      const omega = velRef.current
      const acc = -(g / L) * Math.sin(theta) - damping * omega
      velRef.current += acc * 0.016
      angleRef.current += velRef.current * 0.016

      const el = ref.current
      if (el) {
        const deg = (angleRef.current * 180) / Math.PI
        el.style.transform = `rotate(${deg}deg)`
      }
      rafRef.current = requestAnimationFrame(step)
    }

    rafRef.current = requestAnimationFrame(step)

    const onPointerMove = (e) => {
      // add impulse based on horizontal mouse movement to excite the pendulum
      const impulse = (e.movementX || 0) * 0.002
      velRef.current += impulse
    }
    window.addEventListener('mousemove', onPointerMove)

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('mousemove', onPointerMove)
    }
  }, [])

  return (
    <div className={`pointer-events-none ${className}`}>
      <div ref={ref} className="origin-top-right" style={{ transform: 'rotate(0deg)' }}>
        {/* rope */}
        <div className="h-24 w-px bg-gradient-to-b from-gray-400/80 to-gray-700/80 dark:from-gray-300/60 dark:to-gray-500/60" />
        {/* lamp */}
        <motion.div
          className="-mt-1 ml-[-14px] h-7 w-7 rounded-full bg-gradient-to-tr from-amber-300 to-yellow-500 shadow-[0_0_20px_rgba(251,191,36,0.6)]"
          animate={{ boxShadow: [
            '0 0 12px rgba(251,191,36,0.35)',
            '0 0 20px rgba(251,191,36,0.7)',
            '0 0 12px rgba(251,191,36,0.35)'
          ]}}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
    </div>
  )
}
