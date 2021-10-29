import type { NextPage } from "next";
import Image from "next/image";
import image from "../public/assets/about/wordart.png";
import styles from "../styles/about.module.css";

import AboutProcessText from "../components/aboutOurProcess/AboutProcessText";
import { motion } from "framer-motion";

const About: NextPage = () => {
  const renderAboutProcessTexts = () => {
    console.log(AboutProcessText);
    return AboutProcessText.map((item) => (
      <>
        <div className={styles.aboutMarginControl}>
          <div className={item.activeLine ? styles.activeLineText : ""}></div>
          <div className={styles.aboutProcessContainer}>
            <div className={styles.flexRow}>
              <div className={styles.zero}></div>
              <h2>{item.number}</h2>
            </div>
            <div>
              <h1>{item.title}</h1>
            </div>
          </div>
          <div className={styles.paraContainer}>
            <p>{item.para}</p>
          </div>
        </div>
      </>
    ));
  };

  return (
    <motion.div exit={{opacity: 0}}>
      <div className={styles.logoPage}>
        <Image
          src={image}
          className={styles.imageControl}
          alt="Contact logo page"
        />
      </div>
      <div className={styles.container}>
        <h1>We are</h1>
        <div className={styles.line}></div>
        <div className={styles.absImagePos}></div>
        <div className={styles.absImageSecondBallPos}>
          <div className={styles.dashedContainerBorder}></div>
        </div>
      </div>
      <div className={styles.services}>
        <div className={styles.container}>
          <div className={styles.dashedContainerBorderTwo}></div>
          <h2>Problem solver</h2>

          <p>
            <span className={styles.spanBackgroundColor}>We support teams, seeking change, through cutting edge technology
            and intuitive design.</span>
          </p>

          <span className={styles.absImageTargetPos}>
          <div className={styles.dashedContainerBorderThree}></div>
          </span>
        </div>
        <div className={styles.container}>
          <h2>Precise</h2>
          <p>
            <span className={styles.spanBackgroundColor}>
            We embrace challenges. One pixel at a time, we combine creativity,
            business and technical knowledge to give you the best product.
            </span>
          </p>
          <span className={styles.absImageTriangleSolidPos}></span>
          <span className={styles.absImageTriangleShadowPos}></span>
        </div>
        <div className={styles.container}>
          <h2>Open-Minded</h2>
          <p>
            We are curious, always looking for new and intuitive resolutions. We
            approach every project with inspiration and a will for a positive
            impact.
          </p>
        </div>
      </div>
      <div className={`${styles.container} ${styles.marginTop}`}>
        <h1>Our Process</h1>
        <div className={styles.line}></div>
      </div>
      {renderAboutProcessTexts()}
      <div className={`${styles.container} ${styles.marginBottom}`}>
        <div className={styles.line}></div>
      </div>
    </motion.div>
  );
};

export default About;
