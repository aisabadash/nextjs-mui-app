import { createTheme } from '@mui/material/styles';

const theme = createTheme({
   colorSchemes: {
      light: true,
      dark: true
   },
   cssVariables: {
      colorSchemeSelector: "class"
   },
   // palette: {
   //    primary: {
   //       main: '#213472', // blue
   //    },
   //    secondary: {
   //       main: '#c34b13', // orange      
   //    },
   //    background: {
   //       default: '#fff5ed',
   //    },
   // },
   typography: {
      fontFamily: "'Roboto', 'Arial', sans-serif",
   },
});

export default theme;
