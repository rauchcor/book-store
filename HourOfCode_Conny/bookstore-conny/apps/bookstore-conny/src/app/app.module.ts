import { BrowserModule } from "@angular/platform-browser";
import { NgModule, APP_INITIALIZER } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeModule } from "./modules/home/home.module";
import { HttpClientModule } from "@angular/common/http";
import { API_BASE_URL } from "./core/services/api/SwaggerWebAPI";
import { CoreModule } from "./core/core.module";
import { ConfigService } from "./core/services/config.service";
import {
  DxTemplateModule,
  DxPopupModule,
  DxButtonModule
} from "devextreme-angular";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { NxModule } from "@nrwl/angular";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "../environments/environment";
import { storeFreeze } from "ngrx-store-freeze";
import {
  BOOKS_FEATURE_KEY,
  initialState as booksInitialState,
  booksReducer
} from "./+state/books.reducer";
import { BooksEffects } from "./+state/books.effects";
import { BooksFacade } from "./+state/books.facade";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HomeModule,
    CoreModule,
    DxTemplateModule,
    DxPopupModule,
    DxButtonModule,
    NxModule.forRoot(),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreModule.forRoot(
      { books: booksReducer },
      {
        initialState: { books: booksInitialState },
        metaReducers: !environment.production ? [storeFreeze] : []
      }
    ),
    EffectsModule.forRoot([BooksEffects])
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeConfig,
      deps: [ConfigService],
      multi: true
    },
    BooksFacade
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

export function initializeConfig(configService: ConfigService) {
  return () => configService.init();
}
