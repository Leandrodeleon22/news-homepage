import classes from "./LeadPhoto.module.css";
import leadPhoto from "./../assets/images/image-web-3-desktop.jpg";

const LeadPhoto = () => {
  return (
    <header className={classes.container}>
      <img src={leadPhoto} alt="Photo" />
    </header>
  );
};

export default LeadPhoto;
