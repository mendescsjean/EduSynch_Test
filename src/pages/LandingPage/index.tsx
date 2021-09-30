import { useState } from "react";
import Header from "./Header";
import LoginModal from "./LoginModal";
import styles from "./styles.module.scss";
import titleImg from "Images/findYourBestTeacher.svg";
import leavesImg from "Images/leaves.png";
import womanImg from "Images/woman.png";

const LandingPage = () => {
  const [checked, setChecked] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const checkboxHandle = (id: string) => {
    if (id === checked) {
      return true;
    }
    return false;
  };

  const onChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.id === checked) {
      return setChecked("");
    }
    setChecked(e.target.id);
  };

  const checkboxesRender = () => {
    const elementsToRender = [
      {
        title: "I'M A TEACHER",
        id: "teacher",
      },
      {
        title: "I'M A STUDENT",
        id: "student",
      },
    ];

    return (
      <>
        {elementsToRender.map((element: { title: string; id: string }) => {
          return (
            <div className={styles.options} key={element.title}>
              <label className={styles.containerCheckbox}>
                {element.title}
                <input
                  type="checkbox"
                  id={element.id}
                  checked={checkboxHandle(element.id)}
                  onChange={onChangeHandle}
                />
                <span className={styles.checkmark}></span>
              </label>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <div className={styles.landingPage}>
      <Header openLoginModalHandle={() => setModalIsOpen(true)} />
      <div className={styles.container}>
        <img
          className={styles.container__womanImg}
          src={womanImg}
          alt="Teacher writing down"
        />
        <div className={styles.formContainer}>
          <img
            src={titleImg}
            alt="Find your best teacher"
            className={styles.formContainer__titleImg}
          />
          <p>
            Whether you are a student trying to find your ideal private language
            teachers/tutors or a teacher trying to find great students for your
            customised private lessons!
          </p>
          <input type="text" placeholder="Type here what are you looking for" />
          <div className={styles.optionsWrapper}>
            {checkboxesRender()}
            <button type="button">SEARCH</button>
          </div>
        </div>
        <img
          src={leavesImg}
          alt="Leaves"
          className={styles.container__leaves}
        />
      </div>
      <LoginModal
        isOpen={modalIsOpen}
        closeModal={() => setModalIsOpen(false)}
      />
    </div>
  );
};

export default LandingPage;
