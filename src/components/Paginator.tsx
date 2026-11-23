import { Pagination, useMediaQuery } from '@mui/material';
import { smallViewportQuery } from '../constants/breakpoints';

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
  const isSmallViewport = useMediaQuery(smallViewportQuery);

  return (
    <div className="flex justify-center">
      <Pagination
        className="mx-auto"
        color="primary"
        count={count}
        siblingCount={isSmallViewport ? 0 : 1}
        size={isSmallViewport ? 'small' : 'medium'}
        page={page}
        disabled={isDisabled}
        onChange={handlePageChange}
      />
    </div>
  );
}
