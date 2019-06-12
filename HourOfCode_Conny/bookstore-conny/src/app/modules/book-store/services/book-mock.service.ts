import { Injectable } from "@angular/core";
import { BookStoreModule } from "../book-store.module";
import { Book, Genre } from "../models/books";
import {
  Observable,
  of,
  throwError,
  Subject,
  from,
  interval,
  fromEvent,
  BehaviorSubject
} from "rxjs";
import { map, tap, switchMap, catchError, take, share } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { Service, BookDto } from "src/app/core/services/api/SwaggerWebAPI";

@Injectable({
  providedIn: "root"
})
export class BookMockService {
  genres: { [id: number]: Genre } = {
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
  genreList: Genre[] = [
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
  booklist: Book[] = [
    {
      id: 1,
      name: "A Tale of Two Cities",
      author: "Charles Dickens",
      year: 1859,
      genres: [this.genres[4], this.genres[0]],
      isLiked: null
    },
    {
      id: 2,
      name: "The Lord of the Rings",
      author: "J. R. R. Tolkien",
      year: 1954,
      genres: [this.genres[8], this.genres[5]],
      isLiked: null
    },
    {
      id: 3,
      name: "The Little Prince",
      author: "Antoine de Saint-Exupéry",
      year: 1943,
      genres: [this.genres[1], this.genres[7], this.genres[5]],
      isLiked: null
    },
    {
      id: 4,
      name: "Harry Potter and the Philosopher's Stone",
      author: "J. K. Rowling",
      year: 1997,
      genres: [this.genres[7], this.genres[1], this.genres[2]],
      isLiked: null
    },
    {
      id: 5,
      name: "The Hobbit",
      author: "J. R. R. Tolkien",
      year: 1937,
      genres: [this.genres[1], this.genres[8]],
      isLiked: null
    },
    {
      id: 6,
      name: "Alice's Adventures in Wonderland",
      author: "Lewis Carroll",
      year: 1865,
      genres: [this.genres[3], this.genres[8], this.genres[7]],
      isLiked: null
    }
  ];
  private bookListSubject: BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>(this.booklist);
  $bookList: Observable<Book[]> = this.bookListSubject.asObservable();

  private genresSubject: BehaviorSubject<Genre[]> = new BehaviorSubject<Genre[]>(this.genreList);
  $genreList: Observable<Genre[]> = this.genresSubject.asObservable();

  constructor(public httpClient: HttpClient, public service: Service) {
  }

  filterByGenres(genreID: number) {
    if (Number.isNaN(genreID) || genreID === -1) {
      this.bookListSubject.next(this.booklist);
    } else {
      const filteredBooks = this.booklist.filter(x =>
        x.genres.some(g => g.id === genreID)
      );
      this.bookListSubject.next(filteredBooks);
    }
  }

  addBook(book: Book): void {
    book.id = this.bookListSubject.value.length + 1;
    const bookList = [...this.bookListSubject.value, book];
    this.bookListSubject.next(bookList);
  }

  editBook(book: Book): void {
    const bookList = [...this.bookListSubject.value];
    const i = bookList.findIndex(x => x.id === book.id);
    if (i !== -1) {
      bookList[i] = book;
    }
    this.bookListSubject.next(bookList);
  }

  findById(id: number): Observable<Book> {
    const i = this.bookListSubject.value.findIndex(x => x.id === id);
    if (i !== -1) {
      return of(this.bookListSubject.value[i]);
    } else {
      throwError("Could not find this book");
    }
  }

  deleteById(id: number): Observable<Book[]> {
    const bookList = [...this.bookListSubject.value];
    const i = bookList.findIndex(x => x.id === id);
    if (i !== -1) {
      bookList.splice(i, 1);
      return of(bookList);
    } else {
      throwError("Could not find this book to delete");
    }
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
      .subscribe(books => this.bookListSubject.next(books));
  }
}
