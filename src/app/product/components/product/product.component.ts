import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  DoCheck,
  OnDestroy } from '@angular/core';
import { Product } from '../../../core/model/product';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit{

  @Input() product: Product;
  @Output() productClick: EventEmitter<any>;

  constructor(private cartService: CartService) {

    this.productClick = new EventEmitter();

    this.product = {
      id: 1,
      title: "",
      image: "",
      description: "",
      price: 0
    };
  }

  ngOnInit() {
    console.log('Products');

  }

  // ngOnChanges(changes: SimpleChanges): void {

  //   console.log('onChange');
  //   console.log(changes);
  // }

  // ngDoCheck(): void {

  //   console.log('do Chaedj');

  // }

  // ngOnDestroy(): void {
  //   console.log('OnDestroy');

  // }

  addToCart() {
    console.log('Agregar al carrito');
    this.cartService.addCart(this.product);
    // this.productClick.emit(this.product.id);
  }

}
