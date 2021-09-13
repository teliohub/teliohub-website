import React from "react";
import Navigation from "../NavigationComponent/Navigation";
import Footer from '../Footer/Footer';
import styles from './layout.module.css';

const Layout = ({ children }: any) => {
  return (
    <React.Fragment>
      <Navigation />
      <main className={styles.layout}>{children}</main>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
