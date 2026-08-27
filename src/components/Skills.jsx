import Reveal from './Reveal.jsx'
import { skillGroups } from '../data/skills.js'

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 border-t border-line">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="max-w-xl mb-14">
          <p className="eyebrow mb-4">$ cat skills.json</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Tech Stack</h2>
          <p className="mt-3 text-muted">
            Grouped by where I use them. Highlighted entries are what I&apos;m building with most
            right now.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.id} delay={gi * 80} className="card-surface rounded-2xl p-6">
              <h3 className="font-mono-tight text-sm text-muted tracking-wide uppercase mb-4">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`rounded-lg border px-3.5 py-2 text-sm transition-colors ${
                      skill.strong
                        ? 'border-teal-dim bg-teal/10 text-teal font-medium'
                        : 'border-line text-muted hover:text-text hover:border-text/20'
                    }`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
