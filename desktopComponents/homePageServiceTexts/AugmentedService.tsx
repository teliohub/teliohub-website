import React from "react";
import styles from "./homePageServiceTexts.module.css";
import MultipleRingsAnimation from "../../components/multipleRingsAnimation/MultipleRingsAnimation";

const AugmentedRealityService = (): JSX.Element => {
  return (
    <div className={`${styles.container} ${styles.widthControl}`}>
      <div className={styles.flexBox}>
        <MultipleRingsAnimation />
        <p>
          Join us on this exiting journey and take advantage of our strive for
          success and innovative problem solving. Gaming to healthcare,
          environmental to beauty apps, AR gives us endless possibilities for
          creativity and development.
        </p>
        <div className={styles.line}></div>
      </div>
      <div className={styles.flexBox}>
        <div className={styles.logoAR}></div>
      </div>
    </div>
  );
};

export default AugmentedRealityService;
