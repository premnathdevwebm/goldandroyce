import { NavLink, useNavigate } from "react-router-dom";

import styles from "./NavBar.module.css";
import logo from "../../assets/navlogo.png";
import contactlogo from "../../assets/Vector.png"
const Grid = () => {
  const navigate = useNavigate();
  const gotoContact = () => {
    navigate("/contact");
  };
  return (
    <div className={styles["grid-container"]}>
      <div className={styles["column-1"]}>
        <div className={styles.row}>
          <img src={logo} alt="Logo" className={styles.logo} />
        </div>
      </div>
      <div className={styles["column-2"]}>
        <div className={styles.row}>
          <nav className={styles["horizontal-nav"]}>
            <ul>
              <li>
                <NavLink
                  to="/"
                  style={({ isActive }) => {return {color: isActive ? "#BFAB6D" : "#000"}}}
                >
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  style={({ isActive }) => {return {color: isActive ? "#BFAB6D" : "#000"}}}
                >
                  ABOUT US
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/verticals"
                  style={({ isActive }) => {return {color: isActive ? "#BFAB6D" : "#000"}}}
                >
                  VERTICALS
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  style={({ isActive }) => {return {color: isActive ? "#BFAB6D" : "#000"}}}
                >
                  PROJECTS
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blogs"
                  style={({ isActive }) => {return {color: isActive ? "#BFAB6D" : "#000"}}}
                >
                  BLOGS
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/gallery"
                  style={({ isActive }) => {return {color: isActive ? "#BFAB6D" : "#000"}}}
                >
                  GALLERY
                </NavLink>
              </li>
            </ul>
          </nav>
          <button className={styles.button} onClick={gotoContact}>
            <span>Contact Us</span><img src={contactlogo} alt="contactus" /> 
          </button>
        </div>
        <div className={`${styles.row} ${styles["empty-row"]}`}></div>
      </div>
    </div>
  );
};

export default Grid;
