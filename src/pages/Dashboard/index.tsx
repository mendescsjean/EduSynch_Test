import Header from "pages/Dashboard/Header";
import Courses from "./Courses";
import styles from "./styles.module.scss";
import yellowShapeImg from "Images/yellowShape.png";
import helloStudentImg from "Images/helloStudent.png";
import meetingImg from "Images/meeting.png";
import purpleCircles from "Images/purpleCircles.png";
import { useCallback, useEffect, useRef, useState } from "react";

const Dashboard = () => {
  const [isTeacherMode, setIsTeacherMode] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (wrapperRef?.current) {
      if (isTeacherMode) {
        return wrapperRef.current.classList.add(styles.teacherMode);
      }
      return wrapperRef.current.classList.remove(styles.teacherMode);
    }
  }, [isTeacherMode]);

  const teacherModeHandle = useCallback(
    () => setIsTeacherMode((prev: boolean) => !prev),
    []
  );

  return (
    <>
      <div className={styles.dashboard}>
        <Header teacherModeHandle={teacherModeHandle} />
        <div className={styles.wrapper} ref={wrapperRef}>
          <div className={styles.content}>
            <img
              src={yellowShapeImg}
              alt="Yellow shape"
              className={styles.yellowShape}
            />
            <div className={styles.studentWrapper}>
              <img src={helloStudentImg} alt="Hello student" />
              <p>
                Whether you are a student trying to find your ideal private
                language teachers/tutors
              </p>
            </div>
            <img
              src={meetingImg}
              alt="Hello student"
              className={styles.meetingImg}
            />
          </div>
          <Courses />
          <img
            src={purpleCircles}
            alt="Purple circles"
            className={styles.purpleCirclesImg}
          />
        </div>
      </div>
      <div className={styles.footer}>
        <p>Copyright © 2020 Eduick. Todos os direitos reservados.</p>
      </div>
    </>
  );
};

export default Dashboard;
