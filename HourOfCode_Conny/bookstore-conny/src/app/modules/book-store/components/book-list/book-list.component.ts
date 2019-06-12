import { Component, OnInit, EventEmitter } from "@angular/core";
import { Book, Genre } from "../../models/books";
import { BookMockService } from "../../services/book-mock.service";
import { Router, NavigationExtras, ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { tap, map } from "rxjs/operators";
import {
  EventBusService,
  Events,
  EmitEvent
} from "src/app/core/services/event-bus.service";
import { ShoppingcartService } from "src/app/shared/services/shoppingcart.service";

@Component({
  selector: "app-book-list",
  templateUrl: "./book-list.component.html",
  styleUrls: ["./book-list.component.sass"]
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  newBook: Book = {
    id: 0,
    name: "",
    author: "",
    year: null,
    genres: [],
    isLiked: null
  };
  onAddClicked = false;
  $books: Observable<Book[]>;
  $genres: Observable<Genre[]>;
  genreId = "-1";

  constructor(
    private route: ActivatedRoute,
    private bookMockService: BookMockService,
    private eventBusService: EventBusService,
    public router: Router
  ) {}

  ngOnInit() {
    this.$books = this.bookMockService.$bookList;
    this.$genres = this.bookMockService.$genreList;

    this.route.queryParams
      .pipe(
        map(params => params["filter"]),
        tap(id => (id != null) ? this.genreId = id.toString() : this.genreId = "-1")
      )
      .subscribe( _ => this.updateBookList());
  }

  updateBookList() {
      this.bookMockService.filterByGenres(parseInt(this.genreId, 0));
  }

  selectGenre() {
    this.router.navigate(["."], {
      queryParams: { filter: this.genreId },
      relativeTo: this.route
    });
  }

  onAdd() {
    this.onAddClicked = true;
    this.router.navigate(["book-store/books", -1]);
  }

  addToShoppingCart(event: Book) {
    this.eventBusService.emit(new EmitEvent(Events.addToChart, event));
  }

  bookChanged(event: Book) {
    this.bookMockService.editBook(event);
  }
}
