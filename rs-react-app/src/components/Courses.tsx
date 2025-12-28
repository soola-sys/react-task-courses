import CourseList from "./CourseList";

const Courses = () => {
  return (
    <>
      <main className="courses">
        <div className="container">
          <div className="courses-inner">
            <div className="courses-searchbar">
              <input
                type="text"
                placeholder="Input..."
                className="search"
                id="search"
                name="search"
              />
              <button className="search-btn btn-primary">Search</button>
            </div>
            <button className="courses-btn btn-primary">Add new course</button>
          </div>
          <CourseList />
        </div>
      </main>
    </>
  );
};

export default Courses;
