import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  total$: Observable<number>;

  constructor(private cartService: CartService) {
   this.total$ = this.cartService.cart$
   .pipe(
     map (products => products.length));
  }

  ngOnInit() {
  }

}
