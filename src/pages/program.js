import { useTranslation } from 'next-i18next';
import { Box, Typography } from '@mui/material';
import Layout from '@/components/Layout';
import { getI18nStaticProps } from '@/lib/getI18nStaticProps';

export default function ProgramPage() {
  const { t } = useTranslation('common');

  return (
    <Layout>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          textAlign: 'center',
        }}
      >
        <Typography variant="h3" gutterBottom>{t('program-page.title')}</Typography>
      </Box>
    </Layout>
  );
}

export const getStaticProps = getI18nStaticProps(['common']);