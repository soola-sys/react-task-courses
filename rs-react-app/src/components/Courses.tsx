import { memo, useState } from "react";
import type { CourseItemProps, CoursesProps } from "../types/types";
import CourseList from "./CourseList";
import { SEARCH_PROPS } from "../constants/search";
import { EMPTY_COURSES_LIST } from "../constants/courses";

const Courses = memo(function Courses({ courses, setCourses, setOpen, setCurrentCourse }: CoursesProps) {
  const [search, setSearch ] = useState('');
  const filteredCourses = (searchValue: string) => {
    if(courses) {
      return courses.filter((course: CourseItemProps) => {
         const lowerSearchValue = searchValue.toLowerCase();
         const hasTitle = course.title.toLowerCase().includes(lowerSearchValue);
         const hasDesc = course.description.toLowerCase().includes(lowerSearchValue);
         if(hasTitle || hasDesc) {
           return course
         }
       })
    }
    return null;
  }

  return (
    <>
      <section className="courses">
          <div className="courses-inner">
            <div className="courses-searchbar">
              <input
                type={SEARCH_PROPS.Type}
                placeholder={SEARCH_PROPS.placeHolder}
                className={SEARCH_PROPS.class}
                id={SEARCH_PROPS.Id}
                name={SEARCH_PROPS.Name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setSearch(e.target.value);
                }}
              />
              <button className="search-btn btn-primary" 
              onClick={() => {
                  const result = search ? filteredCourses(search) : courses;
                  setCourses(result);
              }}>
                Search
              </button>
            </div>
            <button className="courses-btn btn-primary">{EMPTY_COURSES_LIST.btnText}</button>
          </div>
          <CourseList courses={courses} setOpen={setOpen} setCourses={setCourses} setCurrentCourse={setCurrentCourse}/>
      </section>
    </>
  );
});

export default Courses;
