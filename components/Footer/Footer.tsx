import React, { useState } from "react";
import styles from "./footer.module.css";

const Footer = (): JSX.Element => {
  const [menuPosition, setMenuPosition] = useState<number>(0);

  const handleRouteChange = (arrayIndex: number) => {
    setMenuPosition(arrayIndex);
  };

  return (
    <footer className={styles.footerControl}>
      <div className={styles.desktopControl}>
        <h2>Let&apos;s collaborate</h2>
        <h3 className={styles.changeOpacity}>d.stoev [ at ] techiteasy.agency</h3>

      </div>
      <div className={styles.footerEndTitles}>
        <span className={styles.copy}>
          &copy; TIE {new Date().getFullYear()}
        </span>
        <span className={styles.privacy}>Privacy Policy</span>
      </div>
    </footer>
  );
};

export default Footer;
