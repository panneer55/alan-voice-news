import React from "react";

import classes from "./NewsCardStyle.module.css";

// import classNames from "classnames";

function NewsCard({
  article: { description, publishedAt, source, title, url, urlToImage },
  i,
  activeArticle,
}) {
  // const [elRefs, setElRefs] = useState([]);
  // const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop - 50);

  // useEffect(() => {
  //   setElRefs((refs) =>
  //     Array(20)
  //       .fill()
  //       .map((_, j) => refs[j] || createRef())
  //   );
  // }, []);

  // useEffect(() => {
  //   if (i === activeArticle && elRefs[activeArticle]) {
  //     scrollToRef(elRefs[activeArticle]);
  //   }
  // }, [i, activeArticle, elRefs]);

  return (
    <div className={`${classes.card} }`}>
      <div className={classes.image_box}>
        <img
          src={
            urlToImage ||
            `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZWoQv7f5VB7tg8CFKGZn6Xn9IbvDGkigvuA&usqp=CAU`
          }
          alt="card-pic"
        />
      </div>
      <div className={classes.card_body}>
        <div className={classes.card_meta}>
          <span>{new Date(publishedAt).toDateString()}</span>
          <span>{source.name}</span>
        </div>
        <h2 className={classes.title}>{title}</h2>
        <p className={classes.content}>{description} </p>
        <div className={classes.card_footer}>
          <button>
            <a href={url} target="_blank" rel="noreferrer">
              Learn more...
            </a>
          </button>
          <span>{i + 1}</span>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
