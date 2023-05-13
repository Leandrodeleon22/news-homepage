import classes from "./Header.module.css";
import logo from "./../assets/images/logo.svg";
import NavBar from "./NavBar";
import iconMenu from "./../assets/images/icon-menu.svg";

import { useDispatch } from "react-redux";
import { openModal } from "../features/modal/modalSlice";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <div className={classes.container}>
      <img src={logo} alt="logo" className={classes.logo} />

      <NavBar />
      <img
        src={iconMenu}
        alt="icon"
        className={`${classes.icon} ${classes.isVisible} `}
        onClick={() => dispatch(openModal())}
      />
    </div>
  );
};

export default Header;
