import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './modules/home/home.module';
import { HttpClientModule } from '@angular/common/http';
import { API_BASE_URL } from './core/services/api/SwaggerWebAPI';
import { CoreModule } from './core/core.module';
import { ConfigService } from './core/services/config.service';
import { DxTemplateModule, DxPopupModule, DxButtonModule } from 'devextreme-angular';

@NgModule({
  declarations: [
    AppComponent
  ],
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
    DxButtonModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeConfig,
      deps: [ConfigService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function initializeConfig(configService: ConfigService) {
  return () => configService.init();
}
