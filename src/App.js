import "./App.css";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import { useEffect, useState } from "react";
import FrontPage from "./components/Front-page/FrontPage";
import alanBtn from "@alan-ai/alan-sdk-web";
import wordsToNumbers from "words-to-numbers";

function App() {
  const [alanInstance, setAlanInstance] = useState();
  const [NewArticles, setNewArticles] = useState([]);
  const [activeArticle, setactiveArticle] = useState(-1);

  useEffect(() => {
    if (alanInstance != null) return;
    setAlanInstance(
      alanBtn({
        bottom: "15px",
        left: "50%",
        key: process.env.REACT_APP_ALAN_KEY,
        onCommand: ({ command, articles, number }) => {
          if (command === "newHeadlines") {
            setNewArticles(articles);
          } else if (command === "highlight") {
            setactiveArticle((prevActiveArticle) => prevActiveArticle + 1);
          } else if (command === "open") {
            // convert four into 4.....
            const parsedNumber =
              number.length > 2
                ? wordsToNumbers(number, { fuzzy: true })
                : number;
            const article = articles[parsedNumber - 1];
            alert(article);
            if (parsedNumber > 20) {
              alanBtn().playText("Please try that again.");
            } else if (article && article.url) {
              window.open(article?.url, "_blank");
              alanBtn().playText("opening......");
            }
          }
        },
      })
    );
  }, [alanInstance]);
  return (
    <>
      <Layout>
        {NewArticles?.length > 0 || <FrontPage></FrontPage>}
        <Home articles={NewArticles} activeArticles={activeArticle}></Home>
      </Layout>
    </>
  );
}

export default App;
