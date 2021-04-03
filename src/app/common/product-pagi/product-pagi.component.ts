
import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-pagi',
  templateUrl: './product-pagi.component.html',
  styleUrls: ['./product-pagi.component.scss']
})
export class ProductPagiComponent implements OnInit {

  index: number = 1;
  buttons: number[] = [];
  @Input() products: Product[];
  @Input() productList: Product[] = [];


  constructor(
    public productService: ProductService,
  ) { }

  ngOnInit(): void {
  }


  buttonsNumberArray(array: Product[]): number[] {
    for (let i = 1; i <= Math.ceil(array.length / 5); i++) {
      this.buttons.push(i);
    }
    return this.buttons;
  }
  paginationNumber(array: Product[], pagi: number): Product[] {
    this.index = pagi;
    this.buttons = [];
    return array.slice((this.index - 1) * 5, this.index * 5);
  }
  paginationNext(array: Product[]): Product[] {
    this.index++;
    if (this.index > Math.ceil(this.products.length / 5)) { this.index = 1 }
    return array.slice((this.index - 1) * 5, this.index * 5)
  }
  paginationBack(array: Product[]): Product[] {
    this.index--;
    if (this.index < 1) { this.index = Math.ceil(this.products.length / 5) }
    return array.slice((this.index - 1) * 5, this.index * 5)
  }

}