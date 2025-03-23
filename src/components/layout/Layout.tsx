import React from "react";
import Navbar from "../Navbar";
import MobileMenu from "../MobileMenu";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <MobileMenu />
      <div className="container max-w-7xl px-5 lg:px-0 mx-auto h-screen">
        {children}
      </div>
    </>
  );
};

export default Layout;
