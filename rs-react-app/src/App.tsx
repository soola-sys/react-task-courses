import './App.css';
import './css/header.css';
import './css/courses.css';

import Header from './components/Header';
import Courses from './components/Courses';

export default function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <Courses />
      </div>
    </>
  );
}
