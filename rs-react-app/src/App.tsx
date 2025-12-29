import './App.css';
import './css/header.css';
import './css/courses.css';
import './css/course-card.css';

import Header from './components/Header';
import CourseInfo from './components/CourseInfo';
// import Courses from './components/Courses';
// import EmptyCoursesList from './components/EmptyCoursesList';

export default function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <main className="container">
        <CourseInfo />
        {/* <Courses /> */}
        {/* <EmptyCoursesList /> */}
        </main>
      </div>
    </>
  );
}
