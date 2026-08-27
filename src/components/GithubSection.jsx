import { Github } from 'lucide-react'
import Reveal from './Reveal.jsx'

export default function GithubSection() {
  return (
    <section className="py-20 border-t border-line">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="card-surface rounded-2xl p-8 sm:p-12 text-center flex flex-col items-center">
          <p className="eyebrow mb-3">$ open github.com/Tabiullahkhan</p>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight max-w-lg">
            &quot;I don&apos;t just learn technologies — I build with them.&quot;
          </h2>
          <p className="mt-3 text-muted max-w-md">
            Every project here has a repository behind it. Explore the commits, the structure,
            and how each one actually runs.
          </p>
          <a
            href="https://github.com/Tabiullahkhan"
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-flex items-center gap-2 rounded-lg bg-teal px-5 py-3 text-sm font-semibold text-[#06110f] hover:brightness-110 transition"
          >
            <Github size={18} /> Visit My GitHub
          </a>
        </Reveal>
      </div>
    </section>
  )
}
