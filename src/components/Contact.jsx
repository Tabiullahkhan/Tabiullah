import { useState } from 'react'
import { Mail, Github, Linkedin, Send } from 'lucide-react'
import Reveal from './Reveal.jsx'

export default function Contact() {
  const [status, setStatus] = useState('idle')

  function handleSubmit(e) {
    e.preventDefault()
    // Wire this up to an email service (e.g. Formspree, EmailJS) or your own API.
    setStatus('sent')
  }

  return (
    <section id="contact" className="py-24 md:py-32 border-t border-line">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 grid md:grid-cols-2 gap-14">
        <Reveal>
          <p className="eyebrow mb-4">$ mail -s "new project"</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Have a project in mind?
          </h2>
          <p className="mt-4 text-muted leading-relaxed max-w-md">
            Whether you want to build a web application, improve an existing website, or discuss
            a technical project, feel free to get in touch.
          </p>

          <div className="mt-8 space-y-3">
            <a href="mailto:khantabiullah1@gmail.com" className="flex items-center gap-3 text-sm text-muted hover:text-text transition-colors">
              <Mail size={18} /> khantabiullah1@gmail.com
            </a>
            <a href="https://github.com/Tabiullahkhan" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-muted hover:text-text transition-colors">
              <Github size={18} /> github.com/Tabiullahkhan
            </a>
            <a href="https://www.linkedin.com/in/tabiullah-khan/" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-muted hover:text-text transition-colors">
              <Linkedin size={18} /> LinkedIn
            </a>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <form onSubmit={handleSubmit} className="card-surface rounded-2xl p-6 sm:p-8 space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm text-muted mb-1.5">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full rounded-lg bg-base border border-line px-4 py-2.5 text-sm text-text placeholder:text-muted/60 focus:border-teal-dim transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-muted mb-1.5">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-lg bg-base border border-line px-4 py-2.5 text-sm text-text placeholder:text-muted/60 focus:border-teal-dim transition-colors"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm text-muted mb-1.5">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full rounded-lg bg-base border border-line px-4 py-2.5 text-sm text-text placeholder:text-muted/60 focus:border-teal-dim transition-colors resize-none"
                placeholder="Tell me about your project"
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-teal px-5 py-3 text-sm font-semibold text-[#06110f] hover:brightness-110 transition"
            >
              <Send size={16} /> Send Message
            </button>
            {status === 'sent' && (
              <p className="text-sm text-teal text-center">
                Form isn&apos;t connected to a backend yet — wire it up to Formspree, EmailJS, or
                your own API.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  )
}
