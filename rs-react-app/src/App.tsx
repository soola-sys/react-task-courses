import './App.css';
import './css/header.css';
import './css/courses.css';
import './css/course-card.css';

import Header from './components/Header';
import CourseInfo from './components/CourseInfo';
import Courses from './components/Courses';
import { mockCurrentCoursesList } from "./mockCoursesList";
import { useState } from 'react';
import type { CourseItemProps } from './types/types';


export default function App() {
  const [courses , setCourses] = useState<CourseItemProps[] | null>(mockCurrentCoursesList);
  const [isOpen, setOpen] = useState<boolean | null>(false);
  const [currentCourse , setCurrentCourse] = useState<CourseItemProps | null>(null);
  return (
    <>
      <div className="wrapper">
        <Header />
        <main className="container">
          {isOpen ? (<CourseInfo isOpen={isOpen} currentCourse={currentCourse} resetOpen={setOpen} />) : (
        <Courses courses={courses} setCourses={setCourses} setOpen={setOpen} setCurrentCourse={setCurrentCourse}/>
        )}
        </main>
      </div>
    </>
  );
}
