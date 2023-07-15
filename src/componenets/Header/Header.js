import styles from "./Header.module.css";
import NavBar from "../NavBar/NavBar";
import mobileIcon from "../../assets/mobileicon.png"
import mailIcon from "../../assets/mailicon.png"
const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.row1}>
        <div className={styles["data-container"]}>
          <div className={styles["data-item"]}>
            <img src={mobileIcon} alt="Mobile Icon" className={styles.icon} />
            <span className={styles.data}>+ 91 91755 22222</span>
          </div>
          <div className={styles["data-item"]}>
            <img src={mailIcon} alt="Email Icon" className={styles.icon} />
            <span className={styles.data}>goldenroydesign@gmail.com</span>
          </div>
        </div>
      </div>
      <div className={styles.row2}>
        <NavBar />
      </div>
    </div>
  );
};

export default Header;
