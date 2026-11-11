import type { RepoData } from '../types/repo.types';

export function RepoItem({ name, description }: RepoData) {
  return (
    <article className="rounded-card border border-border bg-surface px-5 py-4 shadow-card transition-shadow hover:shadow-card-hover">
      <header>
        <h2 className="text-base leading-snug font-semibold text-foreground">
          {name}
        </h2>
      </header>
      <p className="mt-1 overflow-hidden text-sm leading-5 text-ellipsis whitespace-nowrap text-foreground-muted">
        {description}
      </p>
    </article>
  );
}
