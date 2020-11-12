import React from "react";
import "./articles-style.css";
import { TestArticlesMenuContainer } from "./test-articles-main-page";
import { TestArticleContainer } from "./test-article-container";

export const TestArticlePage = () => {
  return (
    <React.Fragment>
      <div className="articles-main-wrapper">
        <TestArticlesMenuContainer />
        <TestArticleContainer />
      </div>
    </React.Fragment>
  );
};
