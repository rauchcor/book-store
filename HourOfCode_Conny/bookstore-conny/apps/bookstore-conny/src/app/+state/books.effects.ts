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
import { BOOKLIST } from "../modules/book-store/models/books";

@Injectable()
export class BooksEffects {

  @Effect() loadBooks$ = this.dataPersistence.fetch(
    BooksActionTypes.LoadBooks,
    {
      run: (action: LoadBooks, state: BooksPartialState) => {
          if ( state[BOOKS_FEATURE_KEY].selectedFilterId === -1) {
            return new BooksLoaded(BOOKLIST);
          } else {
            return new BooksLoaded(BOOKLIST.filter(x =>
              x.genres.some(g => g.id === state[BOOKS_FEATURE_KEY].selectedFilterId)
            ));
        }
      },

      onError: (action: LoadBooks, error) => {
        console.error("Error", error);
        return new BooksLoadError(error);
      }
    }
  );


  @Effect() loadSelectedFilterId$ = this.dataPersistence.fetch(
    BooksActionTypes.FilterBooks,
    {
      run: (action: LoadBooks, state: BooksPartialState) => {
            return new LoadBooks();
      },

      onError: (action: LoadBooks, error) => {
        console.error("Error", error);
        return new BooksLoadError(error);
      }
    }
  );



  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<BooksPartialState>
  ) {}
}
