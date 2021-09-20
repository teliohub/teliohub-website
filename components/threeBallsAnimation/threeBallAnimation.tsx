import React from "react";
import styles from "./threeBallAnimation.module.css";

const ThreeBallAnimation = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.firstBall}></div>
      <div className={styles.secondBall}></div>
      <div className={styles.thirdBall}></div>
    </div>
  );
};

export default ThreeBallAnimation;
