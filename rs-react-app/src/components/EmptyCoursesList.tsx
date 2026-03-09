import type { CoursesProps } from "../types/types";
import { mockedCoursesList } from '../mockCoursesList';
import { EMPTY_COURSES_LIST } from "../constants/courses";

type CoursesType = Pick<CoursesProps, 'setCourses'>; 

const EmptyCoursesList = ( { setCourses } : CoursesType) => {
    
    const clearLocalStorage  = () => {
        localStorage.clear();
        setCourses(mockedCoursesList);
    }

    return (
        <section className="emptyCoursesList">
            <div className="emptyCoursesList-inner">
                <h1 className="emptyCoursesList-title">{EMPTY_COURSES_LIST.title}</h1>
                <p className="emptyCoursesList-desc">{EMPTY_COURSES_LIST.desc}</p>
                <button className="emptyCoursesList-btn btn-primary" onClick={clearLocalStorage}>{EMPTY_COURSES_LIST.btnText}</button>
            </div> 
        </section>
    )
}

export default EmptyCoursesList;