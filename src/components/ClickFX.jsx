import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

// Click ripple and burst effect provider
export default function ClickFX() {
  const [bursts, setBursts] = React.useState([])

  React.useEffect(() => {
    const handler = (e) => {
      const id = Math.random().toString(36).slice(2)
      const hue = (e.clientX + e.clientY) % 360
      const newBurst = { id, x: e.clientX, y: e.clientY, hue }
      setBursts((b) => [...b, newBurst])
      setTimeout(() => setBursts((b) => b.filter((i) => i.id !== id)), 900)
    }
    window.addEventListener('click', handler)
    return () => window.removeEventListener('click', handler)
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-[60]">
      <AnimatePresence>
        {bursts.map((b) => (
          <motion.span
            key={b.id}
            initial={{ scale: 0, opacity: 0.8 }}
            animate={{ scale: 1, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            style={{
              position: 'absolute',
              top: b.y - 10,
              left: b.x - 10,
              width: 20,
              height: 20,
              borderRadius: 9999,
              boxShadow: `0 0 0 2px hsla(${b.hue}, 85%, 60%, 0.8), 0 0 30px hsla(${b.hue}, 85%, 60%, 0.5)`,
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  )
}
