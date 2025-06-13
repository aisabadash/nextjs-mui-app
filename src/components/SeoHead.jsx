import Head from 'next/head';
import { useTranslation } from 'next-i18next';

export default function SeoHead() {
   const { t } = useTranslation('common');

   return (
      <Head>
         <title>{t('meta_title')}</title>
         <meta name="description" content={t('meta_description')} />
      </Head>
   );
}