import { createTheme } from '@mui/material/styles'

// Both schemes use the existing CSS tokens, which change with the .dark class.
const palette = {
  primary: { main: 'var(--app-primary)', dark: 'var(--app-primary-hover)', contrastText: 'var(--app-primary-foreground)' },
  success: { main: 'var(--app-success)' },
  warning: { main: 'var(--app-warning)' },
  error: { main: 'var(--app-danger)' },
  text: { primary: 'var(--app-foreground)', secondary: 'var(--app-foreground-muted)' },
  background: { default: 'var(--app-background)', paper: 'var(--app-surface)' },
  divider: 'var(--app-border)',
  action: { hover: 'var(--app-surface-hover)' },
}

export const theme = createTheme({
  cssVariables: { nativeColor: true, colorSchemeSelector: 'class' },
  colorSchemes: { light: { palette }, dark: { palette } },
  typography: { fontFamily: 'var(--font-sans)' },
  shape: { borderRadius: 8 },
  components: {
    MuiButton: { styleOverrides: { root: { textTransform: 'none' } } },
    MuiPaper: { styleOverrides: { rounded: { borderRadius: 'var(--radius-card)' } } },
  },
})
