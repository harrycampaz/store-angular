import { Product } from './model/product';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'store-dezzapps';

  products: Product[] = [{
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


  clickProduct(id: number) {
    console.log('Clic product');
    console.log(id);

  }

}
