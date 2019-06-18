import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShallnotpassComponent } from './shallnotpass.component';

describe('ShallnotpassComponent', () => {
  let component: ShallnotpassComponent;
  let fixture: ComponentFixture<ShallnotpassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShallnotpassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShallnotpassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
