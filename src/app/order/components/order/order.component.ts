import { Observable } from 'rxjs';
import { Product } from './../../../core/model/product';

import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  products$: Observable<Product[]>;

  constructor(private cartservice: CartService) {
    this.products$ = this.cartservice.cart$;
   }

  ngOnInit() {
  }

}
