import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsFormSharedComponent } from './products-form-shared.component';

describe('ProductsFormSharedComponent', () => {
  let component: ProductsFormSharedComponent;
  let fixture: ComponentFixture<ProductsFormSharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsFormSharedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsFormSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
