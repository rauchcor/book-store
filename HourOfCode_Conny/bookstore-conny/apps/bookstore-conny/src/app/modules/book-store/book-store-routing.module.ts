import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BookListComponent } from "./components/book-list/book-list.component";
import { BookEditComponent } from "./components/book-edit/book-edit.component";
import { ContributeGuard } from "../../core/guards/contribute.guard";


const routes: Routes = [
  { path: "books", component: BookListComponent },
  { path: "books/:id", component: BookEditComponent, canActivate: [ContributeGuard]},
  { path: "", pathMatch: "full", redirectTo: "books" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class BookStoreRoutingModule {}
