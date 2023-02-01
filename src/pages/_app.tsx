import { UIProvider } from '@/context/ui';
import '@/styles/globals.css'
import { createTheme, ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import type { AppProps } from 'next/app'
import { lightTheme } from '../themes';
import { darkTheme } from '../themes/dark-theme';
import { EntriesProvider } from '../context/entries';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <EntriesProvider>
      <UIProvider>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline></CssBaseline>
          <Component {...pageProps} />
        </ThemeProvider>
      </UIProvider>
    </EntriesProvider>
  );
}
