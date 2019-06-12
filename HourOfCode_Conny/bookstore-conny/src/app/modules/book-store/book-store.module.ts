import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './components/book-list/book-list.component';
import { AppModule } from 'src/app/app.module';
import { FormsModule } from '@angular/forms';
import { BookStoreRoutingModule } from './book-store-routing.module';
import { BookEditComponent } from './components/book-edit/book-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { GenrePipe } from '../../core/pipes/genre.pipe';
import { BookItemComponent } from './components/book-item/book-item.component';
import { CoreModule } from 'src/app/core/core.module';
import { LikeComponent } from './components/book-item/like/like.component';
import { ShopingCartButtonComponent } from './components/book-item/shoping-cart-button/shoping-cart-button.component';
@NgModule({
  declarations: [BookListComponent, BookEditComponent, BookItemComponent, LikeComponent, ShopingCartButtonComponent],
  imports: [
    CommonModule,
    FormsModule,
    BookStoreRoutingModule,
    CoreModule
  ],
  exports: [BookListComponent]
})
export class BookStoreModule { }
