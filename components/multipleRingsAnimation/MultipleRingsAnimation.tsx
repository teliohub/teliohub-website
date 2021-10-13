import React, { useState } from "react";
import styles from "./multipleRingsAnimation.module.css";
import { InView } from 'react-intersection-observer';

const MultipleRingsAnimation = (): JSX.Element => {
  const [inViewPort, setInView] = useState(false)

  
  return (
    <InView onChange={setInView}>
      <div className={inViewPort ? `${styles.container} ${styles.active}` : `${styles.container}`}>
        <div className={styles.firstBall}></div>
        <div className={styles.secondBall}></div>
        <div className={styles.thirdBall}></div>
        <div className={styles.fourthBall}></div>
        <div className={styles.fifthBall}></div>
      <div className={styles.sixthBall}></div>
    </div>
    </InView>
  );
};

export default MultipleRingsAnimation;
