import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./footer.module.css";

const Footer = (): JSX.Element => {
  const [menuPosition, setMenuPosition ] = useState<number>(0);

  const handleRouteChange = (arrayIndex: number) => {
      setMenuPosition(arrayIndex);
  };

  return (
    <footer className={styles.footerControl}>
      <ul className={styles.ulControl}>
        
        <li className={styles.liFlexBetweenDesign}>
          <Link href="/industries">
            <a className={menuPosition === 1 ? '' : styles.changeOpacity} onClick={() => handleRouteChange(1)}>Industries</a>
          </Link>
          <span className={menuPosition === 1 ? '' : styles.hideIfNotActive}></span>
          <p className={menuPosition === 1 ? '' : styles.hideIfNotActive}>You Are Here</p>
        </li>
        <li className={styles.liFlexBetweenDesign}>
          <Link href="/news">
            <a className={menuPosition === 2 ? '' : styles.changeOpacity} onClick={() => handleRouteChange(2)}>News</a>
          </Link>
          <span className={menuPosition === 2 ? '' : styles.hideIfNotActive}></span>
          <p className={menuPosition === 2 ? '' : styles.hideIfNotActive}>You Are Here</p>
        </li>
        <li className={styles.liFlexBetweenDesign}>
          <Link href="/about">
            <a className={menuPosition === 3 ? '' : styles.changeOpacity} onClick={() => handleRouteChange(3)}>About</a>
          </Link>
          <span className={menuPosition === 3 ? '' : styles.hideIfNotActive}></span>
          <p className={menuPosition === 3 ? '' : styles.hideIfNotActive}>You Are Here</p>
        </li>
        <li className={styles.liFlexBetweenDesign}>
          <Link href="/career">
            <a className={menuPosition === 4 ? '' : styles.changeOpacity} onClick={() => handleRouteChange(4)}>Career</a>
          </Link>
          <span className={menuPosition === 4 ? '' : styles.hideIfNotActive}></span>
          <p className={menuPosition === 4 ? '' : styles.hideIfNotActive}>You Are Here</p>
        </li>
        <li className={styles.liFlexBetweenDesign}>
          <Link href="/contact">
            <a className={menuPosition === 5 ? '' : styles.changeOpacity} onClick={() => handleRouteChange(5)}>Contact</a>
          </Link>
          <span className={menuPosition === 5 ? '' : styles.hideIfNotActive}></span>
          <p className={menuPosition === 5 ? '' : styles.hideIfNotActive}>You Are Here</p>
        </li>
      </ul>
      <h2>Let's collaborate</h2>
      <h3 className={styles.changeOpacity}>ouremail@gmail.com</h3>
      </footer>
  );
};

export default Footer;
