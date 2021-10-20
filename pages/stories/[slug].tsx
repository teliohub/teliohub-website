import React from "react";
import axios from "axios";

const Story = ({article}: any) => {
    
 return (
     <div>
         <br />
         <br />
         <div>{article?.Title}</div>
         <div >{article?.Content}</div>
     </div>
 )
};

export default Story;

export async function getStaticPaths() {
  const res = await axios.get(`${process.env.HEROKU_CONNECTION_API}/articles`);
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
  const data: any = await res.data;

  const article = data[0];

  return {
    props: { article },
  };
}
