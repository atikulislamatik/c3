import React from "react";
import Header from "./Header/Header";
import { useRouter } from "next/router";
const Layout = ({ children }) => {
  const router = useRouter();
  const showHeader = router.pathname === '/register' ? false : true;
  return (
    <>
      {showHeader && <Header />}
      <div>{children}</div>

    </>
  );
};

export default Layout;


