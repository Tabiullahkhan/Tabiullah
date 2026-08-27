import Reveal from './Reveal.jsx'
import { timeline } from '../data/skills.js'

export default function Timeline() {
  return (
    <section id="journey" className="py-24 md:py-32 border-t border-line">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="max-w-xl mb-14">
          <p className="eyebrow mb-4">$ git log --oneline --reverse</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Learning Journey</h2>
          <p className="mt-3 text-muted">How I got from writing HTML to deploying containers.</p>
        </Reveal>

        <div className="relative max-w-2xl">
          <div className="absolute left-[9px] top-2 bottom-2 w-px bg-line" />
          <ul className="space-y-9">
            {timeline.map((step, i) => (
              <Reveal as="li" key={step.title} delay={i * 70} className="relative pl-8">
                <span
                  className={`absolute left-0 top-1.5 h-[19px] w-[19px] rounded-full border-2 flex items-center justify-center ${
                    step.current ? 'border-teal bg-teal/20' : 'border-line bg-surface'
                  }`}
                >
                  <span className={`h-2 w-2 rounded-full ${step.current ? 'bg-teal' : 'bg-muted'}`} />
                </span>
                <h3 className="font-semibold flex items-center gap-2">
                  {step.title}
                  {step.current && (
                    <span className="font-mono-tight text-[11px] font-normal text-teal border border-teal-dim rounded-full px-2 py-0.5">
                      in progress
                    </span>
                  )}
                </h3>
                <p className="mt-1 text-sm text-muted leading-relaxed">{step.note}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
