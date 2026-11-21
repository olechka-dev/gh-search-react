import {
  Button,
  ButtonGroup,
  FormControl,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Select,
} from '@mui/material';
import type { SortDirection, SortOptions } from '../types/repo.types';
import {
  sortLabels,
  sortIcons,
  directionIcons,
} from '../constants/search.constants';

interface SortPanelProps {
  reposTotalCount: number;
  sortBy: SortOptions;
  direction: SortDirection;
  onSortChange: (val: SortOptions) => void;
  onDirectionChange: (val: SortDirection) => void;
}

export function SortPanel({
  reposTotalCount,
  sortBy,
  direction,
  onSortChange,
  onDirectionChange,
}: SortPanelProps) {
  return (
    <div className="flex flex-row justify-between">
      <span className="inline-flex items-center text-foreground-muted">
        {reposTotalCount} repositories
      </span>
      <div className="flex flex-row items-center justify-between gap-2">
        <span className="text-foreground-muted">Sort by:</span>

        <FormControl sx={{ m: 0, minWidth: 214 }} size="small">
          <Select
            id="demo-select-small"
            value={sortBy}
            onChange={(e) => {
              onSortChange(e.target.value);
            }}
            inputProps={{ 'aria-label': 'Sort by' }}
            MenuProps={{
              slotProps: {
                paper: {
                  sx: {
                    mt: '8px',
                  },
                },
              },
            }}
          >
            {(Object.keys(sortLabels) as SortOptions[]).map((key) => {
              const Icon = sortIcons[key];
              return (
                <MenuItem value={key}>
                  <ListItemIcon className="mr-1.5 inline-flex min-w-2.5 items-center">
                    <Icon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>{sortLabels[key as SortOptions]}</ListItemText>
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>

        <ButtonGroup size="small" disableElevation aria-label="Sort direction">
          {(Object.keys(directionIcons) as SortDirection[]).map((key) => {
            const Icon = directionIcons[key];
            return (
              <Button
                aria-label={key}
                variant="contained"
                className={key === direction ? 'bg-primary' : 'bg-surface'}
                onClick={() => {
                  onDirectionChange(key);
                }}
              >
                <Icon
                  className={
                    key === direction
                      ? 'text-primary-foreground'
                      : 'text-foreground'
                  }
                  fontSize="small"
                />
              </Button>
            );
          })}
        </ButtonGroup>
      </div>
    </div>
  );
}
