import { Pagination } from '@mui/material';
import type { PaginationProps } from '../types/repo.types';

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
