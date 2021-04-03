import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../model/product';

@Pipe({
  name: 'lastproductnovisible'
})
export class LastproductnovisiblePipe implements PipeTransform {

  transform(value: Product[]): Product[] {
    if (!Array.isArray(value)) { return value }
    return value.slice(0, -1);
  }
}
