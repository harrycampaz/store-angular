import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  total = 0;

  constructor(private cartService: CartService) {
    this.cartService.cart$.subscribe(products => {
      this.total = products.length;
    });
  }

  ngOnInit() {
  }

}
