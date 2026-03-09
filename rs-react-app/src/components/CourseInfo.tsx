import { COURSECARD_LI_ITEM } from "../constants/courses";
import type { CourseDetailItem, CourseItemProps, setCourseOpenType } from "../types/types";
import { formatDate } from "../utils/formatDate";
import { formatDuration } from "../utils/formatDuration";
import { renderAuthors } from "../utils/renderAuthors";

interface CourseInfoProps {
    currentCourse: CourseItemProps | null
    isOpen: boolean,
    resetOpen: setCourseOpenType
}




const CourseInfo = ({resetOpen, currentCourse}: CourseInfoProps) => {
    if(currentCourse) {
        const {id , title , description , authors, duration , creationDate } = currentCourse;

        const courseDetails: CourseDetailItem[] = [
            { label: "ID:", value: id },
            { label: "Authors:", value: renderAuthors(authors) },
            { label: "Duration:", value: formatDuration(duration) },
            { label: "Created:", value: formatDate(creationDate) },
        ];
    
         return (
        <>
            <div className="courseInfo">
                <section className="courseInfo-content">
                    <div className="courseInfo-content-left">
                        <p className="courseInfo-content-title">{title}</p>
                        <p className="courseInfo-content-desc">{description}</p>
                    </div>
                    <div className="vertical"></div>
                    <ul className="courseInfo-content-right courseInfo-list">
                       {courseDetails.map(({ label, value }) => (
                        <li className={COURSECARD_LI_ITEM} key={label}><span>{label}</span> {value}</li>
                       ))}
                    </ul>
                </section>
                <button className="courseInfo-btn btn-primary" onClick={() => {
                    resetOpen(false);
                }}>Back</button>
            </div>
        </>
    )
    }
}
export default CourseInfo;
