import React from "react";
import axios, { AxiosResponse } from "axios";

const Story = ({article}: any) => {
    console.log(article)
 return (
     <div>
         <br />
         <br />
         <div>{article.Title}</div>
     </div>
 )
};

export default Story;

export async function getStaticPaths() {
  const res = await axios.get("http://localhost:1337/articles");
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

  const res = await axios.get(`http://localhost:1337/articles?Slug=${slug}`);
  const data: any = await res.data;

  const article = data[0];

  return {
    props: { article },
  };
}
