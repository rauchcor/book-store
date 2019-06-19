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
import {
  APP_FEATURE_KEY,
  initialState as appInitialState,
  appReducer
} from "./+state/app.reducer";
import { AppEffects } from "./+state/app.effects";
import { AppFacade } from "./+state/app.facade";
import { NxModule } from "@nrwl/angular";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "../environments/environment";
import { storeFreeze } from "ngrx-store-freeze";

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
    StoreModule.forRoot(
      { app: appReducer },
      {
        initialState: { app: appInitialState },
        metaReducers: !environment.production ? [storeFreeze] : []
      }
    ),
    EffectsModule.forRoot([AppEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeConfig,
      deps: [ConfigService],
      multi: true
    },
    AppFacade
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

export function initializeConfig(configService: ConfigService) {
  return () => configService.init();
}
