import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../../../models/books';

@Component({
  selector: 'app-shoping-cart-button',
  templateUrl: './shoping-cart-button.component.html',
  styleUrls: ['./shoping-cart-button.component.sass']
})
export class ShopingCartButtonComponent implements OnInit {

  @Input()bookCount: Book[];
  //@Input()bookCount: Observable<Book[]>;
  @Input()book: Book;
  @Output() addToShoppingCart: EventEmitter<Book> = new EventEmitter<Book>();
  constructor() { }

  ngOnInit() {
  }

  addToCart() {
    this.addToShoppingCart.emit(this.book);
  }

}
