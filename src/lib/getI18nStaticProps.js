import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getI18nStaticProps = (namespaces = ['common']) => {
   return async ({ locale }) => ({
      props: {
         ...(await serverSideTranslations(locale, namespaces)),
      },
   });
};