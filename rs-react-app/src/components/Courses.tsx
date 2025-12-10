import deleteIcon from "../assets/Icon-Trash.svg";
import editIcon from "../assets/Icon-Edit.svg";

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

const CourseList = () => {
  return (
    <>
      <section className="courseList">
        <div className="courseCard">
          <div className="courseCard-inner">
              <div className="courseCard-content">
                  <h3 className="courseCard-title">React</h3>
                  <p className="courseCard-text">
                      Lorem Ipsum is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard dummy text
                      ever since the 1500s, when an unknown printer took a galley of
                      type and scrambled it to make a type specimen book. It has
                      survived not only five centuries, but also the leap into
                      electronic typesetting, remaining essentially unchanged. It was
                      popularised in the 1960s with the release of Letraset sheets
                      containing Lorem Ipsum passages, and more recently with desktop
                      publishing software like Aldus PageMaker including versions of
                      Lorem Ipsum.
                  </p>
              </div>
            <div className="courseCard-content-right">
                <ul className="courseCard-content-right courseCard-list">
                    <li><p>Authors:</p></li>
                    <li><p>Duration:</p></li>
                    <li><p>Created:</p></li>
                </ul>
                <div className="courseCard-content-right courseCard-btns">
                    <button className="courseCard-showBtn btn-primary">Show course</button>
                    <button className="courseCard-deleteBtn btn-primary">
                        <img src={deleteIcon} alt="Delete"/>
                    </button>
                    <button className="courseCard-EditBtn btn-primary">
                        <img src={editIcon} alt="Edit Button"/>
                    </button>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Courses;
