import { Button, ButtonGroup } from '@mui/material';
import { styled } from '@mui/material/styles';

interface HalfButtonProps {
  backgroundColor: string;
  isSelected: boolean;
}

export const HalfButton = styled(Button, {
  shouldForwardProp: (prop) =>
    !(
      [
        'backgroundColor',
        'isSelected',
        'ownerState',
        'theme',
        'sx',
        'as',
      ] as PropertyKey[]
    ).includes(prop),
})<HalfButtonProps>(({ backgroundColor, isSelected, theme }) => ({
  backgroundColor,
  color: isSelected
    ? theme.palette.primary.contrastText
    : theme.palette.text.primary,
  '&:hover': {
    backgroundColor,
    borderColor: theme.palette.secondary.dark,
  },
}));

export const DoubleButtonGroup = styled(ButtonGroup)({
  borderColor: 'var(--app-border)',
  borderWidth: '1px',
  borderStyle: 'solid',
  '& .MuiButtonGroup-grouped': {
    height: '100%',
  },
  '&:hover': {
    borderColor: 'var(--app-border-strong)',
  },
});
