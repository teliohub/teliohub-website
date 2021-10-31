import React, { useEffect } from "react";
import styles from "./homePageServiceTexts.module.css";
import DissapearingRings from "../../components/dissapearingRings/DissapearingRings";

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
    },
  },
};

const OnlineShopService = (): JSX.Element => {
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
          <DissapearingRings />
        </motion.div>
        <motion.p
          ref={refLeft}
          initial="hidden"
          animate={controls}
          variants={fadeInLeft}
        >
          We develop native mobile apps for iOS and Android, aiming for
          functionality, design and best UX practices. Our focus is creating
          interactive and intuitive interfaces, tailored to your business goals.
        </motion.p>
        <motion.div
          ref={refLeft}
          initial="hidden"
          animate={controls}
          variants={fadeInLeft}
          className={styles.line}
        ></motion.div>
      </div>
      <div className={styles.flexBox}>
        <motion.div
          ref={refRight}
          initial="hidden"
          animate={controls}
          variants={fadeInRight}
          className={styles.logoOnlineShop}
        ></motion.div>
      </div>
    </div>
  );
};

export default OnlineShopService;
