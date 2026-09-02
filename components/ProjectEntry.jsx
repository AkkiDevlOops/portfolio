export default function ProjectEntry({ project }) {
  return (
    <div className="border-t border-surface py-6 first:border-t-0 first:pt-0">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <h3 className="font-mono text-base font-medium text-paper">{project.name}</h3>
        <div className="flex gap-4 text-sm text-muted">
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer" className="hover:text-accent">
              Live
            </a>
          )}
          {project.code && (
            <a href={project.code} target="_blank" rel="noreferrer" className="hover:text-accent">
              Code
            </a>
          )}
        </div>
      </div>
      <p className="mt-2 max-w-content text-sm leading-relaxed text-muted">
        {project.description}
      </p>
      <ul className="mt-3 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full border border-surface px-2.5 py-1 text-xs text-muted"
          >
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );
}
