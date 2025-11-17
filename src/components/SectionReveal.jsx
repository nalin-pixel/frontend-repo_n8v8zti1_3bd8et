import React, { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function SectionReveal({ children }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px -10% 0px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}
