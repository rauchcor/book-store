import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartDisplayComponent } from './shopping-cart-display.component';

describe('ShoppingCartDisplayComponent', () => {
  let component: ShoppingCartDisplayComponent;
  let fixture: ComponentFixture<ShoppingCartDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingCartDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCartDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
