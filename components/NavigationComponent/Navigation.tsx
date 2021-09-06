import Link from "next/link";
import styles from "./navigation.module.css";
import React, { useState, useEffect } from "react";
import Hamburger from 'hamburger-react'

const Navigation = () => {
  const [isNavSidebarActive, setIsNavSidebarAcive] = useState<Boolean>(false);
  const [currentRoute, setCurrentRoute] = useState<String>();

  const handleClick = () => {
    setIsNavSidebarAcive(!isNavSidebarActive);
  };

  const handleRouteChange = (word: String) => {
    setCurrentRoute(word);
    setIsNavSidebarAcive(!isNavSidebarActive);
  };

  useEffect(() => {
    setCurrentRoute(window.location.pathname.replace(/\//, ""));
  }, []);

  return isNavSidebarActive ? (
    <React.Fragment>
      <ul className={styles.container}>
        <li>{currentRoute}</li>
        <li>
          <button onClick={handleClick} className={styles.button}>
            X
          </button>
        </li>
      </ul>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/">
              <a onClick={() => handleRouteChange("Home")}>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/industries">
              <a onClick={() => handleRouteChange("Industries")}>Industries</a>
            </Link>
          </li>
          <li>
            <Link href="/news">
              <a onClick={() => handleRouteChange("News")}>News</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a onClick={() => handleRouteChange("About")}>About</a>
            </Link>
          </li>
          <li>
            <Link href="/career">
              <a onClick={() => handleRouteChange("Career")}>Career</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a onClick={() => handleRouteChange("Contact")}>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  ) : (
    <React.Fragment>
      <div className={styles.burger}>
        <Hamburger toggled={isNavSidebarActive} toggle={handleClick} />
      </div>
    </React.Fragment>
  );
};

export default Navigation;
