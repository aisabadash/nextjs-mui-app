import { appWithTranslation } from 'next-i18next';
import { ThemeProvider, CssBaseline, InitColorSchemeScript } from '@mui/material';
import { AppCacheProvider } from '@mui/material-nextjs/v15-pagesRouter';
import { Roboto } from 'next/font/google';
import theme from '@/theme';
import '@/styles/globals.css';
import Layout from '@/components/Layout';
import nextI18nextConfig from '../../next-i18next.config';


const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin', 'latin-ext', 'cyrillic'],
  display: 'swap',
});

function App({ Component, pageProps }) {
  return (
    <AppCacheProvider>
      <div className={roboto.className}>
        <ThemeProvider theme={theme} disableTransitionOnChange>
          <CssBaseline />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </div>
    </AppCacheProvider>
  );
}

export default appWithTranslation(App, nextI18nextConfig);