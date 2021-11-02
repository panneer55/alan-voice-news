import React from "react";
import classes from "./Home.module.css";
import NewsCard from "../NewsCard/NewsCard";

function Home({ articles, activeArticle }) {
  return (
    <div className={classes.home}>
      {articles?.length > 0 && (
        <div className={classes.backInfo}>Try Saying - Go / back</div>
      )}
      <div className={classes.grid}>
        {articles?.map((article, i) => (
          <div>
            <NewsCard
              key={Math.random() * 100}
              article={article}
              i={i}
              activeArticles={activeArticle}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
