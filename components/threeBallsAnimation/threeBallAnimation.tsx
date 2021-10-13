import React, { useState } from "react";
import styles from "./threeBallAnimation.module.css";
import { InView } from "react-intersection-observer";

const ThreeBallAnimation = (): JSX.Element => {
  const [inViewPort, setInView] = useState(false);

  return (
    <InView onChange={setInView}>
      <div className={inViewPort ? `${styles.container} ${styles.active}` : `${styles.container}`}>
        <div className={styles.firstBall}></div>
        <div className={styles.secondBall}></div>
        <div className={styles.thirdBall}></div>
      </div>
    </InView>
  );
};

export default ThreeBallAnimation;
