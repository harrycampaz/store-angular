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
import { Product } from '../model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit, DoCheck, OnDestroy {

  @Input() product: Product;
  @Output() productClick: EventEmitter<any>;

  constructor() {

    this.productClick = new EventEmitter();

    this.product = {
      id: 1,
      title: "",
      image: "",
      description: "",
      price: 0
    }
  }

  ngOnInit() {
    console.log('Products');

  }

  // ngOnChanges(changes: SimpleChanges): void {

  //   console.log('onChange');
  //   console.log(changes);
  // }

  ngDoCheck(): void {

    console.log('do Chaedj');

  }

  ngOnDestroy(): void {
    console.log('OnDestroy');

  }

  addToCart() {
    console.log('Agregar al carrito');

    this.productClick.emit(this.product.id);
  }

}
