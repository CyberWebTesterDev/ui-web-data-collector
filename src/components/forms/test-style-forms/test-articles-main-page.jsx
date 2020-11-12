import React from "react";
import "./articles-style.css";

export const TestArticlesMenuContainer = () => {
  return (
    <div className="menu-main-container">
      <TestArticleMenuHeader />
      <div className="space-label">Пространство JavaScript</div>
      <div className="articles-parent-wrapper">
        <span>
          <a>Статья верхнего уровня</a>
        </span>
        <div className="article-child-wrapper">
          <span>
            <a>Статья нижнего уровня 1</a>
          </span>
          <div className="article-next-child-wrapper">
            <span>
              <a>Статья еще более нижнего уровня 1</a>
            </span>
            <span>
              <a>Статья еще более нижнего уровня 2</a>
            </span>
            <span>
              <a>Статья еще более нижнего уровня 3</a>
            </span>
          </div>
          <span>
            <a>Статья нижнего уровня 2</a>
          </span>
          <span>
            <a>Статья нижнего уровня 3</a>
          </span>
          <span>
            <a>Статья нижнего уровня 4</a>
          </span>
          <span>
            <a>Статья нижнего уровня 5</a>
          </span>
        </div>
      </div>
      <div className="articles-parent-wrapper">
        <span>
          <a>Статья верхнего уровня 2</a>
        </span>
        <div className="article-child-wrapper">
          <span>
            <a>Статья нижнего уровня 1</a>
          </span>
        </div>
      </div>
      <div className="articles-parent-wrapper">
        <span>
          <a>Статья верхнего уровня 3</a>
        </span>
        <div className="article-child-wrapper">
          <span>
            <a>Статья нижнего уровня 1</a>
          </span>
          <span>
            <a>Статья нижнего уровня 2</a>
          </span>
        </div>
      </div>

      <div className="articles-parent-wrapper"></div>
    </div>
  );
};

const TestArticleMenuHeader = () => {
  return (
    <div className="menu-header">
      <div className="menu-form-container">
        <input type="text" />
        <button className="btn-primary">Найти</button>
      </div>
    </div>
  );
};
