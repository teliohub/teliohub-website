import type { NextPage } from "next";
import Image from "next/image";
import image from "../public/assets/about/wordart.png";
import styles from "../styles/about.module.css";

const About: NextPage = () => {
  return (
    <div>
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
        <div className={styles.absImageSecondBallPos}></div>
      </div>
      <div className={styles.services}>
          <div className={styles.container}>
              <h2>Problem solver</h2>
              <p>We support teams, seeking change, through cutting edge technology and intuitive design.</p>
              <span className={styles.absImageTargetPos}></span>
          </div>
          <div className={styles.container}>
              <h2>Precise</h2>
              <p>We embrace challenges. One pixel at a time, we combine creativity, business and technical knowledge to give you the best product.</p>
              <span className={styles.absImageTriangleSolidPos}></span>
              <span className={styles.absImageTriangleShadowPos}></span>
          </div>
          <div className={styles.container}>
              <h2>Open-Minded</h2>
              <p>We are curious, always looking for new and intuitive resolutions. We approach every project with inspiration and a will for a positive impact.</p>
          </div>
      </div>
    </div>
  );
};

export default About;
