import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent implements OnInit {


  product$: Observable<Product> = this.ar.params.pipe(
    switchMap(params => {
      return this.productService.getId(params.id);
    })
  )

  constructor(
    private productService: ProductService,
    private ar: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

}