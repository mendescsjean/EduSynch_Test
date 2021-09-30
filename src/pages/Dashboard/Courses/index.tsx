import cardImg from "Images/cardMeeting.png";
import stars from "Images/stars.png";
import styles from "./styles.module.scss";

const Courses = () => {
  const coursesRender = () => {
    const listOfCourses = [
      { description: "Master English: Improve Your Speaking", lessons: 10 },
      { description: "Master Spanish: Improve Your Speaking", lessons: 15 },
      { description: "Master Portuguese: Improve Your Speaking", lessons: 12 },
      { description: "Master French: Improve Your Speaking", lessons: 10 },
      { description: "Master Italian: Improve Your Speaking", lessons: 18 },
      { description: "Master Greek: Improve Your Speaking", lessons: 17 },
    ];

    return listOfCourses.map(
      (item: { description: string; lessons: number }) => {
        return (
          <div className={styles.course} key={item.description}>
            <img src={cardImg} alt="Meeting" className={styles.meetingImg} />
            <div className={styles.starsWrapper}>
              <img src={stars} alt="Rating stars" />
              <button type="button">{`${item.lessons} LESSONS`}</button>
            </div>
            <p>{item.description}</p>
          </div>
        );
      }
    );
  };

  return <div className={styles.courses}>{coursesRender()}</div>;
};

export default Courses;
