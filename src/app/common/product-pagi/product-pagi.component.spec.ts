import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPagiComponent } from './product-pagi.component';

describe('ProductPagiComponent', () => {
  let component: ProductPagiComponent;
  let fixture: ComponentFixture<ProductPagiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductPagiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPagiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
