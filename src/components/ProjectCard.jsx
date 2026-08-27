import { Github, ExternalLink, ArrowUpRight } from 'lucide-react'

export default function ProjectCard({ project, onOpen }) {
  return (
    <div className="card-surface group rounded-2xl p-6 flex flex-col hover:border-teal-dim/60 hover:-translate-y-1 transition-all duration-300">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-bold text-lg leading-snug">{project.title}</h3>
        {project.featured && (
          <span className="shrink-0 rounded-full border border-amber/40 bg-amber/10 px-2.5 py-1 text-[11px] font-medium text-amber">
            Featured
          </span>
        )}
      </div>

      <p className="mt-2 text-sm text-muted leading-relaxed flex-1">{project.tagline}</p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.tech.slice(0, 5).map((t) => (
          <span key={t} className="text-[11px] font-mono-tight rounded border border-line px-2 py-1 text-muted">
            {t}
          </span>
        ))}
        {project.tech.length > 5 && (
          <span className="text-[11px] font-mono-tight rounded border border-line px-2 py-1 text-muted">
            +{project.tech.length - 5}
          </span>
        )}
      </div>

      <div className="mt-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-sm text-muted hover:text-text transition-colors"
              aria-label={`${project.title} source on GitHub`}
            >
              <Github size={16} /> Code
            </a>
          ) : (
            <span className="flex items-center gap-1.5 text-sm text-muted/40">
              <Github size={16} /> Code
            </span>
          )}
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-sm text-muted hover:text-text transition-colors"
            >
              <ExternalLink size={16} /> Demo
            </a>
          ) : (
            <span className="flex items-center gap-1.5 text-sm text-muted/40">
              <ExternalLink size={16} /> Demo
            </span>
          )}
        </div>

        <button
          onClick={() => onOpen(project)}
          className="flex items-center gap-1 text-sm font-medium text-teal group-hover:gap-1.5 transition-all"
        >
          Details <ArrowUpRight size={15} />
        </button>
      </div>
    </div>
  )
}
