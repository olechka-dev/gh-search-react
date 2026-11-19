import GithubNoResults from './../assets/github-line.svg?react';

export function NoResults({ term }: { term: string }) {
  return (
    <>
      <GithubNoResults className="mx-auto h-8 w-8 text-border-strong" />
      <p className="my-2 text-center text-border-strong">
        No results for <b>{term}</b>
      </p>
    </>
  );
}
