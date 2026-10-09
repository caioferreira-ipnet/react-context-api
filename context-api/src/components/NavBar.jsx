import { NavLink } from "react-router-dom";
import styles from "../styles/styleComponents/NavBar.module.css";
const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <NavLink
        className={({ isActive }) => (isActive ? styles.active : "")}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? styles.active : "")}
        to="/details"
      >
        Details
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? styles.active : "")}
        to="/about"
      >
        About
      </NavLink>
    </nav>
  );
};

export default NavBar;
