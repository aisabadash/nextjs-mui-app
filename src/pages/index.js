import { useTranslation } from 'next-i18next';
import { Box, Typography } from '@mui/material';
import { getI18nStaticProps } from '@/lib/getI18nStaticProps';

export default function HomePage() {
  const { t } = useTranslation('common');

  return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          textAlign: 'center',
        }}
      >
        <Typography variant="h3" gutterBottom>{t('home-page.title')}</Typography>
      </Box>
  );
}

export const getStaticProps = getI18nStaticProps(['common']);