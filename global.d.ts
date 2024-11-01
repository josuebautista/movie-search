export type SearchResponse = {
  Search: Search[];
  totalResults: string;
  Response: string;
}

export type Search = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: Type;
  Poster: string;
}

export enum Type {
  Movie = "movie",
  Series = "series",
}


export type ErrorResponse = {
  Response: string;
  Error: string;
}


export type Movie = {
  id: string;
  title: string;
  year: string;
  poster: string;
  type: Type;
}