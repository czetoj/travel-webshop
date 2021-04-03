import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  search: string = '';
  sortKey: string = '';
  filterKey: string = '';
  @Input() products: Product[] = [];

  constructor(

  ) { }

  ngOnInit(): void {
  }

  onChangeSearch(event: Event, filterKey: string): void {
    this.search = (event.target as HTMLInputElement).value;
    this.filterKey = filterKey;
  }
  onChangeSort(data: string): void {
    this.sortKey = data;
  }
  onChangeSortFeatured(): void {
    this.products = this.products.filter(product => product.featured);
  }
  onChangeSortSales(): void {
    this.products = this.products.filter(product => product.salesPrice > 0);
  }

}
