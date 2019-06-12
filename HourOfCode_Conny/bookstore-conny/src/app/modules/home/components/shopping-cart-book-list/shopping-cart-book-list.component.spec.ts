import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartBookListComponent } from './shopping-cart-book-list.component';

describe('ShoppingCartBookListComponent', () => {
  let component: ShoppingCartBookListComponent;
  let fixture: ComponentFixture<ShoppingCartBookListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingCartBookListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCartBookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
