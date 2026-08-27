import { useEffect } from 'react'
import { X, Github, ExternalLink } from 'lucide-react'



export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return

    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [project, onClose])

  if (!project) return null
  return (
    <div
      className="fixed inset-0 z-[60] flex items-start sm:items-center justify-center p-4 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} details`}
    >
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />

      <div className="relative card-surface w-full max-w-2xl rounded-2xl p-6 sm:p-8 my-8 shadow-2xl">
        <button
          onClick={onClose}
          aria-label="Close project details"
          className="absolute top-5 right-5 text-muted hover:text-text transition-colors"
        >
          <X size={22} />
        </button>

        <p className="eyebrow">{project.category}</p>
        <h3 className="mt-2 text-2xl font-bold">{project.title}</h3>
        <p className="mt-2 text-muted">{project.description}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="text-xs font-mono-tight rounded border border-line px-2.5 py-1 text-muted">
              {t}
            </span>
          ))}
        </div>

        {detail && (
          <div className="mt-7 space-y-5 text-sm">
            <div>
              <h4 className="font-mono-tight text-xs uppercase tracking-wide text-teal mb-1.5">Problem</h4>
              <p className="text-text/90 leading-relaxed">{detail.problem}</p>
            </div>
            <div>
              <h4 className="font-mono-tight text-xs uppercase tracking-wide text-teal mb-1.5">Solution</h4>
              <p className="text-text/90 leading-relaxed">{detail.solution}</p>
            </div>
            <div>
              <h4 className="font-mono-tight text-xs uppercase tracking-wide text-teal mb-1.5">Key Features</h4>
              <ul className="space-y-1.5">
                {detail.features.map((f) => (
                  <li key={f} className="text-text/90 leading-relaxed pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-muted">
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-mono-tight text-xs uppercase tracking-wide text-teal mb-1.5">
                Architecture &amp; Deployment
              </h4>
              <p className="text-text/90 leading-relaxed">{detail.architecture}</p>
            </div>
          </div>
        )}

        <div className="mt-8 flex flex-wrap gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-line px-4 py-2.5 text-sm hover:border-teal-dim hover:text-teal transition"
            >
              <Github size={16} /> View Repository
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-teal px-4 py-2.5 text-sm font-semibold text-[#06110f] hover:brightness-110 transition"
            >
              <ExternalLink size={16} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
