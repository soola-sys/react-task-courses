import CourseCard from "./CourseCard";
import { mockCurrentCoursesList , mockedAuthorsList} from "../mockCoursesList";
import type { CourseItemProps } from "../types/types";

console.log(mockedAuthorsList);

// interface CourseItemProps {
//   id: string,
//   title: string,
//   description: string,
//   creationDate: string,
//   duration: number,
//   authors: string[] | null;
// }

type CoursesListType = CourseItemProps[];

const CourseList = () => {
   const listItems = mockCurrentCoursesList.map((course: CourseItemProps) => <CourseCard key={course.id} course={course} /> )
  return (
    <>
      <section className="courseList">
       {listItems}
      </section>
    </>
  );
};
export default CourseList;
