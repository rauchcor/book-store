import { Component, OnInit } from '@angular/core';
import { ShoppingcartService } from 'src/app/shared/services/shoppingcart.service';
import { Observable } from 'rxjs';
import { Book } from 'src/app/modules/book-store/models/books';
import { Events, EventBusService } from 'src/app/core/services/event-bus.service';

@Component({
  selector: 'app-shopping-cart-book-list',
  templateUrl: './shopping-cart-book-list.component.html',
  styleUrls: ['./shopping-cart-book-list.component.sass']
})
export class ShoppingCartBookListComponent implements OnInit {
  //shoppingBookList: Observable<Book[]>;
  shoppingBookList: Book[];
  constructor(private shoppingCartService: ShoppingcartService, private eventBusService: EventBusService) { }

  ngOnInit() {
   // this.shoppingBookList = this.shoppingCartService.currentBooksInCart$;

   this.eventBusService.on(Events.updateShoppingCartForBookItem, () => {
    this.shoppingBookList = this.shoppingCartService.currentBookList;
  });
  }

}
