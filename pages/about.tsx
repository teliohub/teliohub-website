import type { NextPage } from "next";
import Image from "next/image";
import image from "../public/assets/about/wordart.png";
import styles from "../styles/about.module.css";

import AboutContentMobile from '../components/AboutContentMobile/AboutContentMobile';
import AboutContentDesktop from "../desktopComponents/AboutContentDesktop/AboutContentDesktop";

import AboutProcessText from "../components/aboutOurProcess/AboutProcessText";
import { motion } from "framer-motion";
import {useEffect, useState} from "react";

const About: NextPage = () => {
  const [mobile, setMobile] = useState<any>();

  useEffect(() => {
    const updateMobile = () => {
      setMobile(window.innerWidth < 900 ? true : false);
    };

    updateMobile();
    window.addEventListener("resize", updateMobile);
    return () => {
      window.removeEventListener("resize", updateMobile);
    };
  }, []);

  const renderAboutProcessTexts = () => {
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
      {mobile ? <AboutContentMobile/> : <AboutContentDesktop />}
      {renderAboutProcessTexts()}
      <div className={`${styles.container} ${styles.marginBottom}`}>
        <div className={styles.line}/>
      </div>
    </motion.div>
  );
};

export default About;
