// import AppNavBar from './AppNavBar';
// import SeoHead from './SeoHead';
// import { Container, Box } from '@mui/material';

// const Layout = ({ children }) => {
//   return (
//     <>
//       <SeoHead />
//       <AppNavBar />
//       <Box component="main" sx={{ minHeight: '100vh', padding: 2, maxWidth: 'lg', mx: 'auto' }}>
//           <Container>
//               {children}
//           </Container>
//       </Box>
//     </>
//   );
// };

// export default Layout;


import AppNavBar from './AppNavBar';
import SeoHead from './SeoHead';
import { Container, Box, Toolbar } from '@mui/material';

const Layout = ({ children }) => {
  return (
    <>
      <SeoHead />

      {/* Фіксований AppBar */}
      <AppNavBar />

      {/* Резерв місця під AppBar (висота Toolbar = 64px) */}
      <Toolbar />

      {/* Контентна частина */}
      <Box
        component="main"
        sx={{
          minHeight: 'calc(100vh - 64px)', // уникаємо CLS
          padding: 2,
        }}
      >
        <Container maxWidth="lg">
          {children}
        </Container>
      </Box>
    </>
  );
};

export default Layout;