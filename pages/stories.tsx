import axios, { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";

const Stories = ({ articles }: any): JSX.Element => {
  console.log(articles, " article");

  return (
    <div>
      <h1>test</h1>
      {articles &&
        articles.map((article: any) => {
          return (
            <div key={article.id}>
              <h1>{article.Title}</h1>
              <p>{article.Writer.username}</p>
            </div>
          );
        })}
    </div>
  );
};

export default Stories;

export async function getStaticProps() {
  const res = await axios.get("http://localhost:1337/articles");
  const articles = await res.data;

  return {
    props: {
      articles,
    },
  };
}
