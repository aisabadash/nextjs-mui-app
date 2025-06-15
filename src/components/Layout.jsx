import AppNavBar from './AppNavBar';
import SeoHead from './SeoHead';
import { Container, Box } from '@mui/material';

const Layout = ({ children }) => {
  return (
    <>
      <SeoHead />
      <AppNavBar />
      <Box component="main" sx={{ minHeight: '100vh', padding: 2, maxWidth: 'lg', mx: 'auto' }}>
          <Container>
              {children}
          </Container>
      </Box>
    </>
  );
};

export default Layout;