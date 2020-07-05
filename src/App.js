import React from 'react';
import Articles from "./containers/Articles"
import AddArticle from "./components/AddArticle/AddArticleWithReducer";
import ArticleProvider from "./state-management/context/ArticleContextWithReducer";

function App() {
  return (
    <ArticleProvider>
      <AddArticle />
      <Articles />
    </ArticleProvider>
  );
}

export default App;
