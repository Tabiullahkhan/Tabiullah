import { useEffect, useState } from 'react'
import { Github, Linkedin, Mail, Facebook, ArrowRight, FolderGit2 } from 'lucide-react'
import Reveal from './Reveal.jsx'

const COMMANDS = [
  { cmd: 'git push origin main', out: 'Enumerating objects, done.' },
  { cmd: 'docker build -t tabi/app .', out: 'Successfully built image.' },
  { cmd: 'docker push $ECR_URI/tabi-app', out: 'Image pushed to AWS ECR.' },
  { cmd: 'aws ec2 deploy --service app', out: 'Container running on EC2.' },
  { cmd: 'nginx -s reload', out: 'Live at your-domain.com ✓' },
]

function Terminal() {
  const [lineIndex, setLineIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [doneLines, setDoneLines] = useState([])

  useEffect(() => {
    if (lineIndex >= COMMANDS.length) return
    const current = COMMANDS[lineIndex].cmd
    if (charIndex < current.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), 32)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => {
      setDoneLines((d) => [...d, COMMANDS[lineIndex]])
      setLineIndex((i) => i + 1)
      setCharIndex(0)
    }, 550)
    return () => clearTimeout(t)
  }, [charIndex, lineIndex])

  const current = COMMANDS[lineIndex]

  return (
    <div className="card-surface rounded-2xl overflow-hidden shadow-2xl shadow-black/40">
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-line">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
        <span className="ml-3 font-mono-tight text-xs text-muted">deploy.sh</span>
      </div>
      <div className="p-5 font-mono-tight text-[13px] leading-relaxed min-h-[220px] sm:min-h-[240px]">
        {doneLines.map((line, i) => (
          <div key={i} className="mb-2">
            <div className="text-teal">
              <span className="text-muted">$</span> {line.cmd}
            </div>
            <div className="text-muted pl-3">{line.out}</div>
          </div>
        ))}
        {current && (
          <div className="text-teal">
            <span className="text-muted">$</span> {current.cmd.slice(0, charIndex)}
            <span className="caret">&nbsp;</span>
          </div>
        )}
        {lineIndex >= COMMANDS.length && (
          <div className="mt-3 text-amber">Status: deployed and serving traffic ✓</div>
        )}
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="top" className="relative pt-36 pb-24 md:pt-44 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 grid-fade pointer-events-none" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 relative grid md:grid-cols-2 gap-14 items-center">
        <Reveal>
          <p className="eyebrow mb-5">$ whoami</p>
          <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold leading-[1.08] tracking-tight">
            I Build, Deploy &amp; <span className="text-gradient">Scale Digital Experiences.</span>
          </h1>
          <p className="mt-6 text-muted text-lg max-w-lg">
            Computer Science student and developer focused on full-stack web development, cloud
            infrastructure, and DevOps.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-teal px-5 py-3 text-sm font-semibold text-[#06110f] hover:brightness-110 transition"
            >
              <FolderGit2 size={17} /> View My Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-line px-5 py-3 text-sm font-semibold text-text hover:border-teal-dim hover:text-teal transition"
            >
              Contact Me <ArrowRight size={16} />
            </a>
          </div>

          <div className="mt-9 flex items-center gap-5 text-muted">
            <a href="https://github.com/Tabiullahkhan" aria-label="GitHub" className="hover:text-teal transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/tabiullah-khan/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-teal transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:khantabiullah1@gmail.com" aria-label="Email" className="hover:text-teal transition-colors">
              <Mail size={20} />
            </a>
            <a href="https://www.facebook.com/tabiullah.khan/" target="_blank" rel="noreferrer" aria-label="Facebook" className="hover:text-teal transition-colors">
              <Facebook size={20} />
            </a>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <Terminal />
        </Reveal>
      </div>
    </section>
  )
}
