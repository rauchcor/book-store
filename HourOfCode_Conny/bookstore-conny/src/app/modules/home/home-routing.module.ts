import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home.component";
import { ContributeGuard } from "src/app/core/guards/contribute.guard";
import { OverviewComponent } from "./components/overview/overview.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    children: [
      {
        path: "",
        component: OverviewComponent
      },
      {
        path: "book-store",
        loadChildren: "./../book-store/book-store.module#BookStoreModule",
        pathMatch: "prefix"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
