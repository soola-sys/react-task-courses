
const EmptyCoursesList = () => {
    return (
        <section className="emptyCoursesList">
            <div className="emptyCoursesList-inner">
                <h1 className="emptyCoursesList-title">Your List is Empty</h1>
                <p className="emptyCoursesList-desc">Please you Add new course button</p>
                <button className="emptyCoursesList-btn btn-primary">Add new course</button>
            </div>
        </section>
    )
}

export default EmptyCoursesList;