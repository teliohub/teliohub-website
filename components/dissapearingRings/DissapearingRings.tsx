import React from "react";
import styles from "./dissapearingRings.module.css";

const DissapearingRings = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.firstBall}></div>
      <div className={styles.secondBall}></div>
      <div className={styles.thirdBall}></div>
    </div>
  );
};

export default DissapearingRings;
