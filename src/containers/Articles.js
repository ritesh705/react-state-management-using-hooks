import React, { useContext } from "react";

import { ArticleContext } from "../state-management/context/ArticleContextWithReducer";
import Article from "../components/Article/Article";

const Articles = () => {
  const {articles} = useContext(ArticleContext);
  return (
    <div>
      {articles.map(article => (
        <Article key={article.id} data={article} />
      ))}
    </div>
  );
};

export default Articles;