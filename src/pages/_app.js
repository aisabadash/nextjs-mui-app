import { appWithTranslation } from 'next-i18next';
import { ThemeProvider, CssBaseline, InitColorSchemeScript } from '@mui/material';
import { AppCacheProvider } from '@mui/material-nextjs/v15-pagesRouter';
import { Roboto } from 'next/font/google';
import theme from '@/theme';
import '@/styles/globals.css';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin', 'latin-ext', 'cyrillic'],
  display: 'swap',
});

function App({ Component, pageProps }) {
  return (
    // <AppCacheProvider {...props}> // можливо потрібно буде
    <AppCacheProvider>
      <div className={roboto.className}>
        <ThemeProvider theme={theme} disableTransitionOnChange>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </div>
    </AppCacheProvider>
  );
}

export default appWithTranslation(App);
