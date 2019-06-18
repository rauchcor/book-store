import { Injectable } from "@angular/core";
import { Book, BOOKLIST } from "../models/books";
import {
  Observable,
  of,
  throwError,
  BehaviorSubject
} from "rxjs";
import { map, switchMap, scan} from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { Genre, GENRELIST } from "../models/genre";
import { Service, BookDto } from "../../../core/services/api/SwaggerWebAPI";

@Injectable({
  providedIn: "root"
})
export class BookStore {

  private allBooks: BehaviorSubject<Book[]> =
                    new BehaviorSubject<Book[]>(BOOKLIST);
  allBooks$: Observable<Book[]> = this.allBooks.pipe(
    scan((acc: Book[], newVal: Book[]) => {
      return { ...acc, ...newVal };
    }, BOOKLIST)
  );

  private currentFilterGenreId: BehaviorSubject<number> = new BehaviorSubject<number>(-1);
  currentFilterGenreId$: Observable<number> = this.currentFilterGenreId.asObservable();

  private allgenres: BehaviorSubject<Genre[]> = new BehaviorSubject<Genre[]>(GENRELIST);
  allgenres$: Observable<Genre[]> = this.allgenres.asObservable();

  filteredBooks$: Observable<Book[]> = this.currentFilterGenreId.pipe(
    switchMap((genreID) => {
      return of(this.filterBooks(genreID));
    })
  );

  constructor(public httpClient: HttpClient, public service: Service) {
    this.allBooks.next(BOOKLIST);
  }

  filterByGenres(genreID: number) {
    this.currentFilterGenreId.next(genreID);
  }

  addBook(book: Book): void {
    book.id = this.allBooks.value.length + 1;
    const bookList = [...this.allBooks.value, book];
    this.allBooks.next(bookList);
  }

  editBook(book: Book): void {
    const bookList = [...this.allBooks.value];
    const i = bookList.findIndex(x => x.id === book.id);
    if (i !== -1) {
      bookList[i] = book;
    }
    this.allBooks.next(bookList);
  }

  findById(id: number): Observable<Book> {
    const i = this.allBooks.value.findIndex(x => x.id === id);
    if (i !== -1) {
      return of(this.allBooks.value[i]);
    } else {
      throwError("Could not find this book");
    }
  }

  deleteById(id: number): Observable<Book[]> {
    const bookList = [...this.allBooks.value];
    const i = bookList.findIndex(x => x.id === id);
    if (i !== -1) {
      bookList.splice(i, 1);
      return of(bookList);
    } else {
      throwError("Could not find this book to delete");
    }
  }

  filterBooks(genreID: number) {
    if (Number.isNaN(genreID) || genreID === -1) {
      return this.allBooks.value;
    } else {
      return this.allBooks.value.filter(x =>
        x.genres.some(g => g.id === genreID)
      );
  }}

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

  init() {
    this.service
      .apiBookGet()
      .pipe<Book[]>(
        map(books => {
          return books.map(book => {
            return this.mapBook(book);
          });
        })
      )
      .subscribe(books => this.allBooks.next(books));
  }
}
