import React, { useEffect, useState } from "react";
import Navigation from "../NavigationComponent/Navigation";
import Footer from '../Footer/Footer';
import styles from './layout.module.css';
import NavigationDesktop from "../../desktopComponents/navigationDesktop/NavigationDesktop";

const Layout = ({ children }: any) => {

  const [mobile, setMobile] = useState<any>();

  useEffect(() => {
    const updateMobile = () => {
      setMobile(window.innerWidth < 900 ? true : false);
    };

    updateMobile();
    window.addEventListener("resize", updateMobile);
    return () => {
      window.removeEventListener("resize", updateMobile);
    };
  }, []);

  return (
    <React.Fragment>
      {mobile !== undefined && mobile ? <Navigation /> : <NavigationDesktop /> }
      <main className={styles.layout}>{children}</main>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
