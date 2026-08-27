import { ChevronRight } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { pipeline } from '../data/skills.js'

export default function DevOpsSection() {
  return (
    <section className="py-24 md:py-32 border-t border-line relative overflow-hidden">
      <div className="absolute inset-0 grid-fade opacity-60 pointer-events-none" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 relative">
        <Reveal className="max-w-xl mb-14">
          <p className="eyebrow mb-4">$ ./deploy.sh --env production</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Cloud &amp; DevOps
          </h2>
          <p className="mt-3 text-muted">
            The part after the code works: I containerize applications, push images to a
            registry, and deploy multi-container apps behind Nginx on AWS.
          </p>
        </Reveal>

        <Reveal>
          <div className="card-surface rounded-2xl p-6 sm:p-8 overflow-x-auto">
            <div className="flex items-center gap-1 min-w-max font-mono-tight text-sm">
              {pipeline.map((step, i) => (
                <div key={step.label} className="flex items-center gap-1">
                  <div className="flex flex-col items-center px-3 py-3 rounded-xl border border-line bg-surface min-w-[92px]">
                    <span className="text-teal font-semibold">{step.label}</span>
                    <span className="mt-1 text-[11px] text-muted text-center leading-tight">
                      {step.hint}
                    </span>
                  </div>
                  {i < pipeline.length - 1 && (
                    <ChevronRight className="text-line shrink-0" size={20} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={100} className="mt-6 text-sm text-muted max-w-2xl">
          Each app in my projects that lists Docker or AWS follows this path — code is pushed to
          GitHub, built into a Docker image, pushed to AWS ECR, pulled onto an EC2 instance, and
          served through Nginx.
        </Reveal>
      </div>
    </section>
  )
}
