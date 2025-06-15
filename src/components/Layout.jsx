import AppNavBar from './AppNavBar';
import SeoHead from './SeoHead';
import { Container, Box } from '@mui/material';

const Layout = ({ children }) => {
  return (
    <>
      <SeoHead />
      <AppNavBar />
      <Box component="main">
         <Container maxWidth="lg">
            {children}
         </Container>
      </Box>
    </>
  );
};

export default Layout;