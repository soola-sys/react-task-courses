import CourseCard from "./CourseCard";
// import { mockCurrentCoursesList } from "../mockCoursesList";
import type { CourseItemProps } from "../types/types";

type CoursesType = {
  courses: CourseItemProps[]
}
const CourseList = ({ courses }: CoursesType) => {
  const listItems = courses.map((course: CourseItemProps) => <CourseCard key={course.id} course={course} />)
  return (
    <>
      <section className="courseList">
        {listItems}
      </section>
    </>
  );
};
export default CourseList;
