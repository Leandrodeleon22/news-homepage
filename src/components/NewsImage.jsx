import classes from "./NewsImage.module.css";
import imageOne from "./../assets/images/image-retro-pcs.jpg";
import imageTwo from "./../assets/images/image-top-laptops.jpg";
import imageThree from "./../assets/images/image-gaming-growth.jpg";

const NewsImage = () => {
  return (
    <div className={classes.container}>
      <div className={classes.info}>
        <img src={imageOne} alt="image-1" />
        <div>
          <h2>01</h2>
          <h3>Reviving Retro PCs</h3>
          <p>What happens when old PCs are given modern upgrades?</p>
        </div>
      </div>

      <div className={classes.info}>
        <img src={imageTwo} alt="image-2" />
        <div>
          <h2>02</h2>
          <h3>Top 10 Laptops of 2022</h3>
          <p>Our best picks for various needs and budgets</p>
        </div>
      </div>

      <div className={classes.info}>
        <img src={imageThree} alt="image-3" />

        <div>
          <h2>03</h2>
          <h3>The Growth of Gaming</h3>
          <p>How the pandemic has sparked fresh opportunities</p>
        </div>
      </div>
    </div>
  );
};

export default NewsImage;
