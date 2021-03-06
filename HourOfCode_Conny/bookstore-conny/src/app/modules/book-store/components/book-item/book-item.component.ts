import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { Book } from '../../models/books';
import { ShoppingcartService } from 'src/app/shared/services/shoppingcart.service';
import { Observable } from 'rxjs';
import { LikeComponent } from './like/like.component';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { EventBusService, Events } from 'src/app/core/services/event-bus.service';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.sass']
})
export class BookItemComponent implements OnInit {

  @Input() book: Book;
  @Output() shoppingCartAdd: EventEmitter<Book> = new EventEmitter<Book>();
  @Output() bookChanged: EventEmitter<Book> = new EventEmitter<Book>();
  //bookCount: Observable<Book[]>;
  bookCount: Book[] = [];


  constructor(private shoppingChartService: ShoppingcartService, private router: Router, private eventBusService : EventBusService) { }

  ngOnInit() {
    //this.bookCount = this.shoppingChartService.getNumberOfBooksInShoppingCart(this.book);

    this.eventBusService.on(Events.updateShoppingCartForBookItem, () => {
      this.shoppingChartService
      .getNumberOfBooksInShoppingCart(this.book)
      .then((bookCount) => {
        this.bookCount = bookCount;
      });
    });

  }

  bookIsLiked(event: Book) {
    this.bookChanged.emit(event);
  }
  addToShoppingCart(event: Book) {
    this.shoppingCartAdd.emit(event);
  }

  onEdit() {
    this.router.navigate(["book-store/books", this.book.id]);
  }
}
