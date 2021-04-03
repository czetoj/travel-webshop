import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';
import { Observable } from 'rxjs';
import { ConfigTableService, ITableCol } from 'src/app/service/config-table.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  productList$: Observable<Product[]> = this.productService.getAll();
  cols: ITableCol[] = this.config.tableCols;

  constructor(
    private productService: ProductService,
    private config: ConfigTableService,
  ) { }

  ngOnInit(): void {
  }

  onUpdate(product: Product): void {
    this.productService.update(product).subscribe();
  }

  onDelete(product: Product): void {
    this.productService.remove(product).subscribe()
  }
  onCreate(product: Product): void {
    this.productService.update(product).subscribe();

    this.productService.create({
      "id": product.id + 1,
      "catId": 0,
      "name": "",
      "description": "",
      "image": "",
      "price": 0,
      "salesPrice": 0,
      "stock": 0,
      "featured": false,
      "featured2": "",
      "active": true
    }).subscribe()
  }

}
