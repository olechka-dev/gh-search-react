import GithubGhost from './../assets/github-ghost.svg?react';

export function ErrorMessage({ msg }: { msg: string }) {
  return (
    <>
      <p className="my-2 text-center">
        <span className="text-xl text-foreground-muted">
          Something went wrong
        </span>
        <GithubGhost
          aria-hidden="true"
          className="ml-2 inline-block size-[1.6em] -translate-y-[0.1em] align-middle text-border-strong"
        />
      </p>
      <p>{msg}</p>
    </>
  );
}
