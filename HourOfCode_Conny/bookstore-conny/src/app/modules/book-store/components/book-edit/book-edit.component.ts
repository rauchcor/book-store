import { Component, OnInit } from "@angular/core";
import { Route } from "@angular/compiler/src/core";
import { ActivatedRoute, Router } from "@angular/router";
import { map, tap, switchMap, catchError } from "rxjs/operators";
import { BookMockService } from "../../services/book-mock.service";
import { Book } from "../../models/books";
import { of } from "rxjs";

@Component({
  selector: "app-book-edit",
  templateUrl: "./book-edit.component.html",
  styleUrls: ["./book-edit.component.sass"]
})
export class BookEditComponent implements OnInit {
  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public bookMockService: BookMockService
  ) {}
  id: number;
  newBook: Book = {
    id: 0,
    name: '',
    author: '',
    year: null,
    genres: [],
    isLiked: null
  };
  ngOnInit() {
    this.route.params
      .pipe(
        map(params => params["id"]),
        tap(id => (this.id = +id)),
        switchMap(id => {
          if (id === "-1") {
            return of(this.newBook);
          } else {
            return this.bookMockService.findById(Math.floor(id));
          }
        }),
        catchError(val => {
          console.log(`I caught: ${val}`);
          return of(this.newBook);
      }))
      .subscribe(book => {
        this.newBook = book;
      });
  }
  onAbort() {
    this.router.navigate(["book-store/books"]);
  }

  onAddSubmit() {
    if (this.id === -1) {
    this.bookMockService.addBook(this.newBook);
  }
  this.router.navigate(["book-store/books"]);
  }
}
