import { useState } from 'react';
import { ResultsList } from '../components/ResultsList';
import { SearchField } from '../components/SearchField';
import type { RepoDetails } from '../types/repo.types';
import { Paginator } from '../components/Paginator';
import { getRepos } from '../api/github';
import { perPage } from '../constants/search.constants';
import { ErrorMessage } from '../components/ErrorMessage';

export function SearchPage() {
  const [reposList, setReposList] = useState<RepoDetails[]>([]);
  const [term, setTerm] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [pageCount, setPageCount] = useState<number>(0);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSearch = async (val: string) => {
    const curPage = 1;
    try {
      const res = await getRepos(val, curPage);

      const pageCnt = Math.ceil(res.count / perPage);

      setReposList(res.repos);
      setTerm(val);
      setPage(curPage);
      setPageCount(pageCnt);
      setErrorMsg(null);
    } catch (e: any) {
      setErrorMsg(e.message);
    }
  };

  const handlePagination = async (e, nextPage: number) => {
    try {
      const res = await getRepos(term, nextPage);
      console.log(res);
      setReposList(res.repos);
      setPage(nextPage);
      setErrorMsg(null);
    } catch (e: any) {
      setErrorMsg(e.message);
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
        <SearchField searchRepos={handleSearch} />
      </section>
      <section aria-label="Repository search results">
        {errorMsg ? (
          <ErrorMessage msg={errorMsg} />
        ) : (
          <ResultsList repos={reposList} />
        )}
      </section>
      {reposList.length > 0 && (
        <section>
          <Paginator
            page={page}
            count={pageCount}
            handlePageChange={handlePagination}
          />
        </section>
      )}
    </section>
  );
}
