import router from "next/router";
import React from "react";
import styles from "../../styles/career.module.css";
import Texts from "./jobs.json";
import MultiBall from "../../components/MultipleBalls/MultiBall";
import Image from "next/image";
import image from "../../public/assets/career/wordart.webp";
import CareerForm from "../../components/careerForm/CareerForm";

import { motion } from "framer-motion";

const Career = () => {
  return (
    <motion.div exit={{opacity: 0}}>
      <div className={styles.logoPage}>
       
        <Image
          src={image}
          className={styles.imageControl}
          alt="Career logo page"
        />
       
        {/* <h1>Career</h1> */}
      </div>
      <div className={styles.container}>
        <h1>Bring your</h1>
        <h2>talent, hard work and</h2>
        <h2>passion and we will</h2>
        <h2>make it work for you</h2>
        <div className={styles.line}></div>
        <div className={styles.flexRow}>
          <div className={styles.flexColumn}>
            <div className={styles.flexRow}>
              <div className={styles.circle}></div>
              <div className={styles.circle}></div>
            </div>
            <div className={styles.flexRow}>
              <div className={styles.circle}></div>
              <div className={styles.circle}></div>
            </div>
            <div className={styles.flexRow}>
              <div className={styles.circle}></div>
              <div className={styles.circle}></div>
            </div>
          </div>
          <div>
            <p>
              Below you can see the open positions. If you don&apos;t see what
              you are looking for, scroll down, we&apos;ve got something for
              you.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.openPositions}>
        {Texts.map((item) => {
          return (
            <div key={item.title} className={styles.position}>
              <div>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
              </div>
              <button onClick={() => router.push("/career/" + item.title)}>
                <div className={styles.arrowRight}></div>
              </button>
            </div>
          );
        })}
      </div>
      <div className={styles.container}>
        <h2>Because we are a team and we always try to find the best fit...</h2>
        <div className={styles.line}></div>
        <MultiBall />
        <p>
          ...if you think you are a match, tell us a little bit more about
          yourself:
        </p>
        <h2>Lets start! You are?</h2>
        <div className={styles.line}></div>
        <CareerForm />
      </div>
    </motion.div>
  );
};

export default Career;
