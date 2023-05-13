import classes from "./NavBar.module.css";
import closeButton from "./../assets/images/icon-menu-close.svg";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../features/modal/modalSlice";

const NavBar = () => {
  const dispatch = useDispatch();

  const { isVisible } = useSelector((state) => state.modal);

  return (
    <>
      <nav
        className={`${classes.container} ${
          isVisible ? classes.showButton : ""
        } `}
      >
        <img
          src={closeButton}
          alt="closeButton"
          className={classes.closeButton}
          onClick={() => dispatch(closeModal())}
        />
        <ul>
          <li>Home</li>
        </ul>
        <ul>
          <li>New</li>
        </ul>
        <ul>
          <li>Popular</li>
        </ul>
        <ul>
          <li>Trending</li>
        </ul>
        <ul>
          <li>Categories</li>
        </ul>
      </nav>
      {isVisible && <div className={classes.blackBackground}></div>}
    </>
  );
};

export default NavBar;
