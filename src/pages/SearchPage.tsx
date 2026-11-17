import { useState } from 'react';
import { ResultsList } from '../components/ResultsList';
import { SearchField } from '../components/SearchField';
import { Paginator } from '../components/Paginator';
import { getRepos } from '../api/github';
import { perPage } from '../constants/search.constants';
import { ErrorMessage } from '../components/ErrorMessage';
import {
  keepPreviousData,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';

export function SearchPage() {
  const [page, setPage] = useState(1);
  const [term, setTerm] = useState('');

  const queryClient = useQueryClient();

  const { isError, error, data, isPlaceholderData } = useQuery({
    queryKey: ['repos', term, page],
    queryFn: ({ signal }) => getRepos(term, page, signal),
    enabled: term.trim().length > 0,
    placeholderData: (previousData) => {
      console.log('prev data', previousData);
      return term.trim().length > 0
        ? keepPreviousData(previousData)
        : undefined;
    },
  });

  const pageCount = Math.ceil((data?.count ?? 0) / perPage);

  const onTermChange = (val: string) => {
    setTerm(val);
    setPage(1);
    if (!val) {
      //queryClient.removeQueries({ queryKey: ['repos'] });
      queryClient.setQueriesData(
        { queryKey: ['repos'] },
        { repos: [], count: 0 }
      );
    }
  };

  return (
    <section
      aria-labelledby="search-page-title"
      className="mx-auto my-9 flex w-4/5 flex-col gap-9 min-[721px]:w-[650px]"
    >
      <header>
        <h1 id="search-page-title">Explore repositories on GitHub</h1>
      </header>
      <section aria-label="Search field">
        <SearchField searchRepos={onTermChange} />
      </section>
      <section aria-label="Repository search results">
        {isError ? (
          <ErrorMessage msg={error.message} />
        ) : (
          <div
            className={
              isPlaceholderData && !!data.repos.length
                ? 'relative min-h-20'
                : 'relative'
            }
          >
            <div aria-busy={isPlaceholderData && !!data?.repos.length}>
              <ResultsList repos={data?.repos || []} />
            </div>
            {isPlaceholderData && !!data?.repos.length && (
              <div
                aria-hidden="true"
                className="absolute inset-0 z-10 min-h-20 rounded-card bg-surface/40 backdrop-blur-[2px] backdrop-grayscale"
              />
            )}
          </div>
        )}
      </section>
      {/* use isMemo for calculation? */}
      {!!data?.repos.length && pageCount > 1 && (
        <section>
          <Paginator
            page={page}
            isDisabled={isPlaceholderData}
            count={pageCount}
            handlePageChange={(e, nextPage) => {
              setPage(nextPage);
            }}
          />
        </section>
      )}
    </section>
  );
}
