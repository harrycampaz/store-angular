import { Product } from '../../../model/product';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[];
  constructor(private productServise: ProductsService ) {

    // this.products = this.productServise.getAllProduct();


   }

  ngOnInit() {
    this.fechProduct();
  }


  clickProduct(id: number) {
    console.log('Clic product');
    console.log(id);

  }

  fechProduct() {
    this.productServise.getAllProduct()
    .subscribe(products => {
      this.products = products;
      console.log(products);
    });
  }

}
