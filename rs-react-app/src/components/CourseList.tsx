import CourseCard from "./CourseCard";
// import { mockCurrentCoursesList } from "../mockCoursesList";
import type { CourseItemProps, CoursesProps } from "../types/types";

type PickCoursesProps = Omit<CoursesProps, 'setCourses'>;

const CourseList = ({ courses, setOpen, setCurrentCourse }: PickCoursesProps, ) => {
  const listItems = courses?.map((course: CourseItemProps) => <CourseCard key={course.id} course={course} setOpen={setOpen} setCurrentCourse={setCurrentCourse}/>)
  return (
    <>
      <section className="courseList">
        {listItems}
      </section>
    </>
  );
};
export default CourseList;
