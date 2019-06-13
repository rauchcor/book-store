import { Component, OnInit } from "@angular/core";
import {
  EventBusService,
  Events,
  EmitEvent
} from "src/app/core/services/event-bus.service";
import { Book } from "src/app/modules/book-store/models/books";
import { ShoppingcartService } from "src/app/shared/services/shoppingcart.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-shopping-cart-display",
  templateUrl: "./shopping-cart-display.component.html",
  styleUrls: ["./shopping-cart-display.component.sass"]
})
export class ShoppingCartDisplayComponent implements OnInit {
  constructor(
    private eventBusService: EventBusService,
    private shoppingCartService: ShoppingcartService
  ) {}

  booklist$: Observable<Book[]>;
  popupVisible = false;
  ngOnInit() {
    this.booklist$ = this.shoppingCartService.currentBooksInCart$;
  }

  showShoppinCartPopup() {
    this.popupVisible = true;
  }
}
