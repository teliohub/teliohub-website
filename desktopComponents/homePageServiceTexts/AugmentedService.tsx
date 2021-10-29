import React, { useEffect } from "react";
import styles from "./homePageServiceTexts.module.css";
import MultipleRingsAnimation from "../../components/multipleRingsAnimation/MultipleRingsAnimation";

import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const easing = [0.6, -0.05, 0.01, 0.99];

const fadeInBottom = {
  hidden: {
    opacity: 0,
    x: -260,
    y: 200,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 1,
      ease: easing,
      delay: 0.3
    },
  },
};

const fadeInLeft = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: easing,
      delay: 0.3
    },
  },
};

const fadeInRight = {
  hidden: {
    opacity: 0,
    x: 160,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: easing,
      delay: 0.3
    },
  },
};

const AugmentedRealityService = (): JSX.Element => {
  const controls = useAnimation();
  const [refLeft, inView] = useInView();
  const [refRight] = useInView();
  const [refAnimation] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className={`${styles.container} ${styles.widthControl}`}>
      <div className={styles.flexBox}>
        <motion.div
          ref={refAnimation}
          initial="hidden"
          animate={controls}
          variants={fadeInBottom}
        >
          <MultipleRingsAnimation />
        </motion.div>
        <motion.p
          ref={refLeft}
          initial="hidden"
          animate={controls}
          variants={fadeInLeft}
        >
          Join us on this exiting journey and take advantage of our strive for
          success and innovative problem solving. Gaming to healthcare,
          environmental to beauty apps, AR gives us endless possibilities for
          creativity and development.
        </motion.p>
        <motion.div ref={refLeft}
          initial="hidden"
          animate={controls}
          variants={fadeInLeft} className={styles.line}></motion.div>
      </div>
      <div className={styles.flexBox}>
        <motion.div
          ref={refRight} initial="hidden" animate={controls} variants={fadeInRight}
          className={styles.logoAR}
        ></motion.div>
      </div>
    </div>
  );
};

export default AugmentedRealityService;
