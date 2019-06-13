export class Genre {
  id: number;
  name: string;
}


export const GENRES: { [id: number]: Genre }  = {
  0: { id: 0, name: "Romance" },
  1: { id: 1, name: "Fairytale" },
  2: { id: 2, name: "Drama" },
  3: { id: 3, name: "Fantasy" },
  4: { id: 4, name: "Mystery" },
  5: { id: 5, name: "Science fiction" },
  6: { id: 6, name: "Suspense" },
  7: { id: 7, name: "Young Adult" },
  8: { id: 8, name: "Action and adbenture" }
};

export const GENRELIST: Genre[] = [
  { id: 0, name: "Romance" },
  { id: 1, name: "Fairytale" },
  { id: 2, name: "Drama" },
  { id: 3, name: "Fantasy" },
  { id: 4, name: "Mystery" },
  { id: 5, name: "Science fiction" },
  { id: 6, name: "Suspense" },
  { id: 7, name: "Young Adult" },
  { id: 8, name: "Action and adbenture" }
];
