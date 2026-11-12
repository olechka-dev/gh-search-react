export interface RepoDetails {
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
  handlePageChange: (event: React.ChangeEvent<unknown>, page: number) => void;
}
