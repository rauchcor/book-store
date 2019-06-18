import { Component, OnInit } from "@angular/core";

import { Observable } from "rxjs";
import { ShoppingcartStore } from "apps/bookstore-conny/src/app/shared/data-access/stores/shoppingcart.service";
import { Book } from "../../../book-store/models/books";

@Component({
  selector: "app-shopping-cart-display",
  templateUrl: "./shopping-cart-display.component.html",
  styleUrls: ["./shopping-cart-display.component.sass"]
})
export class ShoppingCartDisplayComponent implements OnInit {
  constructor(
    private shoppingCartService: ShoppingcartStore
  ) {}

  currentBooksInCart$: Observable<Book[]>;
  popupVisible = false;
  ngOnInit() {
    this.currentBooksInCart$ = this.shoppingCartService.currentBooksInCart$;
  }

  showShoppinCartPopup() {
    this.popupVisible = true;
  }
}
