export interface RepoDetails {
  id: number;
  name: string;
  description: string;
  avatar?: string;
}

export interface ReposData {
  repos: RepoDetails[];
  count: number;
}

export interface PaginationProps {
  page: number;
  count: number;
  isDisabled: boolean;
  handlePageChange: (event: React.ChangeEvent<unknown>, page: number) => void;
}
