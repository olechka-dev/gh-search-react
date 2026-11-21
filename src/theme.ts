import { createTheme } from '@mui/material/styles';

// Both schemes use the existing CSS tokens, which change with the .dark class.
const palette = {
  primary: {
    main: 'var(--app-primary)',
    dark: 'var(--app-primary-hover)',
    contrastText: 'var(--app-primary-foreground)',
  },
  success: { main: 'var(--app-success)' },
  warning: { main: 'var(--app-warning)' },
  error: { main: 'var(--app-danger)' },
  text: {
    primary: 'var(--app-foreground)',
    secondary: 'var(--app-foreground-muted)',
  },
  background: { default: 'var(--app-background)', paper: 'var(--app-surface)' },
  divider: 'var(--app-border)',
  action: { hover: 'var(--app-surface-hover)' },
};

export const theme = createTheme({
  cssVariables: { nativeColor: true, colorSchemeSelector: 'class' },
  colorSchemes: { light: { palette }, dark: { palette } },
  typography: { fontFamily: 'var(--font-sans)' },
  shape: { borderRadius: 8 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          boxShadow: 'var(--shadow-card)',
          '&:hover, &:active, &.Mui-focusVisible': {
            boxShadow: 'var(--shadow-card)',
          },
        },
        sizeSmall: { height: 40 },
      },
    },
    MuiButtonGroup: {
      styleOverrides: {
        root: {
          boxShadow: 'var(--shadow-card)',
          variants: [{ props: { size: 'small' }, style: { height: 40 } }],
        },
      },
    },
    MuiPaper: {
      styleOverrides: { rounded: { borderRadius: 'var(--radius-card)' } },
    },
    MuiSelect: {
      styleOverrides: {
        root: { backgroundColor: 'var(--app-surface)' },
        select: { display: 'flex' },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          variants: [
            {
              props: { size: 'small', multiline: false },
              style: { height: 40 },
            },
          ],
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: 'var(--app-surface)',
          boxShadow: 'var(--shadow-card)',
          '&.MuiInputBase-sizeSmall input.MuiOutlinedInput-input': {
            boxSizing: 'border-box',
            height: '100%',
            paddingBlock: 0,
            paddingBottom: '2px',
          },
          '&:hover:not(.Mui-disabled):not(.Mui-focused) .MuiOutlinedInput-notchedOutline': {
            borderColor: 'var(--app-border-strong)',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderWidth: '1px',
          },
        },
        notchedOutline: { borderColor: 'var(--app-border)' },
        input: {
          height: 'auto',
          border: 0,
          borderRadius: 0,
          backgroundColor: 'transparent',
        },
      },
    },
  },
});
