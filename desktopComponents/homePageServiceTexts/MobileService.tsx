import React from "react";
import ThreeBallAnimation from "../../components/threeBallsAnimation/threeBallAnimation";
import styles from "./homePageServiceTexts.module.css";


const MobileService = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.flexBox}>
        <ThreeBallAnimation />
        <p>
          We develop native mobile apps for iOS and Android, aiming for
          functionality, design and best UX practices. Our focus is creating
          interactive and intuitive interfaces, tailored to your business goals.
        </p>
        <div className={styles.line}></div>
      </div>
      <div className={styles.flexBox}>
        <div className={styles.logoMobile}>
        </div>
      </div>
    </div>
  );
};

export default MobileService;
