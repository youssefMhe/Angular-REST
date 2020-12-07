import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreFixeComponent } from './store-fixe.component';

describe('StoreFixeComponent', () => {
  let component: StoreFixeComponent;
  let fixture: ComponentFixture<StoreFixeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreFixeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreFixeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
