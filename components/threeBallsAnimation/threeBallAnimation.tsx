import React from "react";
import imageFirstBall from "../../public/assets/home/animationFirst/path-22.png";
import imageSecondBall from "../../public/assets/home/animationFirst/Path-21.png";
import imageThirdBall from "../../public/assets/home/animationFirst/path-20.png";
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
