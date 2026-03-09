import { mockedAuthorsList } from "../mockCoursesList";
import type { AuthorItemType } from "../types/types";
import { EMPTY_AUTHORS_LIST } from "../constants/courses";


export const renderAuthors = (authorsArray: string[] | null): string => {
  const resultArray: string[] = [];
  if(!authorsArray) return EMPTY_AUTHORS_LIST;
  mockedAuthorsList.forEach(({id, name}: AuthorItemType) => {
    if (authorsArray.includes(id)) {
      resultArray.push(name)
    }
  });
  return resultArray.join(',')
}