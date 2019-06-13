import { Component, OnInit, Input } from '@angular/core';
import { ShoppingcartService } from 'src/app/shared/services/shoppingcart.service';
import { Book } from 'src/app/modules/book-store/models/books';

@Component({
  selector: 'app-shopping-cart-list-item',
  templateUrl: './shopping-cart-list-item.component.html',
  styleUrls: ['./shopping-cart-list-item.component.sass']
})
export class ShoppingCartListItemComponent implements OnInit {

  @Input() book: Book;
  @Input() index: number;
  constructor(private shoppingCartService: ShoppingcartService) { }

  ngOnInit() {
  }

  onDelete() {
    this.shoppingCartService.remove( this.index);
  }

}
