import { Component, OnInit } from '@angular/core';
import { EventBusService, Events, EmitEvent } from 'src/app/core/services/event-bus.service';
import { Book } from 'src/app/modules/book-store/models/books';
import { ShoppingcartService } from 'src/app/shared/services/shoppingcart.service';

@Component({
  selector: 'app-shopping-cart-display',
  templateUrl: './shopping-cart-display.component.html',
  styleUrls: ['./shopping-cart-display.component.sass']
})
export class ShoppingCartDisplayComponent implements OnInit {

  constructor(private eventBusService: EventBusService, private shoppingCartService: ShoppingcartService) { }

  booklist: Book[] = [];
  popupVisible = false;
  ngOnInit() {
    this.booklist = this.shoppingCartService.currentBookList;
    this.eventBusService.on(Events.addToChart, (book) => {
      this.booklist.push(book);
      this.shoppingCartService.updateBookList(this.booklist)
        .then(() => {
          this.eventBusService.emit(new EmitEvent(Events.updateShoppingCartForBookItem, book));
        })
        .catch((error) => {
          console.log(error);
        });

    });
  }

  showShoppinCartPopup() {
    this.popupVisible = true;
  }

}
