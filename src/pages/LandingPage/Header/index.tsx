import styles from "./styles.module.scss";
import logo from "Images/logo.png";

interface HeaderProps {
  openLoginModalHandle: () => void;
}

const Header: React.FC<HeaderProps> = ({ openLoginModalHandle }) => {
  return (
    <div className={styles.header}>
      <div className={styles.listWrapper}>
        <img src={logo} alt="Logo" className={styles.listWrapper__logoImg} />
        <ul className={styles.listWrapper__list}>
          <li>How it works</li>
          <li>About us</li>
        </ul>
      </div>

      <button onClick={openLoginModalHandle} type="button">
        Get Started
      </button>
    </div>
  );
};

export default Header;
