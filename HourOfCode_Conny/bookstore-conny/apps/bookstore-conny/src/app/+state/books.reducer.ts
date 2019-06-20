import { BooksAction, BooksActionTypes } from "./books.actions";
import { Book } from "../modules/book-store/models/books";

export const BOOKS_FEATURE_KEY = "books";

/**
 * Interface for the 'Books' data used in
 *  - BooksState, and
 *  - booksReducer
 *
 *  Note: replace if already defined in another module
 */


export interface BooksState {
  list: Book[]; // list of Books; analogous to a sql normalized table
  selectedId?: string | number; // which Books record has been selected
  selectedFilterId: string | number; // id for filtering Books
  loaded: boolean; // has the Books list been loaded
  error?: any; // last none error (if any)
}

export interface BooksPartialState {
  readonly [BOOKS_FEATURE_KEY]: BooksState;
}

export const initialState: BooksState = {
  list: [],
  loaded: false,
  selectedFilterId: -1
};

export function booksReducer(
  state: BooksState = initialState,
  action: BooksAction
): BooksState {
  switch (action.type) {
    case BooksActionTypes.BooksLoaded: {
      state = {
        ...state,
        list: action.payload,
        loaded: true
      };
      break;
    }
    case BooksActionTypes.FilterBooks: {
      state = {
        ...state,
        selectedFilterId: action.payload
      };
      break;
    }
    case BooksActionTypes.SelectBook: {
      state = {
        ...state,
        selectedId: action.payload
      };
      break;
    }
  }
  return state;
}
