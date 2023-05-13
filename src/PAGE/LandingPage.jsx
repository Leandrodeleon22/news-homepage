import classes from "./LandingPage.module.css";
import Header from "../components/Header";
import LeadPhoto from "../components/LeadPhoto";
import BreakingNews from "../components/BreakingNews";
import Article from "../components/Article";
import NewsImage from "../components/NewsImage";

const LandingPage = () => {
  console.log(window.innerWidth);
  return (
    <>
      <section className={classes.container}>
        <Header />
        <LeadPhoto />
        <Article />
        <BreakingNews />
        <NewsImage />
      </section>
    </>
  );
};

export default LandingPage;
