export class Book {
  id: number;
  name: string;
  author: string;
  year: number;
  genres: Genre[];
  isLiked: boolean;
}

export class Genre {
  id: number;
  name: string;
}
