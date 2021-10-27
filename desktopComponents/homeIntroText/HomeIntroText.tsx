import React from "react";
import styles from "./homeIntroText.module.css";

const HomeIntroText = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <h1>We make technology more Human</h1>
      <div className={styles.line}></div>
      <div className={`${styles.flexRow} ${styles.justifyCenter}`}>
        <div className={styles.mainContentContainer}>
          <p>
            TechItEasy is founded as a team, that helps businesses, start-ups
            and individuals build the products of their dreams. Products with
            astonishing design and seamless code. We enjoy our work, we want the
            best user experience for you and your clients and
          </p>
          <div className={`${styles.flexRow} ${styles.alignItems}`}>
              <div className={`${styles.pointer} ${styles.widthPointerOne}`}></div>
              <span className={styles.spanOne}>we put our hearts into it</span>
          </div>
        </div>
        <div className={styles.mainContentContainer}>
          <p>
            Weather its a new business or an existing product, we need to
            reimagine, we put our best efforts and technology to innovate and
          </p>
          <div className={`${styles.flexRow} ${styles.alignItems}`}>
              <div className={`${styles.pointer} ${styles.widthPointerTwo}`}></div>
              <span className={styles.spanTwo}>deliver outstanding quality</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeIntroText;
