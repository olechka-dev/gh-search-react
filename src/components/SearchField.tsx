import { useRef } from 'react';

export function SearchField({
  searchRepos,
}: {
  searchRepos: (val: string) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className="flex w-full overflow-hidden rounded-control border border-border bg-surface shadow-card focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20"
      onSubmit={(event) => {
        event.preventDefault();
        searchRepos(inputRef.current?.value.trim() ?? '');
      }}
    >
      <input
        aria-label="Search repositories"
        className="min-w-0 flex-1 rounded-none border-0 bg-transparent px-4 shadow-none focus:border-0 focus:outline-none"
        placeholder="Find a repository..."
        ref={inputRef}
      />
      <button
        className="shrink-0 rounded-none border-0 bg-primary px-6 text-primary-foreground shadow-none hover:border-0 hover:bg-primary-hover focus-visible:outline-primary-foreground"
        type="submit"
      >
        Search
      </button>
    </form>
  );
}
