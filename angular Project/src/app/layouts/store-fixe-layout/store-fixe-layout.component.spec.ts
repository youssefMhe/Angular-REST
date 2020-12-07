import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreFixeLayoutComponent } from './store-fixe-layout.component';

describe('StoreFixeLayoutComponent', () => {
  let component: StoreFixeLayoutComponent;
  let fixture: ComponentFixture<StoreFixeLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreFixeLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreFixeLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
