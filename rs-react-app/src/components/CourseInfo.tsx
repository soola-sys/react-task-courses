import { EMPTY_AUTHORS_LIST } from "../constants/authors";
import type { CourseItemProps, setCourseOpenType } from "../types/types";
import { formatDate } from "../utils/formatDate";
import { formatDuration } from "../utils/formatDuration";
import { renderAuthors } from "../utils/renderAuthors";

interface CourseInfoProps {
    currentCourse: CourseItemProps | null
    isOpen: boolean,
    resetOpen: setCourseOpenType
}


const CourseInfo = ({isOpen, resetOpen, currentCourse}: CourseInfoProps) => {
    if(currentCourse) {
        const {id , title , description , authors, duration , creationDate } = currentCourse;
         return (
        <>
            <div className="courseInfo">
                <p className="courseInfo-title"></p>
                <section className="courseInfo-content">
                    <div className="courseInfo-content-left">
                        <p className="courseInfo-content-title">{title}</p>
                        <p className="courseInfo-content-desc">
                           {description}</p>
                    </div>
                    <div className="vertical"></div>
                    <div className="courseInfo-content-right">
                        <ul className="courseInfo-content-right courseInfo-list">
                            <li><span>ID:</span>{id}</li>
                            <li><span>Authors:</span>{renderAuthors(authors) ? renderAuthors(authors) : EMPTY_AUTHORS_LIST}</li>
                            <li><span>Duration:</span>{formatDuration(duration)} hours</li>
                            <li><span>Created:</span>{formatDate(creationDate)}</li>
                        </ul>
                    </div>
                </section>
                <button className="courseInfo-btn btn-primary" onClick={(event) => {
                    console.log(event);
                    resetOpen(false);
                }}>Back</button>
            </div>
        </>
    )
    }
}
export default CourseInfo;
