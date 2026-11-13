import { perPage, repoSearchApi } from '../constants/search.constants';
import type { ReposData } from '../types/repo.types';

export const getRepos = async (
  term: string,
  page: number,
  abortSignal: AbortSignal
): Promise<ReposData> => {
  console.log('term', term);
  const params = {
    q: term,
    page: page.toString(),
    per_page: perPage.toString(),
    sort: 'stars',
    order: 'desc',
  };
  const response = await fetch(
    repoSearchApi + '?' + new URLSearchParams(params),
    {
      signal: abortSignal,
    }
  );
  if (!response.ok) {
    const text = await response.text();
    throw new Error(response.status + ' ' + text);
  }
  const data = await response.json();
  const repos = data.items?.map((item: any) => ({
    name: item.name,
    description: item.description,
    avatar: item.owner?.avatar_url,
  }));
  console.log(repos);
  return {
    repos,
    count: data.total_count < 1000 ? data.total_count : 1000, // Only the first 1000 search results are available from api
  };
};
