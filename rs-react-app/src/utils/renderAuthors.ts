import { mockedAuthorsList } from "../mockCoursesList";
import type { AuthorItemType } from "../types/types";

export const renderAuthors = (authorsArray: string[] | null): string => {
  const resultArray: string[] = []
  mockedAuthorsList.forEach(({id, name}: AuthorItemType) => {
    if (authorsArray && authorsArray.includes(id)) {
      resultArray.push(name)
    }
  });
  return resultArray.join(',')
}