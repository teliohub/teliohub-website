import React from "react";
import axios from "axios";
import styles from "./slug.module.css";

import { motion } from "framer-motion";

const Story = ({ article }: any) => {
  return (
    <motion.div exit={{opacity: 0}} className={styles.slugPost}>
      <br />
      <br />
      <div>{article?.Title}</div>
      <div dangerouslySetInnerHTML={{__html: article?.Content}} />
      
    </motion.div>
  );
};

export default Story;

export async function getStaticPaths() {
  const res = await axios.get(`${process.env.HEROKU_CONNECTION_API}/articles`);
  // const res = await axios.get(`http://localhost:1337/articles`);
  const articles: any = await res.data;

  const paths = articles.map((article: any) => ({
    params: { slug: article.Slug },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }: any) {
  const { slug } = params;

  const res = await axios.get(`${process.env.HEROKU_CONNECTION_API}/articles?Slug=${slug}`);
  // const res = await axios.get(`http://localhost:1337/articles?Slug=${slug}`);
  const data: any = await res.data;

  const article = data[0];

  return {
    props: { article },
  };
}
