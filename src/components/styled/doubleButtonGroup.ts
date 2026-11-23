import { Button, ButtonGroup } from '@mui/material';
import { styled } from '@mui/material/styles';

interface HalfButtonProps {
  isSelected: boolean;
}

export const HalfButton = styled(Button, {
  shouldForwardProp: (prop) =>
    !(
      ['isSelected', 'ownerState', 'theme', 'sx', 'as'] as PropertyKey[]
    ).includes(prop),
})<HalfButtonProps>(({ isSelected, theme }) => {
  const backgroundColor = isSelected
    ? 'var(--app-primary)'
    : 'var(--app-surface)';
  return {
    backgroundColor,
    color: isSelected
      ? theme.palette.primary.contrastText
      : theme.palette.text.primary,
    '&:hover': {
      backgroundColor,
      borderColor: theme.palette.secondary.dark,
    },
  };
});

export const DoubleButtonGroup = styled(ButtonGroup)({
  borderColor: 'var(--app-border)',
  borderWidth: '1px',
  borderStyle: 'solid',
  flexShrink: 0,
  '& .MuiButtonGroup-grouped': {
    height: '100%',
  },
  '&:hover': {
    borderColor: 'var(--app-border-strong)',
  },
});
