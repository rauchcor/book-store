import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { ShoppingCartDisplayComponent } from './components/shopping-cart-display/shopping-cart-display.component';
import { DxPopupModule, DxTemplateModule, DxButtonModule, DxDataGridModule } from 'devextreme-angular';
import { BrowserModule } from '@angular/platform-browser';
import { ShoppingCartBookListComponent } from './components/shopping-cart-book-list/shopping-cart-book-list.component';
import { OverviewComponent } from './components/overview/overview.component';
import { ShoppingCartListItemComponent } from './components/shopping-cart-list-item/shopping-cart-list-item.component';
import { CoreModule } from '../../core/core.module';
import { SharedModule } from '../../shared/shared.module';
@NgModule({
  declarations: [HomeComponent, ShoppingCartDisplayComponent, ShoppingCartBookListComponent, OverviewComponent, ShoppingCartListItemComponent],
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
