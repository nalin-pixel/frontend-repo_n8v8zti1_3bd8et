import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Process from './components/Process'
import Benefits from './components/Benefits'
import Portfolio from './components/Portfolio'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AnimatedBackground from './components/AnimatedBackground'
import ClickFX from './components/ClickFX'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-[#0b1020] dark:text-gray-100 transition-colors">
      <AnimatedBackground />
      <ClickFX />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <Benefits />
        <Portfolio />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
