import React from "react";
import styles from "./homePageServiceTexts.module.css";
import DissapearingRings from "../../components/dissapearingRings/DissapearingRings";


const OnlineShopService = (): JSX.Element => {
  return (
    <div className={`${styles.container} ${styles.widthControl}`}>
      <div className={styles.flexBox}>
        <DissapearingRings />
        <p>
          We develop native mobile apps for iOS and Android, aiming for
          functionality, design and best UX practices. Our focus is creating
          interactive and intuitive interfaces, tailored to your business goals.
        </p>
        <div className={styles.line}></div>
      </div>
      <div className={styles.flexBox}>
        <div className={styles.logoOnlineShop}>
        </div>
      </div>
    </div>
  );
};

export default OnlineShopService;
