import styles from "componenets/Header/Header.module.css";
import NavBar from "componenets/NavBar/NavBar";
const Header = () => {
  return (
      <div className={styles.container}>
        <NavBar />
      </div>
  );
};

export default Header;
