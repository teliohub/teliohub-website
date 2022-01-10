import React from "react";
import styles from "./whatIsHidden.module.css";
import { InView } from 'react-intersection-observer';

const WhatIsHidden = (): JSX.Element => {

  return (
    <InView>
      <div className={styles.mainContainer}>
        <div className={styles.mainBall}>
          <h1>What is hidden?</h1>
        </div>

        <div className={styles.magicSecondBox}>
          <div className={styles.magicSecondBoxDiv}>
            <h1>Product Requirements</h1>
            <div className={styles.titleBorders}>
              <div className={`${styles.firstDiv} ${styles.percOneDiv}`}/>
              <div className={`${styles.secondDiv} ${styles.percSecondDiv}`}/>
            </div>
          </div>
          <div className={styles.magicSecondBoxDiv}>
            <h1>Data Visualization</h1>
            <div className={styles.titleBorders}>
              <div className={`${styles.firstDiv} ${styles.percThreeDiv}`}/>
              <div className={`${styles.secondDiv} ${styles.percFourthDiv}`}/>
            </div>
          </div>
          <div className={styles.magicSecondBoxDiv}>
            <h1>Information Architecture</h1>
            <div className={styles.titleBorders}>
              <div className={`${styles.firstDiv} ${styles.percFiveDiv}`}/>
              <div className={`${styles.secondDiv} ${styles.percSixDiv}`}/>
            </div>
          </div>
          <div className={styles.magicSecondBoxDiv}>
            <h1>Technology Integration</h1>
            <div className={styles.titleBorders}>
              <div className={`${styles.firstDiv} ${styles.percSevenDiv}`}/>
              <div className={`${styles.secondDiv} ${styles.percEightDiv}`}/>
            </div>
          </div>
          <div className={styles.magicSecondBoxDiv}>
            <h1>Research & Strategy</h1>
            <div className={styles.titleBorders}>
              <div className={`${styles.firstDiv} ${styles.percNineDiv}`}/>
              <div className={`${styles.secondDiv} ${styles.percTenDiv}`}/>
            </div>
          </div>
        </div>

        <div className={styles.connectingDotsBall}>
          <h1>Connecting the dots</h1>
        </div>
      </div>
    </InView>
  );
};

export default WhatIsHidden;
