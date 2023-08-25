import axios from "axios";
import Link from "next/link";
import React from "react";
import styles from "../../styles/stories.module.css";

import { motion } from "framer-motion";

const Stories = ({ articles }: any): JSX.Element => {
  return (
    <motion.div exit={{ opacity: 0 }} className={styles.container}>
      <div className={styles.logo}></div>
      <div className={styles.desktopWidth}>
        <div className={styles.planet}></div>
        <br />
        <br />
        {articles &&
          articles.map((article: any) => {
            return (
              <div className={styles.story} key={article._id}>
                <h1>{article.title}</h1>
                <p>{article.description}</p>
                <div className={styles.aLinkHolder}>
                  <Link href={`stories/${article.slug}`}>
                    <a>Read more &#62;</a>
                  </Link>
                </div>
              </div>
            );
          })}
        <h3>Dive deeper in Stories</h3>
        <div className={styles.comingSoon}>
          <span>
            Coming <br /> Soon
          </span>
        </div>
        <h4>Have a problem to solve?</h4>
        <div className={styles.contactUsButton}>
          <p>Contact us</p>
          <Link href={"/contact"}>
            <div className={styles.arrowRight}></div>
          </Link>
        </div>
        <div className={styles.line}></div>
        <br />
        <br />
      </div>
    </motion.div>
  );
};

export default Stories;

// export async function getStaticProps() {
//
//   const res = await axios.get(`https://drowsa-back-express.herokuapp.com/articles`);
//
//   const data : any = await res.data;
//
//   const articles = data.articles;
//
//   return {
//     props: {
//       articles,
//     },
//   };
// }
