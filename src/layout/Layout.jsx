import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import RouterFiles from "../router/RouterFile";

const Layout = () => {
  return (
    <>
      <Header />
      <div>
        <RouterFiles />
      </div>

      <Footer />
    </>
  );
};

export default Layout;
