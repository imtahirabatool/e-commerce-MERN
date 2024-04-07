import React from "react";
import Footer from "../Footer";
import TopHeader from "../Header/TopHeader";

const Layout = ({ children }) => {
  return (
    <div className="w-full bg-[#161d240d] h-[60px]">
      <TopHeader />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
