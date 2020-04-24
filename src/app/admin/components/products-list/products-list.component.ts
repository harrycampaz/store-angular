import { Product } from './../../../model/product';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products: Product[] = [];
  displayedColumns: string[] = ['id', 'title', 'price', 'action'];

  constructor(private productService: ProductsService) { }

  ngOnInit() {

    this.fechProduct();
  }

  fechProduct() {
    this.productService.getAllProduct()
    .subscribe(products => {
      this.products = products;
      console.log(products);
    });
  }

  deleteProduct(id: number) {

    console.log('eliminar ' + id);

    this.productService.deleteProduct(id).subscribe(response => {

      console.log(response);
      this.fechProduct();


    });
  }

}
