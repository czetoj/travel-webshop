import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../model/product';

@Pipe({
  name: 'sales'
})
export class SalesPipe implements PipeTransform {

  transform(productList: Product[]): Product[] {
    if (!Array.isArray(productList)) {
      return productList
    }
    return productList.filter(product => product.salesPrice < product.price && product.salesPrice > 0)
  }

}
