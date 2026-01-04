
import deleteIcon from "../assets/Icon-Trash.svg";
import editIcon from "../assets/Icon-Edit.svg";
import type { CourseItemProps } from "../types/types";
import { formatDate } from "../utils/formatDate";

type CourseProp = {
  course: CourseItemProps
}

const CourseCard = ({ course }: CourseProp) => {
  const { title, description, duration, creationDate } = course;
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
          <li><span>Authors:</span></li>
          <li><span>Duration:</span>{duration}</li>
          <li><span>Created:</span>{formatDate(creationDate)}</li>
        </ul>
        <div className="courseCard-content-right courseCard-btns">
          <button className="courseCard-showBtn btn-primary">Show course</button>
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