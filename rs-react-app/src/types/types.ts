export interface CourseItemProps {
  id: string,
  title: string,
  description: string,
  creationDate: string,
  duration: number,
  authors: string[] | null;
}

export type AuthorItemType = {
    id: string,
    name: string
}

export type SearchTypes = {
  Type: string
  class: string,
  Id: string,
  Name: string,
  placeHolder: string
}

export interface CoursesProps  {
  courses: CourseItemProps[] | null,
  setCourses: (courses: CourseItemProps[]| null) => void,
  setCurrentCourse: setCurrentCourseType,
  setOpen: setCourseOpenType
}

export type setCourseOpenType = (isOpen: boolean | null) => void;

export type setCurrentCourseType = (course: CourseItemProps) => void;

export type CourseDetailItem = {
  label: string;
  value: string | undefined;
}

export type EmptyCoursesListType = {
  title: string;
  desc: string;
  btnText: string;
}