export interface RepoDetails {
  id: number;
  name: string;
  description: string;
  avatar?: string;
  repoUrl: string;
}

export interface RawRepoDetails {
  id: number;
  name: string;
  description: string;
  html_url: string;
  owner: {
    avatar_url?: string;
  };
}

export interface ReposData {
  repos: RepoDetails[];
  count: number; // for pagination which supports max 1000 results
  total: number; // total count existing in github
}


export type SortOptions = 'stars' | 'forks' | 'help-wanted-issues' | 'updated';

export type SortDirection = 'asc' | 'desc';

