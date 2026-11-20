import { Pagination } from '@mui/material';

interface PaginationProps {
  page: number;
  count: number;
  isDisabled: boolean;
  handlePageChange: (event: React.ChangeEvent<unknown>, page: number) => void;
}

export function Paginator({
  page,
  count,
  isDisabled,
  handlePageChange,
}: PaginationProps) {
  return (
    <div className="flex justify-center">
      <Pagination
        className="mx-auto"
        color="primary"
        count={count}
        page={page}
        disabled={isDisabled}
        onChange={handlePageChange}
      />
    </div>
  );
}
