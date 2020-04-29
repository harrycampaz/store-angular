import { environment } from './../../../../environments/environment';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ProductsService } from './products.service';
import { HttpClient } from '@angular/common/http';

describe('ProductsService', () => {

  let httpClient: HttpClient;
  let httpTestingController: HttpClientTestingModule;

  let service: ProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(ProductsService);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Test for getAllProduct', () => {

    //Preparar

    // it('Shop', () => {
    //   const expectData = [
    //     {
    //       id: 1,
    //       image: 'asss',
    //       title: 'assas',
    //       price: 20000,
    //       description: 'assass'
    //     },
    //     {
    //       id: 2,
    //       image: 'as/ss',
    //       title: 'qqqq assas',
    //       price: 20000,
    //       description: 'assass'
    //     }
    //   ];

    //   let dataError, dataResponse;

    //   service.getAllProduct()
    //     .subscribe(response => {

    //       dataResponse = response;
    //     }, error => {

    //       dataError = error;
    //     });


    //  // const req = httpTestingController.e;
    // });


  });
});
