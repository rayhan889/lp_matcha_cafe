import React from "react";
import Navbar from "../Navbar";
import MobileMenu from "../MobileMenu";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-amber-50">
      <Navbar />
      <MobileMenu />
      <main className="relative">{children}</main>
    </div>
  );
};

export default Layout;
