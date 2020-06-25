export interface Author {
  id: number;
  name: string;
}

export interface ResponseAuthors {
  count: number;
  next?: any;
  previous?: any;
  results: Author[];
}

export interface RequestAuthor {
  name: string;
}
