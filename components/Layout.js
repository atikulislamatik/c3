import React from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const Layout = ({ children }) => {
  return (
    <>
      {/* <Header/> */}
      <div>{children}</div>
      {/* <Footer></Footer> */}
    </>
  );
};

export default Layout;