import { Component, OnInit } from '@angular/core';
import { ShoppingcartStore } from 'src/app/shared/data-access/stores/shoppingcart.service';
import { Observable } from 'rxjs';
import { Book } from 'src/app/modules/book-store/models/books';
import { Events, EventBusService } from 'src/app/core/services/event-bus.service';

@Component({
  selector: 'app-shopping-cart-book-list',
  templateUrl: './shopping-cart-book-list.component.html',
  styleUrls: ['./shopping-cart-book-list.component.sass']
})
export class ShoppingCartBookListComponent implements OnInit {
  shoppingBookList$: Observable<Book[]>;
  constructor(private shoppingCartService: ShoppingcartStore, private eventBusService: EventBusService) { }

  ngOnInit() {
   this.shoppingBookList$ = this.shoppingCartService.currentBooksInCart$;
  }

}
