const CourseInfo = () => {
    return (
        <>
            <div className="courseInfo">
                <p className="courseInfo-title">Javascript</p>
                <section className="courseInfo-content">
                    <div className="courseInfo-content-left">
                        <p className="courseInfo-content-title">Description</p>
                        <p className="courseInfo-content-desc">
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text
                            ever since the 1500s, when an unknown printer took a galley of
                            type and scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap into
                            electronic typesetting, remaining essentially unchanged. It was
                            popularised in the 1960s with the release of Letraset sheets
                            containing Lorem Ipsum passages, and more recently with desktop
                            publishing software like Aldus PageMaker including versions of
                            Lorem Ipsum.</p>
                    </div>
                    <div className="vertical"></div>
                    <div className="courseInfo-content-right">
                        <ul className="courseInfo-content-right courseInfo-list">
                            <li><p>ID:</p></li>
                            <li><p>Duration:</p></li>
                            <li><p>Created:</p></li>
                            <li><p>Authors:</p></li>
                        </ul>
                    </div>
                </section>
                <button className="courseInfo-btn btn-primary">Back</button>
            </div>
        </>
    )
}
export default CourseInfo;
