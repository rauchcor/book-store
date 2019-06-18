import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { map, scan } from "rxjs/operators";
import { SharedModule } from "../../shared.module";
import { Book } from "../../../modules/book-store/models/books";

export const InitalCurrentBooksInChart: Book[] = [];
@Injectable({
  providedIn: SharedModule
})
export class ShoppingcartStore {

  private currentBooksInCartSubject: BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>([]);
  currentBooksInCart$: Observable<Book[]> = this.currentBooksInCartSubject.asObservable();
  constructor() {
  }

  add(book: Book) {
    const newBookList = [...this.currentBooksInCartSubject.getValue(), book];
    this.currentBooksInCartSubject.next(newBookList);
  }

  remove(index: number) {
    const currentValue = [...this.currentBooksInCartSubject.getValue()];
    const newBookList =  [...currentValue.slice(0, index), ...currentValue.slice(index + 1, currentValue.length)];
    this.currentBooksInCartSubject.next(newBookList);
  }

  getNumberOfBooksInShoppingCart(bookId: number): Observable<Book[]> {
    return this.currentBooksInCartSubject
               .pipe(map(value => value.filter(x => x.id === bookId)));
  }

  /*setUpCurrentBuksInCartSubject() {
    this.currentBooksInCartSubject.pipe(
      scan((acc: Book[], newVal: Book[]) => {
          return {...acc, ...newVal};
      }, InitalCurrentBooksInChart));
  }*/
}
