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
      this.fechProduct(id);

      // this.create();
      // this.update();

      this.deleteProduct();
    });

  }

  fechProduct(id: number) {
    this.productService.getProduct(id)
    .subscribe(product => {
      this.product = product;
    });
  }

  create() {
    const newProd: Product = {
      id: 300,
      title: 'new Product',
      image: 'assets/images/camiseta.png',
      price: 20000,
      description: 'Nuevo producto'
    };

    this.productService.createProduct(newProd).subscribe(product => {
      console.log(product);
    });
  }

  update() {
    const newProd: Partial<Product> = {
      id: 300,
      title: 'The Product',
      image: 'assets/images/camiseta.png',
      price: 40000,
    };

    this.productService.updateProduct(300, newProd).subscribe(product => {
      console.log(product);
    });
  }

  deleteProduct() {
    this.productService.deleteProduct(300).subscribe(response => console.log(response)
    );
  }

}
