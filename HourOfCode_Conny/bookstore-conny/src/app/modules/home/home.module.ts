import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { ShoppingCartDisplayComponent } from './components/shopping-cart-display/shopping-cart-display.component';
import { DxPopupModule, DxTemplateModule, DxButtonModule, DxDataGridModule } from 'devextreme-angular';
import { BrowserModule } from '@angular/platform-browser';
import { ShoppingCartBookListComponent } from './components/shopping-cart-book-list/shopping-cart-book-list.component';
import { GenrePipe } from '../../core/pipes/genre.pipe';
import { CoreModule } from 'src/app/core/core.module';
import { OverviewComponent } from './components/overview/overview.component';
import { SharedModule } from 'src/app/shared/shared.module';
@NgModule({
  declarations: [HomeComponent, ShoppingCartDisplayComponent, ShoppingCartBookListComponent, OverviewComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    DxTemplateModule,
    DxPopupModule,
    DxButtonModule,
    DxDataGridModule,
    CoreModule,
    SharedModule
  ],
  exports : [HomeComponent]
})
export class HomeModule { }
