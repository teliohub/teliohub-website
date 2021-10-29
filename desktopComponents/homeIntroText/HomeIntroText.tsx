import React, { useEffect } from "react";
import styles from "./homeIntroText.module.css";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";


const easing = [0.6, -0.05, 0.01, 0.99]

const fadeInLeft = {
  hidden: {
    opacity: 0,
    x: -60
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: easing,
      delay: 0.3
    }
  }
}

const fadeInRight = {
  hidden: {
    opacity: 0,
    x: 60
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1, easing,
      ease: easing,
      delay: 0.3
    }
  }
}

const HomeIntroText = (): JSX.Element => {
  const controls = useAnimation();
  const [refLeft, inView] = useInView();
  const [refRight] = useInView();

  useEffect(() => {
    if(inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <div className={styles.container}>
      <h1>We make technology more Human</h1>
      <div className={styles.line}></div>
      <div className={`${styles.flexRow} ${styles.justifyCenter}`}>
        <div className={styles.mainContentContainer}>
          <motion.p ref={refLeft} initial="hidden" animate={controls} variants={fadeInLeft}>
            TechItEasy is founded as a team, that helps businesses, start-ups
            and individuals build the products of their dreams. Products with
            astonishing design and seamless code. We enjoy our work, we want the
            best user experience for you and your clients and
          </motion.p>
          <div className={`${styles.flexRow} ${styles.alignItems}`}>
              <div className={`${styles.pointer} ${styles.widthPointerOne}`}></div>
              <span className={styles.spanOne}>we put our hearts into it</span>
          </div>
        </div>
        <div className={styles.mainContentContainer}>
          <motion.p ref={refRight} initial="hidden" animate={controls} variants={fadeInRight}>
            Weather its a new business or an existing product, we need to
            reimagine, we put our best efforts and technology to innovate and
          </motion.p>
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
