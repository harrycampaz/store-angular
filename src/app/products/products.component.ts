import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[];
  constructor() {

    this.products = [{
      id: 1,
      image: 'assets/images/camiseta.png',
      title: 'Camiseta',
      price: 800000,
      description: 'La descrion'
    },
    {
      id: 2,
      image: 'assets/images/hoodie.png',
      title: 'Camiseta',
      price: 800000,
      description: 'La descrion'
    },
    {
      id: 3,
      image: 'assets/images/mug.png',
      title: 'Camiseta',
      price: 800000,
      description: 'La descrion'
    },
    {
      id: 4,
      image: 'assets/images/pin.png',
      title: 'Camiseta',
      price: 800000,
      description: 'La descrion'
    }];

   }

  ngOnInit() {

    console.log(this.products, 'Aquiß');
  }


  clickProduct(id: number) {
    console.log('Clic product');
    console.log(id);

  }

}
