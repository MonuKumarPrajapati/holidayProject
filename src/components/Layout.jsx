import Footer from "./Footer";
import Header from "./Header";
import { Outlet, useNavigate } from "react-router-dom";
// import { useEffect } from "react";

const Layout = () => {
 

  return (
    <>
    
      <>
        
          <Header />
            <Outlet />
          <Footer />
         
        </>
      
    </>
  );
};

export default Layout;
