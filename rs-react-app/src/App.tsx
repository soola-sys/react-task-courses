import './App.css';
import './css/header.css';
import './css/courses.css';
import './css/course-card.css';
import './css/login-page.css';

import Header from './components/Header';
import CourseInfo from './components/CourseInfo';
import Courses from './components/Courses';
import { mockCurrentCoursesList } from "./mockCoursesList";
import { useState } from 'react';
import type { CourseItemProps } from './types/types';
import EmptyCoursesList from './components/EmptyCoursesList';
import LoginPage from './components/LoginPage';


export default function App() {
  const [courses, setCourses] = useState<CourseItemProps[] | null>(() => {
    const saved = localStorage.getItem('courses');
    return saved ? JSON.parse(saved) : mockCurrentCoursesList;
  });
  const [isOpen, setOpen] = useState<boolean | null>(false);
  const [currentCourse , setCurrentCourse] = useState<CourseItemProps | null>(null);
  return (
    <>
      <div className="wrapper">
        <Header />
        {
          
          courses?.length ?  (<main className="container">
          {
           isOpen ? (<CourseInfo isOpen={isOpen} currentCourse={currentCourse} resetOpen={setOpen} />) : (
           <Courses courses={courses} setCourses={setCourses} setOpen={setOpen} setCurrentCourse={setCurrentCourse}/>
           )
          }
        </main>) : <EmptyCoursesList setCourses={setCourses} />
        }
      </div>
    </>
  );
}
