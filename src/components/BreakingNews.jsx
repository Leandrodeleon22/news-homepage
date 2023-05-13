import classes from "./BreakingNews.module.css";

const BreakingNews = () => {
  return (
    <aside className={classes.container}>
      <h1>New</h1>
      <div className={classes.news}>
        <h3>Hydrogen vs Electronic Cars</h3>
        <p>Will hydrogen-fueled cars ever catch up to EVs? </p>
      </div>

      <div className={classes.news}>
        <h3>The Downsides of AI Artistitry</h3>
        <p>
          What are the possible adverse effects of on-demand AI image
          generation?{" "}
        </p>
      </div>

      <div className={classes.news}>
        <h3>Is VC Funding Drying Up?</h3>
        <p>
          Private funding by VC firms is down 50% YOY. We take a look at what
          that means.
        </p>
      </div>
    </aside>
  );
};

export default BreakingNews;
