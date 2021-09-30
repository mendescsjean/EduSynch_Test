import Modal from "react-modal";
import styles from "./styles.module.scss";
import loginImg from "Images/getStartedLogin.png";
import eyeIconImg from "Images/eyeIcon.png";
import eyeIconShowImg from "Images/eyeIconShow.png";
import btnCloseImg from "Images/btnClose.png";
import { useHistory } from "react-router-dom";
import { useState } from "react";

Modal.setAppElement("#root");

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    height: "479px",
    width: "525px",
    background: "#6A40E4",
    borderRadius: "4px",
    overflow: "inherit",
  },
};

const LoginModal: React.FC<ModalProps> = ({ isOpen, closeModal }) => {
  let history = useHistory();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      overlayClassName={styles.overlay}
      shouldCloseOnEsc
      htmlOpenClassName={styles[`ReactModal__Body--open`]}
      contentLabel="Example Modal"
    >
      <>
        <div className={styles.modalWrapper}>
          <img
            src={btnCloseImg}
            alt="Close modal button"
            className={styles.btnCloseImg}
            onClick={closeModal}
          />
          <img src={loginImg} alt="Get Started Just Login" />
          <form>
            <label>Username:</label>
            <div className={styles.eyeIconWrapper}>
              <input type="text" />
            </div>
            <label>Password:</label>
            <div className={styles.eyeIconWrapper}>
              <input type={isPasswordVisible ? "text" : "password"} />
              <img
                src={isPasswordVisible ? eyeIconShowImg : eyeIconImg}
                alt="Password"
                className={styles.eyeIcon}
                aria-hidden
                onClick={() => setIsPasswordVisible((prev: boolean) => !prev)}
              />
            </div>
            <button type="button" onClick={() => history.push("/dashboard")}>
              Login
            </button>
          </form>
        </div>
      </>
    </Modal>
  );
};

export default LoginModal;
