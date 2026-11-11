import { useState } from 'react';
import { ResultsList } from '../components/ResultsList';
import { SearchField } from '../components/SearchField';
import { repoSearchApi } from '../constants/search.constants';
import type { RepoData } from '../types/repo.types';

export function SearchPage() {
  const [reposList, setReposList] = useState<RepoData[]>([]);

  const searchRepos = async (val: string) => {
    console.log('val', val);
    const params = {
      q: val,
      page: '1',
      per_page: '10',
      sort: 'stars',
      order: 'desc',
    };
    const response = await fetch(
      repoSearchApi + '?' + new URLSearchParams(params)
    );
    const data = await response.json();
    const repos = data.items?.map((item: any) => ({
      name: item.name,
      description: item.description,
      avatar: item.owner?.avatar_url,
    }));
    console.log(repos);
    setReposList(repos);
  };

  return (
    <section
      aria-labelledby="search-page-title"
      className="mx-auto flex w-4/5 flex-col gap-9 min-[721px]:w-[650px]"
    >
      <header>
        <h1 id="search-page-title">Explore repositories on GitHub</h1>
      </header>
      <section aria-label="Search field">
        <SearchField searchRepos={searchRepos} />
      </section>
      <section aria-label="Repository search results">
        <ResultsList repos={reposList} />
      </section>
    </section>
  );
}
