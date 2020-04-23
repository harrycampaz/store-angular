import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductsService } from '../core/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[];
  constructor(private productServise: ProductsService ) {

    this.products = this.productServise.getAllProduct();
   }

  ngOnInit() {

  }


  clickProduct(id: number) {
    console.log('Clic product');
    console.log(id);

  }

}
