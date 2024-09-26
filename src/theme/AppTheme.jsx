import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { ligthTheme } from './lightTheme';

export const AppTheme = ({children}) => {
  return (
    <ThemeProvider theme={ligthTheme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
