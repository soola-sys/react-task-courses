import CourseCard from "./CourseCard";
// import { mockCurrentCoursesList } from "../mockCoursesList";
import type { CourseItemProps, CoursesProps } from "../types/types";


const CourseList = ({ courses, setOpen, setCurrentCourse, setCourses }: CoursesProps, ) => {
  const listItems = courses?.map((course: CourseItemProps) => <CourseCard key={course.id} course={course} setOpen={setOpen} setCurrentCourse={setCurrentCourse} setCourses={setCourses} courses={courses}/>)
  return (
    <>
      <section className="courseList">
        {listItems}
      </section>
    </>
  );
};
export default CourseList;
