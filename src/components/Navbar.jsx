import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#journey', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-2' : 'py-4'
      }`}
    >
      <div
        className={`mx-auto max-w-6xl px-4 sm:px-6 transition-all duration-300 ${
          scrolled ? 'max-w-5xl' : 'max-w-6xl'
        }`}
      >
        <div
          className={`glass flex items-center justify-between rounded-xl border border-line px-4 transition-all duration-300 ${
            scrolled ? 'py-2 shadow-lg shadow-black/30' : 'py-3'
          }`}
        >
          <a href="#top" className="font-mono-tight font-bold text-lg tracking-tight text-text">
            <span className="text-teal">&gt;_</span> Tabi
          </a>

          <nav className="hidden md:flex items-center gap-7">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted hover:text-text transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center rounded-lg border border-teal-dim bg-teal/10 px-4 py-1.5 text-sm font-medium text-teal hover:bg-teal/20 transition-colors"
          >
            Let&apos;s Talk
          </a>

          <button
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((o) => !o)}
            className="md:hidden text-text p-1"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-2 rounded-xl border border-line glass p-4 flex flex-col gap-1">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm text-muted hover:text-text py-2.5 border-b border-line last:border-0"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-3 text-center rounded-lg border border-teal-dim bg-teal/10 px-4 py-2.5 text-sm font-medium text-teal"
            >
              Let&apos;s Talk
            </a>
          </div>
        )}
      </div>
    </header>
  )
}
