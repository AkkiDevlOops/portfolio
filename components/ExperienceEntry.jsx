export default function ExperienceEntry({ item }) {
  return (
    <a
      href={item.href}
      target="_blank"
      rel="noreferrer"
      className="flex flex-col gap-1 border-t border-surface py-4 first:border-t-0 first:pt-0 sm:flex-row sm:items-baseline sm:justify-between"
    >
      <div>
        <span className="font-mono text-sm text-paper">{item.company}</span>
        <span className="ml-2 text-sm text-muted">— {item.role}</span>
      </div>
      <span className="text-xs text-muted">{item.period}</span>
    </a>
  );
}
