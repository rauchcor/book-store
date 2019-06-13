import { Component, OnInit, EventEmitter } from "@angular/core";
import { Book } from "../../models/books";
import { Router, NavigationExtras, ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { tap, map } from "rxjs/operators";
import { ShoppingcartStore } from "src/app/shared/data-access/stores/shoppingcart.service";
import { Genre } from "../../models/genre";
import { BookStore } from "../../data-access/book-store.service";

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
    private bookStore: BookStore,
    private shoppingCartService: ShoppingcartStore,
    public router: Router
  ) {}

  ngOnInit() {
    this.$books = this.bookStore.filteredBooks$;
    this.$genres = this.bookStore.allgenres$;

    this.route.queryParams
      .pipe(
        map(params => params["filter"]),
        tap(id => (id != null) ? this.genreId = id.toString() : this.genreId = "-1")
      )
      .subscribe( _ => this.updateBookList());
  }

  updateBookList() {
      this.bookStore.filterByGenres(parseInt(this.genreId, 0));
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

  addToShoppingCart(book: Book) {
    this.shoppingCartService.add(book);
  }

  bookChanged(event: Book) {
    this.bookStore.editBook(event);
  }
}
