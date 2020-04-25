import { environment } from './../../../../environments/environment.prod';
import { Product } from '../../model/product';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Product[];
  url = environment.url_api;

  constructor(private http: HttpClient) {

    console.log(this.url);


   }

   getAllProduct() {
     return this.http.get<Product[]>(this.url + 'products');
   }

   getProduct(id: number) {
    return this.http.get<Product>(this.url + 'products/' + id);
   }

   createProduct(product: Product) {
    return this.http.post(this.url + 'products', product);
   }

   updateProduct(id: number, changes: Partial<Product>) {
    return this.http.put(this.url + 'products/' + id, changes);
   }

   deleteProduct(id: number) {
     return this.http.delete(this.url + 'products/' + id);
   }

}
