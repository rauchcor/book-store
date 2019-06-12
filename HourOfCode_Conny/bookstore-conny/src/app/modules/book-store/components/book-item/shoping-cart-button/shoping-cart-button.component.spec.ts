import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopingCartButtonComponent } from './shoping-cart-button.component';

describe('ShopingCartButtonComponent', () => {
  let component: ShopingCartButtonComponent;
  let fixture: ComponentFixture<ShopingCartButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopingCartButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopingCartButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
