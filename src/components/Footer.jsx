import { Github, Linkedin, Mail, Facebook } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <p className="font-mono-tight font-bold">
            <span className="text-teal">&gt;_</span> Tabiullah Khan
          </p>
          <p className="text-xs text-muted mt-1">Full-Stack Developer | Cloud &amp; DevOps Enthusiast</p>
        </div>

        <div className="flex items-center gap-5 text-muted">
          <a href="https://github.com/Tabiullahkhan" aria-label="GitHub" className="hover:text-teal transition-colors">
            <Github size={18} />
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-teal transition-colors">
            <Linkedin size={18} />
          </a>
          <a href="mailto:hello@example.com" aria-label="Email" className="hover:text-teal transition-colors">
            <Mail size={18} />
          </a>
          <a href="#" aria-label="Facebook" className="hover:text-teal transition-colors">
            <Facebook size={18} />
          </a>
        </div>

        <p className="text-xs text-muted font-mono-tight">
          © {year} Tabiullah Khan. Built &amp; deployed by me.
        </p>
      </div>
    </footer>
  )
}
