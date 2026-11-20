import type { SortDirection, SortOptions } from '../types/repo.types';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import ForkRightRoundedIcon from '@mui/icons-material/ForkRightRounded';
import ReportOutlinedIcon from '@mui/icons-material/ReportOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import type { ComponentType } from 'react';
import type { SvgIconProps } from '@mui/material';

export const repoSearchApi = 'https://api.github.com/search/repositories';

export const perPage = 10;

export const greyPlaceholder = `data:image/svg+xml,${encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50"><rect width="50" height="50" fill="#afb8c1"/></svg>'
)}`;

export const sortLabels: Record<SortOptions, string> = {
  forks: 'Forks',
  'help-wanted-issues': 'Help-Wanted Issues',
  stars: 'Stars',
  updated: 'Updated At',
};

export const sortIcons: Record<SortOptions, ComponentType<SvgIconProps>> = {
  forks: ForkRightRoundedIcon,
  'help-wanted-issues': ReportOutlinedIcon,
  stars: StarBorderRoundedIcon,
  updated: CalendarTodayOutlinedIcon,
};

