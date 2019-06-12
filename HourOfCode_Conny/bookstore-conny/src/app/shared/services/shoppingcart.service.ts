import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Book } from "src/app/modules/book-store/models/books";
import { map } from "rxjs/operators";
import { SharedModule } from "../shared.module";

@Injectable({
  providedIn: SharedModule
})
export class ShoppingcartService {
  currentBookList: Book[] = [];

  updateBookList(bookList: Book[]): Promise<Book[] | Error> {
    return new Promise((resolve, reject) => {
      if (bookList === null) {
        reject(new Error("The collection passed was empty."));
      }
      this.currentBookList = bookList;
      resolve(this.currentBookList);
    });
  }

  getNumberOfBooksInShoppingCart(book: Book): Promise<Book[]> {
    return new Promise((resolve, reject) => {
      resolve(this.currentBookList.filter(x => x.id === book.id));
    });
  }

  /*private currentBooksInCartSubject: BehaviorSubject<Book[]>   = new BehaviorSubject<Book[]>([]);
  currentBooksInCart$: Observable<Book[]> = this.currentBooksInCartSubject.asObservable();
  constructor() {}

  updateBookList(bookList: Book[]) {
    this.currentBooksInCartSubject.next(bookList);
  }

  getNumberOfBooksInShoppingCart(book: Book): Observable<Book[]> {
    return this.currentBooksInCart$
              .pipe(map(value => value.filter(x => x.id === book.id)));
  }*/
}
