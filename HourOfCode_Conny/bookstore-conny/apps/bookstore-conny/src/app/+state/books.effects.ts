import { Injectable } from "@angular/core";
import { Effect, Actions } from "@ngrx/effects";
import { DataPersistence } from "@nrwl/angular";

import { BooksPartialState, BOOKS_FEATURE_KEY } from "./books.reducer";
import {
  LoadBooks,
  BooksLoaded,
  BooksLoadError,
  BooksActionTypes
} from "./books.actions";
import { BOOKLIST, Book } from "../modules/book-store/models/books";
import { BookListComponent } from "../modules/book-store/components/book-list/book-list.component";
import { Service, BookDto } from "../core/services/api/SwaggerWebAPI";
import { map } from "rxjs/operators";

@Injectable()
export class BooksEffects {

  @Effect() loadBooks$ = this.dataPersistence.fetch(
    BooksActionTypes.LoadBooks,
    {
      run: (action: LoadBooks, state: BooksPartialState) => {
            this.backend
            .apiBookGet()
            .pipe(
              map(books =>  new BooksLoaded(this.mapBooks(books)))
              );
      },
      onError: (action: LoadBooks, error) => {
        console.error("Error", error);
        return new BooksLoadError(error);
      }
    }
  );

  @Effect() loadBooks = this.dataPersistence.navigation(BookListComponent, {
    run: (a, state) => {
      const filter = parseInt(a.queryParams["filter"], 0);
     if (Number.isNaN(filter) || filter === -1) {
       return new BooksLoaded(BOOKLIST);
     } else {
       return new BooksLoaded(BOOKLIST.filter(x =>
         x.genres.some(g => g.id === filter)
       ));
     }
    },
    onError: (a, e: any) => {
      console.log(e);
      return null;
    }
  });

  private mapBooks(books: any) {
    return BOOKLIST;
    return books.map(book => {
      return this.mapBook(book);
    });
  }

  private mapBook(bookdto: BookDto): Book {
    const booktemp: Book = {
      id: bookdto.id,
      name: bookdto.name,
      author: bookdto.author,
      year: bookdto.year,
      genres: [],
      isLiked: bookdto.isLiked
    };
    return booktemp;
  }

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<BooksPartialState>,
    private backend: Service
  ) {}
}
