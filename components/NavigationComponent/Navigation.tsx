import Link from "next/link";
import styles from "./navigation.module.css";
import React, { useState, useEffect } from "react";
import Hamburger from "hamburger-react";
import Image from "next/image";
import image from "../../public/assets/Logo.png";

const Navigation = () => {
  const [isNavSidebarActive, setIsNavSidebarAcive] = useState<boolean>(false);
  const [currentRoute, setCurrentRoute] = useState<String>();
  const [isRouteActive, setIsRouteActive] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const handleClick = () => {
    setIsNavSidebarAcive(!isNavSidebarActive);
  };

  const handleRouteChange = (word: String, indexMenu: number) => {
    setCurrentRoute(word);
    setIsNavSidebarAcive(!isNavSidebarActive);
    let replacingArray = [false, false, false, false, false, false];
    replacingArray[indexMenu] = true;
    setIsRouteActive(replacingArray);
  };

  useEffect(() => {
    setCurrentRoute(window.location.pathname.replace(/\//, ""));
    if (currentRoute === "" || currentRoute === undefined) {
      setCurrentRoute("Home");
      let replacingArray = [false, false, false, false, false, false];
      replacingArray[0] = true;
      setIsRouteActive(replacingArray);
    }
  }, [currentRoute]);

  return (
    <React.Fragment>
      <ul className={isNavSidebarActive ? `${styles.container} ${styles.fixContainer}` : styles.container}>
        <li>
          <Link href="/">
            <Image
              src={image}
              className={styles.imageControl}
              alt="Contact logo page"
            />
          </Link>
        </li>
        <li className={styles.liControl}>
          <li>
            {/* <h4>{currentRoute}</h4> */}
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
          <li>
            <Hamburger toggled={isNavSidebarActive} toggle={handleClick} />
          </li>
        </li>
      </ul>
      <nav className={isNavSidebarActive ? styles.nav : styles.hideMenu}>
        <ul>
          <li>
            <div className={isRouteActive[0] ? styles.routeActive : ""}></div>
            <Link href="/">
              <a onClick={() => handleRouteChange("Home", 0)}>Home</a>
            </Link>
          </li>
          <li>
            <div className={isRouteActive[1] ? styles.routeActive : ""}></div>
            <Link href="/industries">
              <a onClick={() => handleRouteChange("Industries", 1)}>
                Industries
              </a>
            </Link>
          </li>
          <li>
            <div className={isRouteActive[2] ? styles.routeActive : ""}></div>
            <Link href="/stories">
              <a onClick={() => handleRouteChange("Stories", 2)}>Stories</a>
            </Link>
          </li>
          <li>
            <div className={isRouteActive[3] ? styles.routeActive : ""}></div>
            <Link href="/about">
              <a onClick={() => handleRouteChange("About", 3)}>About</a>
            </Link>
          </li>
          <li>
            <div className={isRouteActive[4] ? styles.routeActive : ""}></div>
            <Link href="/career">
              <a onClick={() => handleRouteChange("Career", 4)}>Career</a>
            </Link>
          </li>
          <li>
            <div className={isRouteActive[5] ? styles.routeActive : ""}></div>
            <Link href="/contact">
              <a onClick={() => handleRouteChange("Contact", 5)}>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Navigation;
