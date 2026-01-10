import { memo, useState } from "react";
import type { CourseItemProps, SearchTypes,  } from "../types/types";
import CourseList from "./CourseList";
import { mockCurrentCoursesList } from "../mockCoursesList";

const ADD_COURSE_BUTTON_TEXT: string = "Add new course";

const SEARCH_PROPS: SearchTypes = {
  class: "search",
  Id: "search",
  Name: "search",
  placeHolder: "Input text..."
}


const Courses = memo(function Courses() {
  const [search, setSearch ] = useState('');
  const [courses , setCourses] = useState(mockCurrentCoursesList);

  const filteredCourses = (searchValue: string) => {
    return courses.filter((course: CourseItemProps) => {
      const lowerSearchValue = searchValue.toLowerCase();
      const hasTitle = course.title.toLowerCase().includes(lowerSearchValue);
      const hasDesc = course.description.toLowerCase().includes(lowerSearchValue);
      if(hasTitle || hasDesc) {
        return course
      }
    })
  }
  return (
    <>
      <section className="courses">
          <div className="courses-inner">
            <div className="courses-searchbar">
              <input
                type="text"
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
                  const result = search ? filteredCourses(search) : mockCurrentCoursesList;
                  setCourses(result);
              }}>
                Search
              </button>
            </div>
            <button className="courses-btn btn-primary">{ADD_COURSE_BUTTON_TEXT}</button>
          </div>
          <CourseList courses={courses}/>
      </section>
    </>
  );
})

export default Courses;
