import React from "react";
import classes from "./FrontPage.module.css";
const infoCards = [
  { color: "#00838f", title: "Latest News", text: "Give me the latest news" },
  {
    color: "#1565c0",
    title: "News by Categories",
    info: "Business, Entertainment, General, Health, Science, Sports, Technology",
    text: "Give me the latest Technology news",
  },
  {
    color: "#4527a0",
    title: "News by Terms",
    info: "Bitcoin, PlayStation 5, Smartphones, Donald Trump...",
    text: "What's up with PlayStation 5",
  },
  {
    color: "#283593",
    title: "News by Sources",
    info: "CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...",
    text: "Give me the news from CNN",
  },
];

function FrontPage() {
  return (
    <div className={classes.frontPage}>
      <div className={classes.grid}>
        {infoCards.map((infoCard) => (
          <div className={classes.gridItem} key={Math.random() * 100}>
            <div className={classes.categoriesTitle}>{infoCard.title}</div>
            <div className={classes.categoriesInfo}>
              <strong>{infoCard.title.split(" ")[2]} </strong>
              <p>{infoCard.info || null}</p>
            </div>
            <div className={classes.categoriesText}>
              <strong>Try Saying...</strong>
              <p>{infoCard.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FrontPage;
