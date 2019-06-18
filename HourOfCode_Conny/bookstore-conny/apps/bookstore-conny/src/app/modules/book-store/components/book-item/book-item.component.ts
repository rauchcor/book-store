import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { Book } from '../../models/books';
import { Observable } from 'rxjs';
import { LikeComponent } from './like/like.component';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { ShoppingcartStore } from 'apps/bookstore-conny/src/app/shared/data-access/stores/shoppingcart.service';


@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.sass']
})
export class BookItemComponent implements OnInit {

  @Input() book: Book;
  @Output() shoppingCartAdd: EventEmitter<Book> = new EventEmitter<Book>();
  @Output() bookChanged: EventEmitter<Book> = new EventEmitter<Book>();
  bookCount$: Observable<Book[]>;

  constructor(private shoppingChartStore: ShoppingcartStore, private router: Router) { }

  ngOnInit() {
    this.bookCount$ = this.shoppingChartStore
                          .getNumberOfBooksInShoppingCart(this.book.id);
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
