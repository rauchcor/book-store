import { Injectable } from "@angular/core";

import { select, Store } from "@ngrx/store";

import { BooksPartialState } from "./books.reducer";
import { booksQuery } from "./books.selectors";
import { LoadBooks, SelectBook } from "./books.actions";

@Injectable()
export class BooksFacade {
  loaded$ = this.store.pipe(select(booksQuery.getLoaded));
  allBooks$ = this.store.pipe(select(booksQuery.getAllBooks));
  selectedBooks$ = this.store.pipe(select(booksQuery.getSelectedBooks));

  constructor(private store: Store<BooksPartialState>) {}

  loadAll() {
    this.store.dispatch(new LoadBooks());
  }

  selectBook(bookId: string) {
    this.store.dispatch(new SelectBook(bookId));
  }

}
