import type { RepoDetails } from '../types/repo.types';
import { RepoItem } from './RepoItem';

export function ResultsList({ repos }: { repos: RepoDetails[] }) {
  return (
    <div className="flex flex-col gap-2">
      {repos.map((item) => (
        <RepoItem
          // if item.avatar changes we need to remount RepoItem to rerun useState(avatar || greyPlaceholder) inside it
          key={item.id + (item.avatar ?? '')}
          name={item.name}
          description={item.description}
          avatar={item.avatar}
          repoUrl={item.repoUrl}
        />
      ))}
    </div>
  );
}
