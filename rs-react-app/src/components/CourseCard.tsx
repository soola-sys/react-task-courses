
import deleteIcon from "../assets/Icon-Trash.svg";
import editIcon from "../assets/Icon-Edit.svg";
import type { CourseDetailItem, CourseItemProps, setCourseOpenType, setCurrentCourseType } from "../types/types";
import { formatDate } from "../utils/formatDate";
import { formatDuration } from "../utils/formatDuration";
import { renderAuthors } from "../utils/renderAuthors";
import { COURSECARD_LI_ITEM } from "../constants/courses";

interface CourseProp {
  course: CourseItemProps,
  setOpen: setCourseOpenType,
  setCurrentCourse: setCurrentCourseType;
  setCourses: (courses: CourseItemProps[]| null) => void;
  courses: CourseItemProps[] | null;
}



const CourseCard = ({ course, setOpen, setCurrentCourse, setCourses, courses}: CourseProp): React.ReactNode => {
  const { title, description, duration, creationDate, authors } = course;

  const deleteCourse = (currentCourse: CourseItemProps) => {
    if (!courses) return;
    const updatedCourses = courses.filter((el) => el.id !== currentCourse.id);
    localStorage.setItem('courses', JSON.stringify(updatedCourses));
    setCourses(updatedCourses);
  }

  const courseDetails: CourseDetailItem[] = [
    { label: "Authors:", value: renderAuthors(authors) },
    { label: "Duration:", value: formatDuration(duration) },
    { label: "Created:", value: formatDate(creationDate) },
  ];

  return (
    <div className="courseCard">
      <div className="courseCard-inner">
        <div className="courseCard-content">
          <h3 className="courseCard-title">{title}</h3>
          <p className="courseCard-text">
            {description}
          </p>
        </div>
        <div className="courseCard-content-right">
          <ul className="courseCard-content-right courseCard-list">
            {
              courseDetails.map(({ label, value }) => (
                <li className={COURSECARD_LI_ITEM} key={label}><span>{label}</span> {value}</li>
              ))
            }
          </ul>
          <div className="courseCard-content-right courseCard-btns">
            <button className="courseCard-showBtn btn-primary" onClick={() => {
              setOpen(true);
              setCurrentCourse(course);
            }}>Show course</button>
            <button className="courseCard-deleteBtn btn-primary" onClick={() => deleteCourse(course)}>
              <img src={deleteIcon} alt="Delete" />
            </button>
            <button className="courseCard-EditBtn btn-primary">
              <img src={editIcon} alt="Edit Button" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseCard;