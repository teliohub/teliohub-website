import axios from "axios";
import Link from "next/link";
import React from "react";
import styles from "../../styles/stories.module.css";

const Stories = ({ articles }: any): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}></div>
      <div className={styles.planet}></div>
      <br />
      <br />
      {articles &&
        articles.map((article: any) => {
          return (
            <div className={styles.story} key={article.id}>
              <h1>{article.Title}</h1>
              <p>{article.description}</p>
              <div className={styles.aLinkHolder}>
                <Link href={`stories/${article.Slug}`}>
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
  );
};

export default Stories;

export async function getStaticProps() {
  // const res = await axios.get(`${process.env.HEROKU_CONNECTION_API}/articles`);
  const res = await axios.get(`http://localhost:1337/articles`);
  const articles = await res.data;

  return {
    props: {
      articles,
    },
  };
}
