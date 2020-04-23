import { Product } from '../../../model/product';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

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

   getAllProduct() {
     return this.products;
   }

   getProduct(id: number) {
    return this.products.find(item => id == item.id);
   }

}
