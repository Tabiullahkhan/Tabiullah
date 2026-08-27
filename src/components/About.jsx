import Reveal from './Reveal.jsx'
import { stats } from '../data/skills.js'

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 grid md:grid-cols-5 gap-12">
        <Reveal className="md:col-span-2">
          <p className="eyebrow mb-4">$ cd ./about</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">About Me</h2>
        </Reveal>

        <Reveal delay={100} className="md:col-span-3">
          <p className="text-lg text-text/90 leading-relaxed">
            I&apos;m a Computer Science student who enjoys building real-world applications and
            learning how software actually moves from a local dev environment into production. I
            spend most of my time in the MERN stack, but the part I care about most is what
            happens after the code works: containerizing it, pushing it through a registry, and
            getting it running reliably on a server.
          </p>
          <p className="mt-5 text-muted leading-relaxed">
            Right now I&apos;m focused on full-stack development, cloud computing, and DevOps —
            practicing with Linux, AWS, Docker and automation on real projects rather than just
            tutorials. I&apos;m actively building, deploying, and iterating, and I add something
            new to this list often.
          </p>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="card-surface rounded-xl px-4 py-5 text-center">
                <div className="font-mono-tight text-2xl font-bold text-teal">{s.value}</div>
                <div className="mt-1 text-xs text-muted">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
