import { Product } from '../../../core/model/product';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
//import * as FileSaver from 'file-saver';

// import * as FileSaver from 'file-server';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  //product: Product;

  product$: Observable<Product>;
  constructor( private route: ActivatedRoute, private productService: ProductsService) {
  }
  ngOnInit() {

    // this.route.params
    // .pipe(
    //   switchMap((params: Params) => {
    //     return this.productService.getProduct(params.id);
    // })
    // )
    // .subscribe(product => {
    //   this.product = product;
    // });

    //this.getRandomUser();

    this.getFile();

    this.product$ = this.route.params
    .pipe(
      switchMap((params: Params) => {
        return this.productService.getProduct(params.id);
    }));

  }

  // fechProduct(id: number) {
  //   this.productService.getProduct(id)
  //   .subscribe(product => {
  //     this.product = product;
  //   });
  // }

  getRandomUser() {
    this.productService.getRandonUser()
    .subscribe(
      users => {

      console.log(users);

    }, error => {
      console.log(error);

    });
  }

  getFile() {
    this.productService.getFile()
    .subscribe(content => console.log(content)
    );

  }

  // getFileDownload() {
  //   this.productService.getFile()
  //     .subscribe(content => {
  //       var blob = new Blob([content], {type: 'text/plain;charset=utf-8'});
  //       FileSaver.saveAs(blob, 'archivo.txt');
  //     });
  //   }

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
