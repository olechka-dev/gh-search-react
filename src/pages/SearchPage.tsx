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
  isLoading: boolean;
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
  | { type: 'SET_ERROR'; payload: { errorMsg: string | null } }
  | { type: 'SET_LOADING'; payload: { isLoading: boolean } };

const initSearchState: SearchState = {
  reposList: [],
  isLoading: false,
  term: '',
  page: 1,
  pageCount: 0,
  errorMsg: null,
};

function searchReducer(state: SearchState, action: SearchAction) {
  switch (action.type) {
    case 'SEARCH':
      return {
        ...state,
        ...action.payload,
        page: 1,
        errorMsg: null,
        isLoading: false,
      };

    case 'PAGINATE':
      return { ...state, ...action.payload, errorMsg: null, isLoading: false };

    case 'SET_ERROR':
      return {
        ...state,
        reposList: [],
        errorMsg: action.payload.errorMsg,
        isLoading: false,
      };

    case 'SET_LOADING':
      return { ...state, ...action.payload, errorMsg: null };

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
    dispatch({ type: 'SET_LOADING', payload: { isLoading: true } });

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
    dispatch({ type: 'SET_LOADING', payload: { isLoading: true } });

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
          <div className={state.isLoading ? 'relative min-h-32' : 'relative'}>
            <div aria-busy={state.isLoading}>
              <ResultsList repos={state.reposList} />
            </div>
            {state.isLoading && state.reposList.length > 0 && (
              <div
                aria-hidden="true"
                className="absolute inset-0 z-10 min-h-32 rounded-card bg-surface/40 backdrop-blur-[2px] backdrop-grayscale"
              />
            )}
          </div>
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
