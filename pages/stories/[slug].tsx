import React from "react";
import axios from "axios";
import styles from "./slug.module.css";

import { motion } from "framer-motion";
import {useRouter} from "next/router";



const Story = ({ article }: any): JSX.Element => {

  const router = useRouter()

  console.log(article, ' article')

  return (
    <div>
      {
        article ? <motion.div exit={{opacity: 0}} className={styles.slugPost}>
        <div className={styles.slugPostArticle}>
        <br />
        <br />
        <h1>{article?.title}</h1>
        <div dangerouslySetInnerHTML={{__html: article?.content}} />
        </div>
        
      </motion.div> : ''
      }
    </div>
  );
};

export default Story;

export async function getStaticPaths() {
  
  const res = await axios.get(`http://localhost:3000/articles`);
  const data : any = await res.data;

  const articles = data.articles;

  const paths = articles.map((article: any) => ({
    params: { slug: article.slug },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }: any) {
  const { slug } = params;

  let article : any = null;
  try {
    const res = await axios.get(`http://localhost:3000/articles/${slug}`);
    const data : any = await res.data;

   article = data.article[0];
  } catch (err) {}

  return {
    props: { article },
  };
}
