import { useState } from "react";
import purpleBlock from "Images/purpleBlock.png";
import logo from "Images/logo.png";
import avatar from "Images/avatar.png";
import chevronDownImg from "Images/chevronDown.png";
import chevronUpImg from "Images/chevronUp.png";
import arrowRightImg from "Images/arrowRight.png";
import styles from "./styles.module.scss";
import { useHistory } from "react-router-dom";

interface Props {
  teacherModeHandle: () => void;
}

const Header = ({ teacherModeHandle }: Props) => {
  let history = useHistory();
  const [chevronImgToggle, setChevronImgToggle] = useState(false);

  const onClickHandle = () => {
    teacherModeHandle();
    setChevronImgToggle((prev: boolean) => !prev);
  };

  return (
    <>
      <div className={styles.header}>
        <div className={styles.logoContainer}>
          <img src={purpleBlock} alt="Purple block" className={styles.hideMd} />
          <img
            src={logo}
            alt="Logo"
            className={styles.logo}
            onClick={() => history.push("/")}
          />
          <span className={styles.hideMd}>My classes</span>
        </div>
        <div className={styles.avatarContainer}>
          <button className={styles.hideMd} type="button">
            CHANGE TO TEACHER MODE
          </button>
          <img
            src={chevronImgToggle ? chevronUpImg : chevronDownImg}
            alt="Seta para baixo"
            className={styles.chevron}
            onClick={onClickHandle}
            aria-hidden
          />
          <img src={avatar} alt="Avatar" />
        </div>
      </div>
      <div className={chevronImgToggle ? styles.teacherMode : styles.hide}>
        <p>CHANGE TO TEACHER MODE</p>
        <img
          src={arrowRightImg}
          alt="Right arrow"
          className={styles.arrowRightImg}
        />
      </div>
    </>
  );
};

export default Header;
