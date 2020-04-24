import { Product } from '../../../model/product';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from 'src/app/core/services/products/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product: Product;
  constructor( private route: ActivatedRoute, private productService: ProductsService) {
  }
  ngOnInit() {

    this.route.params.subscribe((params: Params) => {
      const id = params.id;

      this.product = this.productService.getProduct(id);

    });

  }

}
