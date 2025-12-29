import CourseList from "./CourseList";

const Courses = () => {
  return (
    <>
      <section className="courses">
          <div className="courses-inner">
            <div className="courses-searchbar">
              <input
                type="text"
                placeholder="Input text..."
                className="search"
                id="search"
                name="search"
              />
              <button className="search-btn btn-primary">Search</button>
            </div>
            <button className="courses-btn btn-primary">Add new course</button>
          </div>
          <CourseList />
      </section>
    </>
  );
};

export default Courses;
