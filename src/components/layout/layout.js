import React, { useState, useEffect } from "react";
import GlobalStyle from "../GlobalStyle";
import Navbar from "./navbar/navbar";
import Footer from "./footer/footer";
import Loader from "./loader/loader";
import { NavbarContext } from "./NavbarContext";

function Layout({ data, children, location }) {
  const [isPermanent, setIsPermanent] = useState(false);

  useEffect(() => {
    const loader = document.getElementById("loader");
    if (loader) {
      setTimeout(() => {
        loader.style.display = "none";
      }, 5000);
    }
  }, []);

  if (!data || !data.allPrismicNavbar || !data.allPrismicFooter) {
    return null; // Prevents errors when data is missing
  }

  return (
    <>
      <GlobalStyle />

      <Loader />

      <Navbar
        isPermanent={isPermanent}
        navbarItems={data.allPrismicNavbar.nodes[0].data.navbar_menu_items}
      />

      <NavbarContext.Provider value={setIsPermanent}>
        {children}
      </NavbarContext.Provider>

      <Footer
        footerNodes={data.allPrismicFooter.nodes}
        pathname={location.pathname}
      />
    </>
  );
}

export default Layout;
