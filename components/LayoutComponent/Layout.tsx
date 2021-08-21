import React from "react";
import Navigation from "../NavigationComponent/Navigation";

const Layout = ({ children }: any) => {
  return (
    <React.Fragment>
      <Navigation />
      <main>{children}</main>
    </React.Fragment>
  );
};

export default Layout;
