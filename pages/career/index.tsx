import router from "next/router";
import React from "react";
import styles from "../../styles/career.module.css";
import Jobs from "./jobs";
import MultiBall from "../../components/MultipleBalls/MultiBall";

const Career = () => {
  return (
    <div>
      <div className={styles.container}>
        <h1>Bring your</h1>
        <h2>talent, hard work and</h2>
        <h2>passion and we will</h2>
        <h2>make it work for you</h2>
        <div className={styles.line}></div>
        <div className={styles.flexRow}>
          <div></div>
          <div>
            <p>
              Below you can see the open positions. If you don't see what you
              are looking for, scroll down, we've got something for you.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.openPositions}>
        {Jobs.map((item) => {
          return (
            <React.Fragment>
              <div className={styles.position}>
                <div>
                  <h1>{item.title}</h1>
                  <p>{item.description}</p>
                </div>
                <button onClick={() => router.push('/career/' + item.title)}><div className={styles.arrowRight}></div></button>
              </div>
            </React.Fragment>
          );
        })}
      </div>
      <div className={styles.container}>
        <h2>Because we are a team and we always try to find the best fit...</h2>
        <div className={styles.line}></div>
        <MultiBall />
        <p>...if you think you are a match, tell us a little bit more about yourself:</p>
        <h2>Lets start! You are?</h2>
        <div className={styles.line}></div>
      </div>
    </div>
  );
};

export default Career;
