import classes from "./LandingPage.module.css";
import Header from "../components/Header";
import LeadPhoto from "../components/LeadPhoto";
import BreakingNews from "../components/BreakingNews";
const LandingPage = () => {
  return (
    <>
      <section className={classes.container}>
        <Header />
        <LeadPhoto />
        <BreakingNews />
      </section>
    </>
  );
};

export default LandingPage;
