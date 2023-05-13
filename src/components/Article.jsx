import classes from "./Article.module.css";

const Article = () => {
  return (
    <article className={classes.container}>
      <div className={classes.title}>
        <p>The Bright Future of Web 3.0?</p>
      </div>
      <div className={classes.paragraph}>
        <p>
          We dive into next evolution of the web that claims to put the power of
          the platforms back into the hands of the peple. But is it really
          fulfilling its promise?
        </p>
        <button>Read More</button>
      </div>
    </article>
  );
};

export default Article;
