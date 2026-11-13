import { useReducer, useRef } from 'react';
import { ResultsList } from '../components/ResultsList';
import { SearchField } from '../components/SearchField';
import type { RepoDetails } from '../types/repo.types';
import { Paginator } from '../components/Paginator';
import { getRepos } from '../api/github';
import { perPage } from '../constants/search.constants';
import { ErrorMessage } from '../components/ErrorMessage';

interface SearchState {
  reposList: RepoDetails[];
  term: string;
  page: number;
  pageCount: number;
  errorMsg: string | null;
}

type SearchAction =
  | {
      type: 'SEARCH';
      payload: { term: string; pageCount: number; reposList: RepoDetails[] };
    }
  | { type: 'PAGINATE'; payload: { reposList: RepoDetails[]; page: number } }
  | { type: 'SET_ERROR'; payload: { errorMsg: string | null } };

const initSearchState: SearchState = {
  reposList: [],
  term: '',
  page: 1,
  pageCount: 0,
  errorMsg: null,
};

function searchReducer(state: SearchState, action: SearchAction) {
  switch (action.type) {
    case 'SEARCH':
      return { ...state, ...action.payload, page: 1, errorMsg: null };

    case 'PAGINATE':
      return { ...state, ...action.payload, errorMsg: null };

    case 'SET_ERROR':
      return { ...state, reposList: [], errorMsg: action.payload.errorMsg };

    default:
      return state;
  }
}

export function SearchPage() {
  const abortControllerRef = useRef<AbortController | null>(null);

  const [state, dispatch] = useReducer(searchReducer, initSearchState);

  const handleSearch = async (val: string) => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    abortControllerRef.current = new AbortController();

    try {
      const res = await getRepos(val, 1, abortControllerRef.current.signal);

      const pageCnt = Math.ceil(res.count / perPage);

      dispatch({
        type: 'SEARCH',
        payload: { term: val, pageCount: pageCnt, reposList: res.repos },
      });
    } catch (e: any) {
      dispatch({ type: 'SET_ERROR', payload: { errorMsg: e.message } });
    }
  };

  const handlePagination = async (e, nextPage: number) => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    abortControllerRef.current = new AbortController();

    try {
      const res = await getRepos(
        state.term,
        nextPage,
        abortControllerRef.current.signal
      );
      dispatch({
        type: 'PAGINATE',
        payload: { page: nextPage, reposList: res.repos },
      });
    } catch (e: any) {
      dispatch({ type: 'SET_ERROR', payload: { errorMsg: e.message } });
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
        {state.errorMsg ? (
          <ErrorMessage msg={state.errorMsg} />
        ) : (
          <ResultsList repos={state.reposList} />
        )}
      </section>
      {state.reposList.length > 0 && (
        <section>
          <Paginator
            page={state.page}
            count={state.pageCount}
            handlePageChange={handlePagination}
          />
        </section>
      )}
    </section>
  );
}
