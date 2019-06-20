import { Action } from "@ngrx/store";
import { Book } from "../modules/book-store/models/books";

export enum BooksActionTypes {
  LoadBooks = "[Books] Load Books",
  BooksLoaded = "[Books] Books Loaded",
  BooksLoadError = "[Books] Books Load Error",
  SelectBook= "[Books] Book Selected",
  FilterBooks= "[Books] Filter Books",
  LoadFilterBooks = "[Books] Load Books Filterde by Genre Id"
}

export class LoadBooks implements Action {
  readonly type = BooksActionTypes.LoadBooks;
}

export class BooksLoadError implements Action {
  readonly type = BooksActionTypes.BooksLoadError;
  constructor(public payload: any) {}
}

export class BooksLoaded implements Action {
  readonly type = BooksActionTypes.BooksLoaded;
  constructor(public payload: Book[]) {}
}

export class SelectBook implements Action {
  readonly type = BooksActionTypes.SelectBook;
  constructor(public payload: string| number) {}
}

export class FilterBook implements Action {
  readonly type = BooksActionTypes.FilterBooks;
  constructor(public payload: number) {}
}
export type BooksAction = LoadBooks | BooksLoaded | BooksLoadError | FilterBook | SelectBook;

export const fromBooksActions = {
  LoadBooks,
  BooksLoaded,
  BooksLoadError,
  SelectBook,
  FilterBook
};
