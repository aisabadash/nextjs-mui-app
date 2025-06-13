import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import Link from 'next/link';
import { AppBar, Box, Button, Card, CardMedia, Container, Grid, Toolbar, Typography } from '@mui/material';
import { Link as ScrollLink } from 'react-scroll';
import SeoHead from '@/components/SeoHead';

export default function Home() {
  const { t } = useTranslation('common');

  return (
    <>
      <SeoHead />
    
      <AppBar position="sticky">
        <Container maxWidth="lg" disableGutters>
          <Toolbar sx={{ justifyContent: 'center', gap: 2 }}>
            <ScrollLink to="about" smooth={true} duration={500} offset={-80}>
              <Button color="inherit">{t('menu_about')}</Button>
            </ScrollLink>
            <ScrollLink to="gallery" smooth={true} duration={500} offset={-80}>
              <Button color="inherit">{t('menu_gallery')}</Button>
            </ScrollLink>
            <ScrollLink to="contacts" smooth={true} duration={500} offset={-80}>
              <Button color="inherit">{t('menu_contacts')}</Button>
            </ScrollLink>
          </Toolbar>
        </Container>
      </AppBar> 

      <Button component={Link} href="/" locale="uk">Українська</Button>
      <Button component={Link} href="/" locale="cs">Čeština</Button>
      <Button component={Link} href="/" locale="en">English</Button>

      <Typography variant="h3" gutterBottom>{t('welcome')}</Typography>
      
      {/* <Box id="about" my={5}>
        <Typography variant="h4" gutterBottom>{t('about_title')}</Typography>
      </Box>

      <Box id="gallery" my={5}>
        <Typography variant="h4" gutterBottom>{t('gallery_title')}</Typography>
      </Box>

      <Box id="contacts" my={5}>
        <Typography variant="h4" gutterBottom>{t('contacts_title')}</Typography>
      </Box>     */}
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
