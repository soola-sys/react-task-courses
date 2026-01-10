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
  class: string,
  Id: string,
  Name: string,
  placeHolder: string
}