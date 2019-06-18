import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Book } from '../../../book-store/models/books';
import { ShoppingcartStore } from 'apps/bookstore-conny/src/app/shared/data-access/stores/shoppingcart.service';


@Component({
  selector: 'app-shopping-cart-book-list',
  templateUrl: './shopping-cart-book-list.component.html',
  styleUrls: ['./shopping-cart-book-list.component.sass']
})
export class ShoppingCartBookListComponent implements OnInit {
  shoppingBookList$: Observable<Book[]>;
  constructor(private shoppingCartService: ShoppingcartStore) { }

  ngOnInit() {
   this.shoppingBookList$ = this.shoppingCartService.currentBooksInCart$;
  }

}
