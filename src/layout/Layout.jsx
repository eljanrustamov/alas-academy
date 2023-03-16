import React from "react";
import Header from "./Header/Header.component";
import Footer from "./Footer/Footer.component";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
