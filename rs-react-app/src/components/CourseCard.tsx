
import deleteIcon from "../assets/Icon-Trash.svg";
import editIcon from "../assets/Icon-Edit.svg";
import type { CourseItemProps, setCourseOpenType, setCurrentCourseType } from "../types/types";
import { formatDate } from "../utils/formatDate";
import { formatDuration } from "../utils/formatDuration";
import { renderAuthors } from "../utils/renderAuthors";
import { EMPTY_AUTHORS_LIST } from "../constants/authors";

interface CourseProp {
  course: CourseItemProps,
  setOpen: setCourseOpenType,
  setCurrentCourse: setCurrentCourseType;
}

const CourseCard = ({ course, setOpen, setCurrentCourse }: CourseProp): React.ReactNode => {
  const { title, description, duration, creationDate, authors } = course;
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
            <li><span>Authors:</span>{renderAuthors(authors) ? renderAuthors(authors) : EMPTY_AUTHORS_LIST}</li>
            <li><span>Duration:</span>{formatDuration(duration)} hours</li>
            <li><span>Created:</span>{formatDate(creationDate)}</li>
          </ul>
          <div className="courseCard-content-right courseCard-btns">
            <button className="courseCard-showBtn btn-primary" onClick={() => {
              setOpen(true);
              setCurrentCourse(course);
            }}>Show course</button>
            <button className="courseCard-deleteBtn btn-primary">
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