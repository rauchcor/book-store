import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Book } from "src/app/modules/book-store/models/books";
import { map, scan } from "rxjs/operators";
import { SharedModule } from "../../shared.module";

export const InitalCurrentBooksInChart: Book[] = [];
@Injectable({
  providedIn: SharedModule
})
export class ShoppingcartStore {

  private currentBooksInCartSubject: BehaviorSubject<Book[]>   = new BehaviorSubject<Book[]>(InitalCurrentBooksInChart);
  currentBooksInCart$: Observable<Book[]> = this.currentBooksInCartSubject.asObservable();
  constructor() {
  }

  add(book: Book) {
    const newBookList = [...this.currentBooksInCartSubject.value, book];
    this.currentBooksInCartSubject.next(newBookList);
  }

  remove(index: number) {
     const newBookList =  [...this.currentBooksInCartSubject.value.slice(0, index),
              ...this.currentBooksInCartSubject.value.slice(index + 1, this.currentBooksInCartSubject.value.length)];
    this.currentBooksInCartSubject.next(newBookList);
  }

  getNumberOfBooksInShoppingCart(book: Book): Observable<Book[]> {
    return this.currentBooksInCart$
              .pipe(map(value => value.filter(x => x.id === book.id)));
  }

  /*setUpCurrentBuksInCartSubject() {
    this.currentBooksInCartSubject.pipe(
      scan((acc: Book[], newVal: Book[]) => {
          return {...acc, ...newVal};
      }, InitalCurrentBooksInChart));
  }*/
}
