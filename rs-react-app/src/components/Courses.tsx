import type { SearchTypes } from "../types/types";
import CourseList from "./CourseList";

const ADD_COURSE_BUTTON_TEXT: string = "Add new course";

const SEARCH_PROPS: SearchTypes = {
  class: "search",
  Id: "search",
  Name: "search",
  placeHolder: "Input text..."
}



const Courses = () => {
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
              />
              <button className="search-btn btn-primary">Search</button>
            </div>
            <button className="courses-btn btn-primary">{ADD_COURSE_BUTTON_TEXT}</button>
          </div>
          <CourseList />
      </section>
    </>
  );
};

export default Courses;
