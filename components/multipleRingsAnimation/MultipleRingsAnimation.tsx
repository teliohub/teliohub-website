import React from "react";
import styles from "./multipleRingsAnimation.module.css";

const multipleRingsAnimation = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.firstBall}></div>
      <div className={styles.secondBall}></div>
      <div className={styles.thirdBall}></div>
      <div className={styles.fourthBall}></div>
      <div className={styles.fifthBall}></div>
      <div className={styles.sixthBall}></div>
    </div>
  );
};

export default multipleRingsAnimation;
