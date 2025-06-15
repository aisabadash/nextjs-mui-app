import AppNavBar from "./AppNavbar";
import SeoHead from "./SeoHead";

const Layout = ({children}) => {
   return (
      <>
         <SeoHead />
         <AppNavBar />
         <main>
            {children}
         </main>
      </>
   );
};

export default Layout;