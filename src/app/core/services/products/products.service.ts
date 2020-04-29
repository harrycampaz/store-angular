import { Observable , throwError} from 'rxjs';
import { environment } from './../../../../environments/environment.prod';
import { Product } from '../../model/product';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
// import * as Sentry from '@sentry/browser';


import { map, catchError, retry } from 'rxjs/operators';


interface User {
  email: string;
  gender: string;
  phone: string;
}

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

  getRandonUser(): Observable<User[]> {
     return this.http.get('https://randomuser.me/api/?results=2')
     .pipe(
       retry(3),
      catchError(this.handleError),
      map((response: any) => response.results as User[]));
  }

  getFile() {
    return this.http.get('assets/files/test.txt', {responseType: 'text'});
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);
    // Sentry.captureException(error);
    return throwError('Ups somethig error');
  }
}
