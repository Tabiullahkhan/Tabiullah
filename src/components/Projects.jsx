import { useMemo, useState } from 'react'
import Reveal from './Reveal.jsx'
import ProjectCard from './ProjectCard.jsx'
import ProjectModal from './ProjectModal.jsx'
import { projects, categories } from '../data/projects.js'

const INITIAL_COUNT = 6

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [showAll, setShowAll] = useState(false)
  const [openProject, setOpenProject] = useState(null)

  const filtered = useMemo(
    () => (activeCategory === 'all' ? projects : projects.filter((p) => p.category === activeCategory)),
    [activeCategory],
  )

  const visible = showAll ? filtered : filtered.slice(0, INITIAL_COUNT)

  return (
    <section id="projects" className="py-24 md:py-32 border-t border-line">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="max-w-xl mb-10">
          <p className="eyebrow mb-4">$ ls ./projects</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Featured Projects</h2>
          <p className="mt-3 text-muted">
            A running list of things I&apos;ve built — updated as I ship more.
          </p>
        </Reveal>

        <Reveal className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id)
                setShowAll(false)
              }}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                activeCategory === cat.id
                  ? 'border-teal-dim bg-teal/10 text-teal font-medium'
                  : 'border-line text-muted hover:text-text hover:border-text/20'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((project, i) => (
            <Reveal key={project.id} delay={(i % 3) * 80}>
              <ProjectCard project={project} onOpen={setOpenProject} />
            </Reveal>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-muted text-center py-12">No projects in this category yet.</p>
        )}

        {!showAll && filtered.length > INITIAL_COUNT && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setShowAll(true)}
              className="rounded-lg border border-line px-6 py-3 text-sm font-medium hover:border-teal-dim hover:text-teal transition"
            >
              View All Projects
            </button>
          </div>
        )}
      </div>

      <ProjectModal project={openProject} onClose={() => setOpenProject(null)} />
    </section>
  )
}
