import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../../../models/books';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.sass']
})
export class LikeComponent implements OnInit {

  @Input() book: Book;
  @Output() bookChanged: EventEmitter<Book> = new EventEmitter<Book>();
  constructor() { }

  ngOnInit() {
  }

  toogle() {
    this.book.isLiked = !this.book.isLiked;
    this.bookChanged.emit(this.book);
  }

}
