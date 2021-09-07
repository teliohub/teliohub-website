import React from "react";
import Navigation from "../NavigationComponent/Navigation";
import styles from './layout.module.css';

const Layout = ({ children }: any) => {
  return (
    <React.Fragment>
      <Navigation />
      <main className={styles.layout}>{children}</main>
    </React.Fragment>
  );
};

export default Layout;
