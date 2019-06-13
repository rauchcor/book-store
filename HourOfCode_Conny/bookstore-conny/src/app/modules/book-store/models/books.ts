import { Genre, GENRES } from "./genre";

export class Book {
  id: number;
  name: string;
  author: string;
  year: number;
  genres: Genre[];
  isLiked: boolean;
}

export const BOOKLIST: Book[] = [
  {
    id: 1,
    name: "A Tale of Two Cities",
    author: "Charles Dickens",
    year: 1859,
    genres: [GENRES[4], GENRES[0]],
    isLiked: null
  },
  {
    id: 2,
    name: "The Lord of the Rings",
    author: "J. R. R. Tolkien",
    year: 1954,
    genres: [GENRES[8], GENRES[5]],
    isLiked: null
  },
  {
    id: 3,
    name: "The Little Prince",
    author: "Antoine de Saint-Exupéry",
    year: 1943,
    genres: [GENRES[1], GENRES[7], GENRES[5]],
    isLiked: null
  },
  {
    id: 4,
    name: "Harry Potter and the Philosopher's Stone",
    author: "J. K. Rowling",
    year: 1997,
    genres: [GENRES[7], GENRES[1], GENRES[2]],
    isLiked: null
  },
  {
    id: 5,
    name: "The Hobbit",
    author: "J. R. R. Tolkien",
    year: 1937,
    genres: [GENRES[1], GENRES[8]],
    isLiked: null
  },
  {
    id: 6,
    name: "Alice's Adventures in Wonderland",
    author: "Lewis Carroll",
    year: 1865,
    genres: [GENRES[3], GENRES[8], GENRES[7]],
    isLiked: null
  }
];
