import { useRef } from 'react';

export function SearchField({
  searchRepos,
}: {
  searchRepos: (val: string) => Promise<void>;
}) {
  const inputRef = useRef<HTMLInputElement>(null);

  const onSearch = async () => {
    const val = inputRef.current?.value?.trim();
    if (val) {
      await searchRepos(val);
    }
  };

  return (
    <div className="flex w-full overflow-hidden rounded-control border border-border bg-surface shadow-card focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20">
      <input
        className="min-w-0 flex-1 rounded-none border-0 bg-transparent px-4 shadow-none focus:border-0 focus:outline-none"
        placeholder="Find a repository..."
        ref={inputRef}
        onKeyDown={async (event) => {
          if (event.key === 'Enter') {
            await onSearch();
          }
        }}
      />
      <button
        className="shrink-0 rounded-none border-0 bg-primary px-6 text-primary-foreground shadow-none hover:border-0 hover:bg-primary-hover focus-visible:outline-primary-foreground"
        type="button"
        onClick={onSearch}
      >
        Search
      </button>
    </div>
  );
}
