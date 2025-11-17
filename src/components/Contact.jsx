import React, { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })
  const [status, setStatus] = useState('')

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sende...')
    try {
      // Placeholder: In Zukunft an Backend senden
      await new Promise((res) => setTimeout(res, 700))
      setStatus('Danke! Wir melden uns in Kürze.')
      setForm({ name: '', email: '', company: '', message: '' })
    } catch (e) {
      setStatus('Etwas ist schiefgelaufen. Bitte später erneut versuchen.')
    }
  }

  return (
    <section id="kontakt" className="py-20 sm:py-24 bg-gradient-to-b from-white to-blue-50/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl sm:text-4xl font-semibold text-gray-900">Bereit für den nächsten Schritt?</h2>
            <p className="mt-3 text-gray-600">Lass uns deine Website und Prozesse analysieren – kostenlos und unverbindlich.</p>
            <div className="mt-6 text-sm text-gray-500">
              Oder direkt per E-Mail: <a href="mailto:hello@aidevelo.ai" className="text-cyan-700 underline">hello@aidevelo.ai</a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-700">Name</label>
                <input name="name" value={form.name} onChange={handleChange} required className="mt-1 w-full rounded-md border-gray-300 focus:ring-cyan-600 focus:border-cyan-600" />
              </div>
              <div>
                <label className="block text-sm text-gray-700">E-Mail</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} required className="mt-1 w-full rounded-md border-gray-300 focus:ring-cyan-600 focus:border-cyan-600" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm text-gray-700">Firma (optional)</label>
                <input name="company" value={form.company} onChange={handleChange} className="mt-1 w-full rounded-md border-gray-300 focus:ring-cyan-600 focus:border-cyan-600" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm text-gray-700">Kurze Projektbeschreibung</label>
                <textarea name="message" value={form.message} onChange={handleChange} rows={4} className="mt-1 w-full rounded-md border-gray-300 focus:ring-cyan-600 focus:border-cyan-600" />
              </div>
            </div>
            <button type="submit" className="mt-6 w-full inline-flex items-center justify-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-3 text-sm font-medium shadow hover:shadow-md transition-shadow">Kostenlose Analyse anfragen</button>
            {status && <p className="mt-3 text-sm text-gray-600">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
