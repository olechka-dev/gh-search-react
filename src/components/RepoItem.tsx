import type { RepoData } from "../types/repo.types";

export function RepoItem({name, description}: RepoData) {
    return (
        <article className="rounded-card border border-border bg-surface px-5 py-4 shadow-card transition-shadow hover:shadow-card-hover">
            <header>
                <h2 className="text-base font-semibold leading-snug text-foreground">{name}</h2>
            </header>
            <p className="mt-1 text-sm leading-5 text-foreground-muted overflow-hidden text-ellipsis whitespace-nowrap">{description}</p>
        </article>
    );
}
